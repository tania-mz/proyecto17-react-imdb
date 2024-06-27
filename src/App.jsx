import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/footer';
import './css/App.css'; 

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
