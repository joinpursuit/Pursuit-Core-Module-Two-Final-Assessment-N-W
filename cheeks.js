const display = document.getElementById("display-info");
const selector = document.querySelector("select");
const button = document.querySelector("button");
const reviewHolder = document.getElementById("reviews");
const form = document.querySelector("form");
const input = document.querySelector("input");
const year = document.getElementById("release-year");
const description = document.getElementById("description");
const title = document.getElementById("title")

const getTitles = async () => {
  const allFilms = await axios.get("https://ghibliapi.herokuapp.com/films");
  allFilms.data.forEach((film) => {
    let option = document.createElement("option");
    option.innerHTML = film.title;
    selector.appendChild(option);
  });
};

const submitReview = () => {
  let review = document.createElement("li");
  review.innerHTML = `<b>${selector.value}:</b> ${input.value}`;
  reviewHolder.appendChild(review);
};

const showinfo = async () => {
  const allFilms = await axios.get("https://ghibliapi.herokuapp.com/films");
  allFilms.data.forEach((film) => {
      if(selector.value === film.title){
    year.innerHTML = film.release_date;
    // debugger;
    description.innerHTML = film.description;
    // debugger;
    title.innerHTML = `<b>${film.title}</b>`

      }
  });
};

selector.addEventListener("change", showinfo);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitReview();
  input.value = "";
});

document.addEventListener("DOMContentLoaded", getTitles);
