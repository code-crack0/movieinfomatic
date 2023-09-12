import { useEffect,useState } from 'react';
import MovieCard from './Moviecard'
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=32d2c54a'
const movie1 = 
    {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman')
    },[])
    return (
        <div className='app'>
            <h1>MovieInfo</h1>

            <div className='search'>
                <input placeholder='Search for movies' value={SearchTerm} onChange={(e) => setSearchTerm(e.target.value )}>

                </input>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(SearchTerm)} />
            </div>
            {
                movies?.length > 0 
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ) )}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>  
                    )

                            
            }
            

        </div>
    )
}
export default App;