export default function Phonetics(props) {
  if (props.val[0].audio !== "") {
    return (
      <div className="phonetics">
        <figure>
          <audio controls src={props.val[0].audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    );
  } else return null;
}
