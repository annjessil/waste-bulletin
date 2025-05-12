import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  console.log(result);  // Log the full object to verify fields
  return (
    <div className="search-result">
      <div className="user-info">
        <div className="user-details">
          <div className="user-specific">
            <h1>{result.object}</h1>
            <p><strong>Location: </strong>{result.location}</p>
            <p><strong>Mode: </strong>{result.mode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
