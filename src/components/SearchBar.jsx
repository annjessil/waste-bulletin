import { useState, useEffect, useRef } from 'react';
import {FaSearch} from 'react-icons/fa';

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState('Object');

  const ColumnDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => { document.removeEventListener('mousedown', handleClickOutside); };
          }, []);
    
        const toggleDropdown = () => { setIsOpen(!isOpen); };
    
        const handleSelect = (status) => {
            setSelectedStatus(status);
            setIsOpen(false); // Close dropdown after selection
        };
    
        return (
            <div className="search-dropdown">
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
    }

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

  return <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <ColumnDropdown/>
        <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>    
    </div>
};

/*
export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('Industry');

    const ColumnDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => { document.removeEventListener('mousedown', handleClickOutside); };
          }, []);
    
        const toggleDropdown = () => { setIsOpen(!isOpen); };
    
        const handleSelect = (status) => {
            setSelectedStatus(status);
            setIsOpen(false); // Close dropdown after selection
        };
    
        return (
            <div className="search-dropdown">
                <button className="search-dropdown-btn" onClick={toggleDropdown}>
                    {selectedStatus}
                </button>
                {isOpen && (
                    <div className="search-dropdown-content">
                        <div className="search-dropdown-item" onClick={() => handleSelect("Industry")}>Industry</div>
                        <div className="search-dropdown-item" onClick={() => handleSelect("Major")}>Major</div>
                    </div>
                )}
            </div>
        );
    }

    const fetchData = async (value) =>{
        if (value.length == 0) {
            setResults([]);
            return;
        } 
        const data = await querySearch(selectedStatus, value);
        setResults(data);
    }
    
    const handleChange = (value) => {
        setInput(value)
        fetchData(value);
    }

    return <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <ColumnDropdown/>
        <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>    
    </div>
};

*/