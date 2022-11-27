import React, { useEffect, useState, ChangeEvent, useContext } from 'react';
import { Button, Box, TextField, Chip } from '@mui/material';
import { MovieContext } from '../context/MovieProvider';

const Movie = () => {
  const [newMovie, setNewMovie] = useState('');
  const onChangeMovie = (e: ChangeEvent<HTMLInputElement>) =>
    setNewMovie(e.target.value);

  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
//   console.log({ movies, addMovie, deleteMovie });
  return (
    <>
      <div >
        <Box display="flex" justifyContent="center" my={5}>
          <TextField
            label="Your movie"
            onChange={onChangeMovie}
            value={newMovie}
          />
          <Button
            variant="contained"
            color="primary"
            // style={{ height: '50px', marginTop: '43px' }}
            onClick={() => {
              addMovie(newMovie);
              setNewMovie('');
            }}
          >
            Add
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap' mx={5}>
            {movies.map(m => (
                <Chip key={m.id} label={m.title} clickable color='primary' className='Chip-movies'
                style={{fontSize: '2rem', padding: '30px 20px', margin: '5px'}}
                onDelete={deleteMovie.bind(this, m.id)}
                />
            ))}
        </Box>
      </div>
    </>
  );
};

export default Movie;
