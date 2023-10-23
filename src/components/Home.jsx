// src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Home.css'

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchHackerNews = async () => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
    console.log(response);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Hacker News"
          value={query}
          onChange={(e) => 
          setQuery(e.target.value)
          }
          className="search-input"
        />
        <button onClick={searchHackerNews} className="search-button">
          Search
        </button>
      </div>
      
     
      <ul className="results-list">
        {results.map((result) => (
          <li key={result.objectID} className="results-item">
            <a href={`/post/${result.objectID}`}>{result.title}</a>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Home;
