import "./Searchbar.css";
import "./AdvancedSearch.css";

export default function AdvancedSearch(props) {
  return (
    <div className="advanced-search-bar">
      <div className="advanced-search-input-wrapper">
        <label>Episode Range: </label>
        <input className="search-input" />
        <label>Line: </label>
        <input
          onChange={(e) => {
            props.search(e);
          }}
          className="search-input"
        />
      </div>
      <p
        onClick={() => {
          props.toggle();
        }}
      >
        Close
      </p>
    </div>
  );
}
