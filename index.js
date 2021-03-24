const allFilms = document.querySelector("#all-films");
const main = document.querySelector("main");
const name = document.querySelector("#film-name");
const year = document.querySelector("#film-year");
const description = document.querySelector("#film-description");
const form = document.querySelector("form");
const comments = document.querySelector("#film-comments-ul");

const getAllFilms = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    res.data.forEach((film) => {
      const selectBox = document.querySelector("#all-films");
      let options = document.createElement("option");
      options.text = film.title;
      options.value = film.id;
      selectBox.appendChild(options);
    });
  } catch (error) {
    console.log(error);
  }
};
getAllFilms();

allFilms.addEventListener("change", async (event) => {
  const url = `https://ghibliapi.herokuapp.com/films/${event.target.value}`;
  const res = await axios.get(url);
  name.textContent = res.data.title;
  year.textContent = res.data.release_date;
  description.textContent = res.data.description;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = document.querySelector("#comment");
  console.log(comment);
  const li = document.createElement("li");
  li.innerHTML = `<b>${name.textContent}:</b> ${comment.value}`;
  comments.appendChild(li);
  comment.value = "";
});
