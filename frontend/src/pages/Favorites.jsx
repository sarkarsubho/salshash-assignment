import axios from "axios";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      // fetch favourites from DB
      const response = await axios.get("http://localhost:8080/api/favourites");
      setFavourites(response.data);
    };
    fetchFavourites();
  }, []);

  return (
    <div>
      <div className="movies">
        {favourites.length > 0 &&
          favourites.map((result) => (
            <div className="card" key={result.imdbID}>
              <img src={result.Poster} alt={result.Title} />
              <h2>{result.Title}</h2>
              <p>Year: {result.Year}</p>
              <p>Type: {result.Type}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
