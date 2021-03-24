const select = document.querySelector("#select-movie")
const title = document.querySelector("#movie-title")
const year = document.querySelector("#year")
const description = document.querySelector("#description")
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let movies = {};

const getAllFilms = async () => {
    try {
        const res = await axios.get('https://ghibliapi.herokuapp.com/films');

        res.data.forEach(movie => {
            const option = document.createElement("option");
            option.textContent = movie.title;
            movies[movie.title] = movie.id;
            select.appendChild(option);
        })

        select.addEventListener("change", async (e)=>{
            const ID = movies[e.target.value];
            const movie = await axios.get('https://ghibliapi.herokuapp.com/films/'+ID);
            title.textContent = movie.data.title;
            year.textContent = movie.data.release_date;
            description.textContent = movie.data.description;

        })


    } catch (err) {
        console.log(err)
    }
}
getAllFilms()

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const review = document.querySelector("#review");
    const li = document.createElement("li")
     li.innerHTML= `<b>${select.value}:</b> ${review.value}`
     ul.appendChild(li)
     review.value = "";
})