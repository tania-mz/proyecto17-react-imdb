import { useState } from 'react'
import './App.css'
import CardMovie from './templates/CardMovie.jsx'
import SearchBar from './templates/SearchBar.jsx'
import CardPeople from './templates/CardPeople.jsx'
import { Route, Routes } from "react-router-dom";

const Home = () => 
  <div className='main-container'>
        <h2>Top movies</h2>
        <div className='movies-shows-container'>
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
        </div>
        <h2>Top TV Shows</h2>
        <div className='movies-shows-container'>
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
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
      </div>;

const SearchMovie = () => 
  <div className='main-container'>
    <div className='search-movie'>
      <div className='card-movies'>
        <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
          <CardMovie
            image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fnewmovies55%2F&psig=AOvVaw2zWPdxgJP2n3KqdlxC4y10&ust=1719531625782000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCH1s-4-oYDFQAAAAAdAAAAABAE'
            title='Popeye'
            rating='9.5'
          />
      </div>
      <div className='movie-generes'>
        <ul className='movie-generes-list'>
          <li>Action</li>
          <li>Comedy</li>
          <li>Sci-Fi</li>
          <li>Horror</li>
          <li>Drama</li>
          <li>Documentary</li>
        </ul>
      </div>
    </div>
    <div className='load-more'>
      <div className='load-previous'>-</div>
      <span>1</span>
      <div className='load-next'>+</div>
    </div>
  </div>;

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-movie" element={<SearchMovie />} />
        <Route path="/search-people" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
