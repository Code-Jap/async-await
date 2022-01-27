const API_KEY = "e27d8c517052a801f9f9831a71afa2b8";

const getData = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
  // console.log(res)
     console.log(data);

    return data;
  } catch (err) {
    console.log(errmessage);
  }
};
