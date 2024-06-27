import React from 'react';
import '../css/CardMovie.css'; // Ajusta la ruta si es necesario

const CardMovie = ({ image, title, rating }) => {
  return (
    <div className="card-movie">
      <img src={image} alt={title} className="card-movie-image" />
      <div className="card-movie-info">
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default CardMovie;
