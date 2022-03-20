import React, { useState } from "react";
import "./styles.css";

import { moviesData } from "./moviesData";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie";
import SearchMovie from "./Components/SearchMovie";
export default function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
const[searchByName,setSearchByName]= useState('')


  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="App">
      <SearchMovie setSearchByName={setSearchByName}/>
      <MoviesList moviesList={moviesList} searchByName={searchByName}/>
      <AddMovie addNewMovie={addNewMovie} />
    </div>
  );
}
