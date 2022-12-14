import { createContext , ReactNode , useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface MovieContextProps {
    children: ReactNode 
}

interface Movie {
    id: string
    title:  string
}

interface MovieContextDefault {
    movies: Movie[]
    addMovie: (title: string) => void
    deleteMovie: (id: string) => void  
}
const movieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {}  
}

export const MovieContext = createContext<MovieContextDefault>(movieContextDefaultData)

const MovieProvider = ({children}: MovieContextProps) => {
    const [movies, setMovie] = useState<Movie[]>(movieContextDefaultData.movies)
    const addMovie = (title: string) => 
      setMovie([...movies, {id:uuidv4(), title}])
    
    const deleteMovie = (id: string) => setMovie(movies.filter(m => m.id !== id))
    const movieContextData = {movies, addMovie, deleteMovie}
  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider