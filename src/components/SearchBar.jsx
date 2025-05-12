import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
  fetch("./ucla_waste_data_complete.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((json) => {
      const results = json.filter((item) => {
        return (
          value &&
          item &&
          item.location &&
          item.name &&
          item.mode &&
          (
            item.location.toLowerCase().includes(value.toLowerCase()) ||
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.mode.toLowerCase().includes(value.toLowerCase())
          )
        );
      });
      setResults(results);
    })
    .catch((error) => {
      console.error("Error fetching the data:", error);
    });
};



  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};