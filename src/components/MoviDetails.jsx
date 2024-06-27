import React from 'react';
import movieImage from '../assets/imagen1.webp';
import '../css/MoviDetails.css';  

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
