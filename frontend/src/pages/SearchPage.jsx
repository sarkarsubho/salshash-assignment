import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = "YOUR_OMDB_API_KEY";
    const url = `http://www.omdbapi.com/?i=tt3896198&s=${searchTerm}&apikey=47d98e7b`;
    const response = await axios.get(url);
    console.log(response.data);
    setResults(response.data.Search);
  };

  const handleFavourite = (result) => {
    // save result to DB
    axios.post("/api/favourites", result);
    setFavourites([...favourites, result]);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie or TV show"
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies">
        {results.map((result) => (
          <div className="card" key={result.imdbID}>
            <img src={result.Poster} alt={result.Title} />
            <h2>{result.Title}</h2>
            <p>Year: {result.Year}</p>
            <p>Type: {result.Type}</p>
            <button onClick={() => handleFavourite(result)}>Favourite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
