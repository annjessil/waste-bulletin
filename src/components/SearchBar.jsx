import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState('Object');
  const [allData, setAllData] = useState([]); // Save fetched data once!

  // Fetch data on component mount only ONCE
  useEffect(() => {
    fetch("/ucla_waste_data_complete.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setAllData(json);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []); // Empty dependency array = run only once

  const ColumnDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (status) => {
      setSelectedStatus(status);
      setIsOpen(false); // Close dropdown after selection
      // Also refetch based on current input!
      fetchData(input, status);
    };

    return (
      <div className="search-dropdown" ref={dropdownRef}>
        <button className="search-dropdown-btn" onClick={toggleDropdown}>
          {selectedStatus}
        </button>
        {isOpen && (
          <div className="search-dropdown-content">
            <div className="search-dropdown-item" onClick={() => handleSelect("Location")}>Location</div>
            <div className="search-dropdown-item" onClick={() => handleSelect("Object")}>Object</div>
          </div>
        )}
      </div>
    );
  };

  // Main search function
  const fetchData = (value, status = selectedStatus) => {
    if (!value) {
      setResults([]);
      return;
    }

    const results = allData.filter((item) => {
      if (status === "Location") {
        return item.location && item.location.toLowerCase().includes(value.toLowerCase());
      } else if (status === "Object") {
        return item.name && item.name.toLowerCase().includes(value.toLowerCase());
      }
      return false;
    });

    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <ColumnDropdown />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
