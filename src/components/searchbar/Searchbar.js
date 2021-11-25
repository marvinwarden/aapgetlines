import "./Searchbar.css";
import Table from "../results-table/Table.js";
import { useState } from "react";
import data from "../../lines.json";

export default function Searchbar() {
  const [project, setProject] = useState("");
  const [character, setCharacter] = useState("");
  const [episode, setEpisode] = useState("");
  const [line, setLine] = useState("");

  const [result, setResult] = useState([]);

  // data search from form input

  const lineSearch = (e) => {
    const characterSearched = data.filter((result) =>
      result.character.toLowerCase().includes(character.toLowerCase())
    );

    if (character !== "" && project !== "") {
      if (episode !== "" || line !== "") {
        if (episode !== "") {
          const epSearched = characterSearched.filter(
            (result) =>
              result.episode === episode &&
              result.line.toLowerCase().includes(line.toLowerCase()) &&
              result.project.toLowerCase().includes(project.toLowerCase())
          );
          return setResult([epSearched]);
        }

        const lineSearched = characterSearched.filter((result) =>
          result.line.toLowerCase().includes(line.toLowerCase())
        );
        return setResult([lineSearched]);
      }

      const projectSearched = characterSearched.filter((result) =>
        result.project.toLowerCase().includes(project.toLowerCase())
      );
      setResult([projectSearched]);
    }

    e.preventDefault();
  };

  //clear search

  const clearSearch = (e) => {
    setResult([]);

    setCharacter("");
    setProject("");
    setLine("");
    setEpisode("");
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <div className="search-section">
        <h2>Line search</h2>
        <div className="search-form">
          <form>
            <div className="search-input-wrapper">
              <label>Project: </label>
              <input
                onChange={(e) => setProject(e.target.value)}
                className="search-input"
                value={project}
                onKeyDown={(e) => e.key === 13 && lineSearch()}
              />
              <label>Character: </label>
              <input
                onChange={(e) => setCharacter(e.target.value)}
                className="search-input"
                value={character}
              />
            </div>
            <div className="advanced-section">
              <div className="advanced-search-bar">
                <div className="advanced-search-input-wrapper">
                  <label>Episode Range: </label>
                  <input
                    type="text"
                    onChange={(e) => setEpisode(e.target.value)}
                    className="search-input"
                    value={episode}
                  />
                  <label>Line: </label>
                  <input
                    onChange={(e) => setLine(e.target.value)}
                    className="search-input"
                    value={line}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="form-btn">
          <button onClick={lineSearch} className="search-btn">
            Search
          </button>
          <button onClick={clearSearch} className="search-btn">
            Reset
          </button>
        </div>
      </div>

      <Table searchResult={result} />
    </div>
  );
}
