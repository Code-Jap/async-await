const unorderedList = document.querySelector("#ul");

const retrieveData = async () => {
  await getData();
};


const getMovieGenres = async (data) => {
  try {
    const listItems = await data.map((item) => {
      
      const newLi = document.createElement("li");
      return newLi;
    });
  
    listItems.forEach((li) => {
      unorderedList.appendChild(li);
    });

  } catch (err) {
    console.log(err.message)
  }
  
};

getMovieGenres(retrieveData());
