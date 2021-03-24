// https://ghibliapi.herokuapp.com
// https://ghibliapi.herokuapp.com/films/{id}

// selectors
const select = document.querySelector("select");
const section = document.querySelector("section");
const input = document.querySelector("#user-review");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const title = document.querySelector(".titleH3");
const year = document.querySelector(".release-year");
const description = document.querySelector(".description");

// functions
const getMovies = async (e) => {
	try {
		const movieList = await axios.get("https://ghibliapi.herokuapp.com/films");
		// loop movie list
		movieList.data.forEach((movie) => {
			const movieTitle = movie.title;
			// create option
			const option = document.createElement("option");
			option.innerHTML = movieTitle;
			select.appendChild(option);
		});
	} catch (error) {
		console.log(error);
	}
};

const getMovieInfo = async (e) => {
	let count = 0;
	try {
		const movieList = await axios.get("https://ghibliapi.herokuapp.com/films");
		let selectedMovie = e.target.value;
		// movie title -- h3
		title.innerHTML = `<b>${selectedMovie}</b>`;
		section.appendChild(title);

		movieList.data.forEach((listTitle) => {
			const eachTitle = listTitle.title;

			if (selectedMovie === eachTitle) {
				id = movieList.data[count].id;

				const getData = async (e) => {
					try {
						const filmId = await axios.get(
							`https://ghibliapi.herokuapp.com/films/${id}`
						);

						// release year -- p
						year.textContent = filmId.data.release_date;
						section.appendChild(year);
						// description
						description.textContent = filmId.data.description;
						section.appendChild(description);
					} catch (error) {
						console.log(error);
					}
				};
				getData();
			}
			count++;
		});
		// remove li nodes from ul
        const clearUl = () => {
            if (ul.childElementCount > 0) {
                for (let i = 0; i < ul.childElementCount; i++) {
                    let li = ul.childNodes[i];
                    li.remove();
                }
            }
        };
		clearUl();
	} catch (error) {
		console.log(error);
	}
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
