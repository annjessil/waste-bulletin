import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Search.css';
//src\components\SearchBar.jsx
//src\components\SearchBar.jsx
import { SearchBar } from '../components/SearchBar.jsx';
import { SearchResultsList } from '../components/SearchResultList.jsx';

const Search = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState([]);    
    return(
        
        <div>
        <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
        </div>
       
    );
}

export default Search;
