import "./Searchbar.css";
import Table from "../results-table/Table.js";
import AdvancedSearch from "./AdvancedSearch";
import { useState } from "react";
import data from "../../lines.json";

export default function Searchbar() {
  const [advancedSearchLoad, setAdvancedSearchLoad] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [result, setResult] = useState([]);

  // open and close advanced search
  const advancedSearchOpen = () => {
    setAdvancedSearchLoad(true);
  };
  const advancedSearchClose = () => {
    setAdvancedSearchLoad(false);
  };

  // data search from form input
  const characterSearch = (e) => {
    const newSearch = e.target.value.toLowerCase();
    const matchedSearch = data.filter((result) =>
      result.character.toLowerCase().includes(newSearch)
    );

    if (newSearch !== "") {
      setResult([matchedSearch]);
      setShowTable(true);
    } else {
      setResult([]);
      setShowTable(false);
    }
  };

  const lineSearch = (e) => {
    const newSearch = e.target.value.toLowerCase();
    const lineSearched = data.filter((result) =>
      result.line.toLowerCase().includes(newSearch)
    );

    if (newSearch !== "") {
      setResult([lineSearched]);
      setShowTable(true);
    } else {
      setResult([]);
      setShowTable(false);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-section">
        <div className="search-input-wrapper">
          <h2>Line search</h2>
          <label>Project: </label>
          <input className="search-input" />
          <label>Character: </label>
          <input onChange={characterSearch} className="search-input" />
        </div>
        <div className="advanced-section">
          <h2 onClick={advancedSearchOpen}>Advanced search</h2>
          {advancedSearchLoad && (
            <AdvancedSearch toggle={advancedSearchClose} search={lineSearch} />
          )}
        </div>
      </div>
      {showTable && <Table searchResult={result} />}
    </div>
  );
}
