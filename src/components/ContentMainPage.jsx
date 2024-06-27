import React from "react";
import CardMovie from "./CardMovie";
import CardPeople from "./CardPeople";

const TopMovies = () => {
    return (
        <div className='main-container'>
          <h2>Top movies</h2>
          <div className='movies-shows-container'>
            <CardMovie
              image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
              title='Popeye'
              rating='9.5'
            />
            
          </div>
          <h2>Top Celebrities</h2>
          <div className='movies-shows-container'>
            <CardPeople nameCelebritie='Popeye' />
            <CardPeople nameCelebritie='Popeye' />
            <CardPeople nameCelebritie='Popeye' />
            <CardPeople nameCelebritie='Popeye' />
          </div>
        </div>
    );
};

function ContentMainPage() {
  return (
    <TopMovies />
  );
}

export default ContentMainPage;