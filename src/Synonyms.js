import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.val.length !== 0) {
    return (
      <div>
        <p>
          <strong>Synonyms: </strong>
        </p>
        <div className="synonyms">
          {props.val.map((val, index) => (
            <div key={index}>{val}</div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
