import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProgressProvider from './context/ProgressProvider';
import ThemeProvider from './context/ThemeProvider';
import MovieProvider from './context/MovieProvider';
import Movie from './components/Movie';

function App() {
  return (
    <div>
      <MovieProvider>
        <ThemeProvider>
          <ProgressProvider>
            <Navbar />
            <Movie/>
          </ProgressProvider>
        </ThemeProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
