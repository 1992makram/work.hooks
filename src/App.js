import React, { useState } from "react";
import "./styles.css";

import { moviesData } from "./moviesData";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie";
import SearchMovie from "./Components/SearchMovie";
import {Routes,Route} from 'react-router-dom';
import Description from "./Components/Description";

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
      <Routes>
      <Route path='/descr/:userId'
       element={<Description />}/>
        </Routes>
      
      
    </div>
  );
}
