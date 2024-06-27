import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import { Route, Routes } from "react-router-dom";
import ContentMainPage from './components/ContentMainPage.jsx';
import ContentSearchPage from './components/ContentSearchPage.jsx';
import ContentShowInfoMovie from './components/ContentShowInfoMovie.jsx'

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <Routes>
        <Route path="/" element={<ContentMainPage />} />
        <Route path="/search-movie" element={<ContentSearchPage ruta/>} />
        <Route path="/movie-details" element={<ContentShowInfoMovie />} />
      </Routes>
    </div>
  );
}

export default App;
