import MovieCard from "./MovieCard";

function MoviesList({ moviesList }) {
  return (
    <div>
      {moviesList.map((el, i) => (
        <MovieCard movie={el} />
      ))}
    </div>
  );
}
export default MoviesList;