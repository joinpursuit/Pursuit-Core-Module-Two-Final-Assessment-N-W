const select = document.querySelector("#title-of-movies");
const form = document.querySelector("form");
const ul = document.querySelector("#submitted-reviews");
const section = document.querySelector("#display-info");

const getMovieTitles = async () => {
  try {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`);
    res.data.forEach((film) => {
      const option = document.createElement("option");
      option.innerText = film.title;
      option.value = film.id;
      console.log(option.value);
      select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }
};
getMovieTitles();

select.addEventListener("change", async (e) => {
  try {
    e.preventDefault;
    section.innerText = "";
    const data = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
    const res = await axios.get(data);
    const title = document.createElement("h3");
    const releaseYear = document.createElement("p");
    const description = document.createElement("p");
    title.innerText = res.data.title;
    description.innerText = res.data.description;
    releaseYear.innerText = res.data["release_date"];
    section.appendChild(title);
    section.appendChild(releaseYear);
    section.appendChild(description);
    select.innerText = res.data.title;
  } catch (err) {
    console.log(err);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getMovieTitles();
  const title = document.querySelector("h3");
  const review = document.querySelector("#reviews");
  const input = document.querySelector("input");
  const li = document.createElement("li");
  review.innerHTML = title.textContent;
  li.innerHTML = `<strong>${title.textContent}: </strong>  ${review.value}`;
  ul.appendChild(li);
  input.value = "";
});
