import MovieCard from "./MovieCard";
import "../App.css";

function MoviesList({ moviesList,searchByName}) {
  return (
    <div>
      {moviesList.filter((elt)=>elt.name.toLowerCase().includes(searchByName))
      .map((el, i) => (
        <MovieCard movie={el} />
      ))}
    </div>
  );
}
export default MoviesList;