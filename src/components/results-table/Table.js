import "./Table.css";
import TableData from "./TableData";

export default function Table({ searchResult }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="table-headers">Project</th>
            <th className="table-headers">Episode</th>
            <th className="table-headers">Timecode</th>
            <th className="table-headers">Character</th>
            <th className="table-headers">Line</th>
          </tr>
        </thead>
        {searchResult &&
          searchResult.map((result) =>
            result.map((found) => (
              <TableData
                key={found.id}
                project={found.project}
                timecode={found.timecode}
                line={found.line}
                character={found.character}
                episode={found.episode}
              />
            ))
          )}
      </table>
    </div>
  );
}
