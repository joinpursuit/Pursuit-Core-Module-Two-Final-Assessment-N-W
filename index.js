const form = document.querySelector("form");
const movieTitles = document.querySelector("#movie-titles");
const displayInfo = document.querySelector("#display-info");
const releaseYear = document.querySelector("#release-year");
const description = document.querySelector("#description");
const title = document.querySelector("#title");

const textInput = document.querySelector("#text-input");
const submit = document.querySelector("#submit");
const ul = document.querySelector("ul");

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
movieTitles.addEventListener("change", async (e) => {
  try {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`);
    title.textContent = res.data.title;
    releaseYear.textContent = res.data.release_date;
    description.textContent = res.data.description;
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const li = document.createElement("li");
      li.innerHTML = `<b>${title.textContent}:</b> ${textInput.value}`;
      ul.appendChild(li);
      textInput.value = "";
    });
  } catch (error) {
    console.log(error);
  }
});
