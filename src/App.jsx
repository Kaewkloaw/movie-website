import { useEffect, useState } from 'react';
import Search from './component/search.jsx';
import Spinner from './component/spinner.jsx';
import MovieCard from './component/movieCard.jsx';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite.js';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmZjZmUxZjg1MzFkY2FkZDJlZmM3ZjQ3NWRmYzhlZSIsIm5iZiI6MTc2MTQyNzg1NC4wMTMsInN1YiI6IjY4ZmQ0MThkZmUyYjI1NGJmNGZiNmI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ul-B7rSjGJsE2DOprJi0WpPDtRNi_s4triiyUMtnv4s';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
  try {
    const endpoint = query 
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response =  await fetch(endpoint, API_OPTIONS);
    // console.log(response.ok);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    // console.log(data);
    if(data.results === 'False') {
      setErrorMessage(data.Error || 'No movies found');
      setMoviesList([]);
      return;
    }
    setMoviesList(data.results || []);
    updateSearchCount();
  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
    setErrorMessage('Failed to fetch movies. Please try again later.');
  } finally {
    setIsLoading(false);
  }
}
  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <main>
      <div className ="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>Find <span className="text-gradient">Movie</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App