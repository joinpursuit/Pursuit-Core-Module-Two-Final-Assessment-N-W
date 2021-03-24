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

        res.data.forEach(movie => {
            const opt = document.createElement('option');
            opt.textContent = movie.title;
            opt.value = movie.id;
            select.appendChild(opt);


        });
    } catch (err) {
        console.log(err)
    };
};
 getAllMovies()


const getMovieInfo = async (e) => {
    try {
    const URL = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
    const res = await axios.get(URL);
    movieTitle.textContent =  res.data.title;
    movieRelease.textContent = res.data.release_date;
    movieDescription.textContent = res.data.description;
}  catch (err) {
    console.log(err)
};

};

select.addEventListener('change', getMovieInfo);


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const comment = document.querySelector("#comment");
    const li = document.createElement("li");
    li.innerHTML= `<b>${movieTitle.textContent}:</b> ${comment.value}`;
    comment.appendChild(li);
    comment.value = "";
});