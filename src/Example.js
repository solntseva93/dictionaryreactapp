export default function Example(props) {
  if (props) {
    return <em>{props.val}</em>;
  } else {
    return null;
  }
}
