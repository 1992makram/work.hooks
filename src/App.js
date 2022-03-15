import React, { useState } from "react";
import "./styles.css";
import { moviesData } from "./moviesData";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie";
export default function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="App">
      <MoviesList moviesList={moviesList} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}
