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
      result.character.toLowerCase().includes(character)
    );

    if (character !== "" && project !== "") {
      if (line !== "") {
        if (episode !== "") {
          const epSearched = characterSearched.filter((result) =>
            result.episode.toLowerCase().includes(episode)
          );
          epSearched.map((ep) => {
            console.log(ep.episode);
            return ep.episode === episode
              ? setResult([epSearched])
              : console.log("no match found");
          });
        }
        const lineSearched = characterSearched.filter((result) =>
          result.line.toLowerCase().includes(line)
        );
        return setResult([lineSearched]);
      }

      const projectSearched = characterSearched.filter((result) =>
        result.project.toLowerCase().includes(project)
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
                onChange={(e) => setProject(e.target.value.toLowerCase())}
                className="search-input"
                value={project}
              />
              <label>Character: </label>
              <input
                onChange={(e) => setCharacter(e.target.value.toLowerCase())}
                className="search-input"
                value={character}
              />
            </div>
            <div className="advanced-section">
              <div className="advanced-search-bar">
                <div className="advanced-search-input-wrapper">
                  <label>Episode Range: </label>
                  <input
                    onChange={(e) => setEpisode(e.target.value.toLowerCase())}
                    className="search-input"
                    value={episode}
                  />
                  <label>Line: </label>
                  <input
                    onChange={(e) => setLine(e.target.value.toLowerCase())}
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
