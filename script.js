const unorderedList1 = document.querySelector("#ul");
const unorderedList2 = document.querySelector("#ul2");
const unorderedList3 = document.querySelector("#ul3");
const unorderedList4 = document.querySelector("#ul4");
const favourite = document.querySelector("#favourite");


const getMovieGenres = async (data) => {
  const dataObject = await data;
  console.log("Dataobject:", dataObject);

  const genreArray = dataObject.genres;
  console.log("GenreArray:", genreArray);

  try {
    const listItems = genreArray.map((item) => {
      const newLi = document.createElement("li");
      const liString = `Genre naam: ${item.name}, id: ${item.id}`;

      newLi.innerHTML = liString;
      return newLi;
    });

    listItems.forEach((item) => {
      unorderedList1.appendChild(item);
    });
  } catch (err) {
    console.log(err.message);
  }
};

getMovieGenres(getData(apiUrl));

const GetSpiritedAway = async (data) => {
  const dataObject = await data;
  console.log("getSpiritedAway dataObject:", dataObject);

  const results = dataObject.movie_results;
  console.log("getSpiritedAway results:", results);

  const title = results[0].title;
  console.log("getSpiritedAway title:", title);

  try {
    const movieName = title;
    favourite.innerHTML = movieName;
  } catch (err) {
    console.log(err.message);
  }
};

GetSpiritedAway(getData(favouriteMovieUrl));

const getTopRatedMovies = async (data) => {
  const dataObject = await data;
  console.log("getTopRatedMovies dataObject:", dataObject);

  const results = dataObject.results;
  console.log("getTopRatedMovies results:", results);

  try {
    const listItems = results.slice(0, 10).map((item) => {
      const newLi = document.createElement("li");
      const liString = item.title;

      newLi.innerHTML = liString;
      return newLi;
    });

    listItems.forEach((item) => {
      unorderedList2.appendChild(item);
    });
  } catch (err) {
    console.log(err.message);
  }
};

getTopRatedMovies(getData(topTenUrl));

const getTopRatedActionMovies = async (data) => {
  const dataObject = await data;
  console.log("getTopRAtedActionMovie dataObject:", dataObject);

  const results = dataObject.results;
  console.log("getTopRatedActioMovie results:", results);

  try {
    const listItems = results.slice(0, 10).map((item) => {
      const newLi = document.createElement("li");
      const liString = item.title;

      newLi.innerHTML = liString;
      return newLi;
    });

    listItems.forEach((item) => {
      unorderedList3.appendChild(item);
    });
  } catch (err) {
    console.log(err.message);
  }
};

getTopRatedActionMovies(getData(topActionUrl));


const getMoviesFrom1975 = async (data) => {
  const dataObject = await data;
  console.log("getMoviesFrom1975 dataObject:", dataObject);

  const results = dataObject.results;
  console.log("getMoviesFrom1975 results:", results);

  try {
    const listItems = results.slice(0, 10).map((item) => {
      const newLi = document.createElement("li");
      const liString = item.title;

      newLi.innerHTML = liString;
      return newLi;
    });

    listItems.forEach((item) => {
      unorderedList4.appendChild(item);
    });
  } catch (err) {
    console.log(err.message);
  }
};

getMoviesFrom1975(getData(moviesFrom1975Url));
