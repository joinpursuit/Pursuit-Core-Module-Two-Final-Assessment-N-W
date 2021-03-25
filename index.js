const select = document.querySelector("select");
const h3 = document.querySelector("h3");
const releaseYear = document.querySelector("#release-year");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const getFilms = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    const blankOption = document.createElement("option");
    select.appendChild(blankOption);
    res.data.forEach((film) => {
      const option = document.createElement("option");
      option.innerText = film.title;
      option.value = film.id;
      select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }
};

getFilms();

select.addEventListener("change", async (event) => {
  event.preventDefault();
  const idUrl = `https://ghibliapi.herokuapp.com/films/${event.target.value}`;
  const res = await axios.get(idUrl);
  h3.innerText = res.data.title;
  releaseYear.innerText = res.data.release_date;
  description.innerText = res.data.description;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userReview = document.querySelector("#review");
  const savedReview = document.createElement("li");
  savedReview.innerHTML = `<b>${title.textContent}:</b> ${userReview.value}`;
  ul.appendChild(savedReview);
  userReview.value = "";
});


