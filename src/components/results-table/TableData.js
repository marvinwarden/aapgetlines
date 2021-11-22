export default function TableData(props) {
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
