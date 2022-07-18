export default function Description(props) {
  console.log(props);

  if (props.data != null) {
    let def = props.data[0].meanings[0].definitions;
    console.log(def);
    return (
      <div>
        <h2>{props.data[0].word}</h2>
        {def.map((val, index) => (
          <p key={index}>
            {index + 1}. {val.definition} <br />
            <em>{val.example}</em>
          </p>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
