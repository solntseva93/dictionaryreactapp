import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.data !== null) {
    return (
      <div className="images">
        {props.data.map((val, index) => (
          <div key={index}>
            <img src={val.src.tiny} alt={`PhotoDescription${index}`} />
          </div>
        ))}
      </div>
    );
  } else return null;
}
