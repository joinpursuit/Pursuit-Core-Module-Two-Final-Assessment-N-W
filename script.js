const main = document.querySelector("main");
const select = document.querySelector("select");
const movieInfo = document.querySelector("#display-info");
const movieTitle = document.querySelector("#movie-title");
const movieDescription = document.querySelector("#description");
const movieRelease = document.querySelector("#year-release");
const form = document.querySelector("#movie-review-form");
const comments = document.querySelector("#comment");

const getAllMovies = async () => {
    try {
        const res = await axios.get('https://ghibliapi.herokuapp.com/films');

        res.data.results.forEach(movie => {
            const opt = document.createElement('opt');
            opt.textContent = movie.title;
            opt.value = movie.id;
            select.appendChild(opt);


        });
    } catch (err) {
        console.log(err)
    };
};
getAllMovies()

select.addEventListener('change', async (e) => {

    main.style.display = "flex"
    const URL = `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    const res = await axios.get(URL);

    name.innerText = res.data.name;
    image.src = res.data.image;
    movieTitle =  res.data.title;
    movieRelease = res.data.release_date;
    movieDescription = res.data.description;


})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const comment = document.querySelector("#comment")
    const li = document.createElement("li")
    li.innerHTML= `<b>${title.textContent}:</b> ${comment.value}`
    comments.appendChild(li)
    comment.value = "";
}) 