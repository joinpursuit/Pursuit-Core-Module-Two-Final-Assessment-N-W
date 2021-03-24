const movieTitles = document.querySelector("#movie-titles");
const displayInfo = document.querySelector("#display-info");
const releaseYear = document.querySelector("#release-year");
const description = document.querySelector("#description");
const title = document.querySelector("#title");
const form = document.querySelector("#form");
const textInput = document.querySelector("#text-input");
const submit = document.querySelector("#submit");
const reviewList = document.querySelector("#review-list");
const getAllMovies = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    res.data.forEach((films) => {
      const option = document.createElement("option");
      option.textContent = films.title;
      option.value = films.id;
      movieTitles.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
};
getAllMovies();
