const options = document.querySelector("#film-options");
const filmInfo = document.querySelector("#display-info");
const title = document.querySelector("#title");
const year = document.querySelector("#release-year");
const descriptions = document.querySelector("#description");
const form = document.querySelector("form");
const reviews = document.querySelector("#film-review-ul");

const createOptions = async () => {
    try {
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        res.data.forEach(film => {
            const option = document.createElement("option");
            option.textContent = film.title;
            option.value = film.id; // index of film in film array!! figure out how to use this
            options.appendChild(option)
        });


    } catch (err) {
        console.log(err)
    }
  };
  createOptions();

  //should this event listener go inside of create options?
  options.addEventListener("change", async (e) => {
      const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
      const filmsByID = await axios.get(url);
      title.innerText = filmsByID.data.title
      year.innerText = filmsByID.data.release_date
      descriptions.innerText = filmsByID.data.description
  })

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const review = document.querySelector("#review")
      const li = document.createElement("li");
      li.innerHTML = `<b>${title.textContent}:</b> ${review.value}`
      reviews.appendChild(li);
      review.value = "";
  })