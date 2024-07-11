/*  eslint-disable react/prop-types */
function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={`${movie.Title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.Title}</h3>
        <p><small>RELEASE DATE: {movie.Year}</small></p>
        <p><small>TYPE: {movie.Type}</small></p>
      </div>
    </div>
  );
}



export default MovieCard;
