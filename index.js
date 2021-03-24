const allMovies = document.querySelector("#ghibli-sovie-selection")
const title = document.querySelector("#movie-title")
const releaseDate = document.querySelector("#release-date")
const descriptions = document.querySelector("#description")
const form = document.querySelector("form")
const reviews = document.querySelector("#movie-reviews-ul")


const getAllMovies = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        // console.log(res)
        res.data.forEach(film => {
            // console.log(film)
            const choices = document.createElement("option")
            choices.innerText = film.title
            choices.value = film.id
            allMovies.appendChild(choices)
        })
    } catch (err) {
        console.log(err)
    }
}
getAllMovies()

allMovies.addEventListener("change", async (e) => {
    const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    const res = await axios.get(url);
    title.textContent = res.data.title
    releaseDate.textContent = res.data.release_date;
    descriptions.textContent = res.data.description
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const review = document.querySelector("#review")
    const li = document.createElement("li")
    li.innerHTML = `<strong>${title.textContent}:</strong> ${review.value}`
    reviews.appendChild(li)
    review.value = ""
})