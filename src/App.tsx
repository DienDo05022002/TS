import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProgressProvider from './context/ProgressProvider';
import ThemeProvider from './context/ThemeProvider';
import MovieProvider from './context/MovieProvider';
import Movie from './components/Movie';
import AuthContextProvider from './context/AuthContext'
import { Grid } from '@mui/material';
import TopMovie from './components/TopMovie';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MovieProvider>
          <ThemeProvider>
            <ProgressProvider>
              <Navbar />
              <Grid container>
                <Grid item xs={4}>
                  <TopMovie/>
                </Grid>
                <Grid item xs={4}>
                  <Movie/>
                </Grid>
              </Grid>
            </ProgressProvider>
          </ThemeProvider>
        </MovieProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
