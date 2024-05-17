import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      // fetch favourites from DB
      const response = await axios.get("/api/favourites");
      setFavourites(response.data);
    };
    fetchFavourites();
  }, []);

  return (
    <div>
      <div className="movies">
        {favourites.map((result) => (
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

export default Favorites;
