import movieImage from '../assets/popeye.jpeg';
import '../css/MovieDetails.css';  

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <div className="movie-info">
        <img src={movieImage} alt="Interstellar" />
        <div className="details">
          <h2>prueba</h2>
          <p>prueba</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
