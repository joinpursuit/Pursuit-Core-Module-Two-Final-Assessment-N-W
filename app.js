// https://ghibliapi.herokuapp.com

// selectors
const select = document.querySelector("select");
const section = document.querySelector("section");
const input = document.querySelector("#user-review");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const title = document.querySelector(".title");
const year = document.querySelector(".release-year");
const description = document.querySelector(".description");

// functions
// get movie list
const getMovies = async (e) => {
	try {
		const movieList = await axios.get("https://ghibliapi.herokuapp.com/films");
		// loop movie list
		movieList.data.forEach((movie) => {
			const movieTitle = movie.title;
			// create option
			const option = document.createElement("option");
			option.textContent = movieTitle;
			// option.value = movie.id;
			select.appendChild(option);
		});
		// released = movieList.data.release_date;
		// description = movieList.data.description;
		// id = movieList.data.id;
	} catch (error) {
		console.log(error);
	}
};

const getMovieInfo = async (e) => {
	const selectedMovie = e.target.value;
	// movie title -- h3
	title.textContent = selectedMovie;
	section.appendChild(title);

	// release year -- p

	// description
};

const printReview = (e) => {
    e.preventDefault();
	const review = input.value;
	const li = document.createElement("li");
	li.textContent = review;
    ul.appendChild(li);
    input.value = "";
};

// event listeners
document.addEventListener("DOMContentLoaded", getMovies);
select.addEventListener("change", getMovieInfo);
form.addEventListener("submit", printReview);
