import { useState } from 'react';
import movieImage from '../assets/popeye.jpeg';
import '../css/MoreLikeThis.css';  

const MoreLikeThis = () => {
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 5;  
  const movies = [
    { id: 1, title: 'Prueba1', img: movieImage },
    { id: 2, title: 'Prueba2', img: movieImage },
    { id: 3, title: 'Prueba3', img: movieImage },
    { id: 4, title: 'Prueba4', img: movieImage },
    { id: 5, title: 'Prueba5', img: movieImage },
    { id: 6, title: 'Prueba6', img: movieImage },
    { id: 7, title: 'Prueba7', img: movieImage },
    { id: 8, title: 'Prueba8', img: movieImage },
    { id: 9, title: 'Prueba5', img: movieImage },
    { id: 10, title: 'Prueba6', img: movieImage },
  ];

  const nextPage = () => {
    setStartIndex((prevIndex) => 
      prevIndex + moviesPerPage >= movies.length ? 0 : prevIndex + moviesPerPage
    );
  };

  const prevPage = () => {
    setStartIndex((prevIndex) => 
      prevIndex - moviesPerPage < 0 ? movies.length - moviesPerPage : prevIndex - moviesPerPage
    );
  };

  const displayedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <div className="more-like-this">
      <h3>More like this</h3>
      <div className="movies-container">
        <button className="scroll-button" onClick={prevPage}>
          {'<'} 
        </button>
        <div className="movies-grid">
          {displayedMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={nextPage}>
          {'>'} 
        </button>
      </div>
    </div>
  );
};

export default MoreLikeThis;