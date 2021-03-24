const select = document.querySelector("select");
const reviews = document.querySelector("#submitted-reviews");
const form = document.querySelector("form");
const ul = document.querySelector("#submitted-reviews");


const createOptions = async () => {
  const allMovies = await axios.get("https://ghibliapi.herokuapp.com/films/");
  allMovies.data.forEach((movie) => {
    const option = document.createElement("option");
    option.innerText = movie.title;
    select.appendChild(option);
    option.value = movie.id;
  });
};
createOptions();

const title = document.querySelector("#movie-title");
const year = document.querySelector("#movie-release-year");
const description = document.querySelector("#movie-description");

select.addEventListener("change", async (e) => {
  const selectedMovie = e.target.value;
  const movieInfo = await axios.get(
    `https://ghibliapi.herokuapp.com/films/${selectedMovie}`
  );
  if (selectedMovie !== "") {
    year.innerText = movieInfo.data.release_date;
    description.innerText = movieInfo.data.description;
    title.innerText = movieInfo.data.title;
  } else {
    title.innerText = "";
    year.innerText = "";
    description.innerText = "";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const input = document.querySelector("input[type=text]")
  li.innerText = `${title.textContent} ${input.value}`;
  li.innerHTML = `<b>${title.textContent}:</b> ${input.value}`;
  ul.appendChild(li);
  input.value = ""
});
