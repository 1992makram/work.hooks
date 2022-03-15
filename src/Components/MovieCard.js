import "./MovieCard.css";
import Rate from "./Rate";
const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <>
        {" "}
        <img src={movie.image} alt="poster" />
      </>

      <h2>{movie.name}</h2>
      <h3>{movie.rating}</h3>
      <Rate rating={rating} />
<rating />
      <h4>{movie.date}</h4>
      <h5>{movie.type}</h5>
      <p>{movie.description}</p>
    </div>
  );
};
export default MovieCard;