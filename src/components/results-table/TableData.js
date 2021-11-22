export default function TableData(props) {
  console.log("data", props.character);
  return (
    <tbody>
      <tr>
        <td>{props.project}</td>
        <td>{props.episode}</td>
        <td>{props.timecode}</td>
        <td>{props.character}</td>
        <td>{props.line}</td>
      </tr>
    </tbody>
  );
}
