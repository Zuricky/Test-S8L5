import { useState } from "react";

const FetchMovies = ({ query, children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=74aca35e&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search.slice(0, 6));
      }
    } catch (error) {
      console.error("Error recovering movies", error);
    }
  };

  if (movies.length === 0) fetchMovies();

  return children(movies);
};

export default FetchMovies;
