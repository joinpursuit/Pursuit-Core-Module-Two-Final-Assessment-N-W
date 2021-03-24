// https://ghibliapi.herokuapp.com

// selectors
const select = document.querySelector("select");
const section = document.querySelector("section");

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
			select.appendChild(option);
		});
	} catch (error) {
		console.log(error);
	}
};

const getMovieInfo = async (e) => {
	const selectedMovie = e.target.value;
	// movie title -- h3
	title.textContent = selectedMovie;
	section.appendChild(title);
	debugger;
	// release year -- p
	// description
};

// event listeners
document.addEventListener("DOMContentLoaded", getMovies);
select.addEventListener("change", getMovieInfo);
