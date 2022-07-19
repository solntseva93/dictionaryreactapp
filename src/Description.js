import Example from "./Example";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Description(props) {
  if (props.data != null) {
    let def = props.data[0].meanings[0].definitions;

    return (
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h2>{props.data[0].word}</h2>
          <Phonetics val={props.data[0].phonetics} />
          <p className="mt-1 text-muted">
            {typeof props.data[0].phonetic === "string"
              ? props.data[0].phonetic
              : props.data[0].phonetics[1].text}
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          {def.map((val, index) => (
            <div key={index}>
              <p>
                {index + 1}. {val.definition} <br />
                <Example val={val.example} />
              </p>
              <Synonyms val={val.synonyms} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
