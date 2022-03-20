import "./movieCard.css";
import Rate from "./Rate";
const MovieCard = ({ movie }) => {
    console.log(movie)
  return (
    <div className="card">
      <div className="card">
      <div className="card_left">
        <img src={movie.image} alt="poster" />
      </div>

      <h2>{movie.name}</h2>
      <h3>{movie.rating}</h3>
      <Rate rating={movie.rating} />
      <h4>{movie.date}</h4>
      <h5>{movie.type}</h5>
      <p>{movie.description}</p>
    </div>
    </div>
  );
};
export default MovieCard;