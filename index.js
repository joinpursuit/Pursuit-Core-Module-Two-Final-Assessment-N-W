const options = document.querySelector("#film-options");
const filmInfo = document.querySelector("#display-info");
const title = document.querySelector("#title");
const year = document.querySelector("release-year");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const reviews = document.querySelector("#film-review-ul");

const createOptions = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        res.data.forEach(film => {
            const option = document.createElement("option");
            option.textContent = film.title;
            option.value = film;
            options.appendChild(option)
        });
    } catch (err) {
        console.log(err)
    }
  };
  createOptions();

  