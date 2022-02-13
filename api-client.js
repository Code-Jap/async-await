const API_KEY = "e27d8c517052a801f9f9831a71afa2b8";
const externalSource = "imdb_id";
const genre = '18';
const year = 1975;

const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const favouriteMovieUrl = `https://api.themoviedb.org/3/find/tt0245429?api_key=${API_KEY}&external_source=${externalSource}`;
const topTenUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
const topActionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
const moviesFrom1975Url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=${year}`


const getData = async (url) => {
  try {
    // const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

