const select = document.querySelector("select")
const displayInfo = document.querySelector("#display-info")
const main = document.querySelector("main")
const movieTitle = document.querySelector("h3")
const releaseYear = document.querySelector("#release-year")
const descriptionOfFilm = document.querySelector("#description-of-film")
const optionEmpty = document.querySelector("option")
const form = document.querySelector("form")
const reviews = document.querySelector("#reviews")
const review = document.querySelector("#review")

const getAllMovies = async() => {
try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films")
    res.data.forEach(film => {
        const option = document.createElement("option")
        const title = film.title
        option.textContent = title
        option.value = film.id
        select.appendChild(option)     
    })
}
catch (err) {
    console.log(err)
}
}

getAllMovies()

form.addEventListener("submit",(e) => {
    e.preventDefault()
    if(movieTitle.textContent !== "") {
    const li = document.createElement("li")
    li.innerHTML = `<b>${movieTitle.textContent}:</b> ${review.value}`
    reviews.appendChild(li)
    review.value = ""
    }
})

select.addEventListener("change", async(e) =>{
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
    movieTitle.textContent = res.data.title
    releaseYear.textContent = res.data.release_date
    descriptionOfFilm.textContent = res.data.description
})

