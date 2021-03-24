const select = document.querySelector('select');
const movieTitle = document.querySelector('#movie-title');
const releaseYear = document.querySelector('#movie-release-year');
const movieDescrip = document.querySelector('#movie-description');
const form = document.querySelector('form');
const reviewUL = document.querySelector('#review-ul');
const getAllMovies = async () => {
    try {
        const res = await axios.get('https://ghibliapi.herokuapp.com/films');
        res.data.forEach(movie => {
            const option = document.createElement('option');
            option.textContent = movie.title;
            option.value = movie.id;
            select.appendChild(option);
        });
    } catch (error) {
        console.log(error)
    }
}
getAllMovies();

const getMovie = async (e) => {
    try {
        const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
        const res = await axios.get(url);
        movieTitle.textContent = res.data.title;
        releaseYear.textContent = res.data.release_date;
        movieDescrip.textContent = res.data.description;
    } catch (error) {
        console.log(error)
    }
}
select.addEventListener('change', getMovie);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const review = document.querySelector('#review-input');
    const userReview = review.value;
    const li = document.createElement('li');
    li.innerHTML = `<b>${movieTitle.textContent}:</b> ${userReview}`;
    reviewUL.appendChild(li);
    review.value = '';
});