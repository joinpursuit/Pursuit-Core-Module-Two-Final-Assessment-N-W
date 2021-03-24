const select = document.querySelector("#filmSelection");
const title = document.querySelector("#title")
const year = document.querySelector("#release-year")
const description = document.querySelector("#description")
const input = document.querySelector("#input")
const ul = document.querySelector("#review-submit")


const movieTitles = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      res.data.forEach((films) => {
        const movie = document.createElement("option");
        movie.textContent = films.title;
        movie.value = films.id;
        select.appendChild(movie);
      });
    } catch (error) {
      console.log(error);
    }
  };
  movieTitles()
  

  select.addEventListener("change", async (e) => {
    try {
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
        title.textContent = res.data.title
        year.textContent = res.data.release_date
        description.textContent = res.data.description
        const form = document.querySelector("form")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const li = document.createElement("li")
            li.innerHTML = `<b>${title.textContent}:</b> ${input.value}`
            ul.appendChild(li)
            input.value = ""
        })
    } catch (error) {
        console.log(error);
    }
})
