import React from 'react';
import MovieDetails from './MoviDetails';  
import MoreLikeThis from './MoreLikeThis';

const MainContent = () => {
  return (
    <main className="main-content">
      <MovieDetails />
      <MoreLikeThis />
    </main>
  );
};

export default MainContent;
