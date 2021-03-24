// const { default: axios } = require("axios");


const select = document.querySelector("select");
const form = document.querySelector("form");
const reviewInput = document.querySelector("#review-input");
const submittedReviewsUl = document.querySelector("#submitted-reviews-ul");
const movieTitle = document.querySelector("#title-h3");
const releaseYear = document.querySelector("#release-year-p");
const movieDescription = document.querySelector("#description-p");

const createMovieSelector = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");

    res.data.forEach((movie) => {
      const option = document.createElement("option");
      option.innerText = movie.title;
      select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }
  select.addEventListener("change", async (e) => {
    try {
    //   e.preventDefault();
      const selectedMovie = e.currentTarget.value;
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      res.data.forEach((movie) => {
        if (movie.title === selectedMovie) {
          movieTitle.innerHTML = movie.title;
          releaseYear.innerHTML = movie.release_date;
          movieDescription.innerHTML = movie.description;
        }
      });
    } catch {
      console.log("Sorry there was an error");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newReviewLi = document.createElement("li");
  newReviewLi.innerHTML = `<b>${movieTitle.innerHTML}:</b> ${reviewInput.value}`;
  submittedReviewsUl.appendChild(newReviewLi);
  reviewInput.value = ""
});
createMovieSelector();
