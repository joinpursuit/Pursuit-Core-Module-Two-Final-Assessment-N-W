// https://ghibliapi.herokuapp.com

// selectors
const select = document.querySelector("select");
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
			const movieTitle = movie.movieTitle;
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
	// movie title -- h3
	// release year -- p
	// description
};

// event listeners
document.addEventListener("DOMContentLoaded", getMovies);
select.addEventListener("change", getMovieInfo);
