import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Description(props) {
  if (props.data != null) {
    let def = props.data[0].meanings[0].definitions;
    console.log(def);
    return (
      <div>
        <h2>{props.data[0].word}</h2>
        {def.map((val, index) => (
          <div>
            <p key={index}>
              {index + 1}. {val.definition} <br />
              <Example val={val.example} />
            </p>
            <Synonyms val={val.synonyms} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
