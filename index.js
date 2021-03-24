const movieTitle = document.querySelector("#movie-title");

// get request for heroku movies
const movieDirectory = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
    movieList(res);
  } catch (err) {
    console.log("uh oh!");
  }
};

// drop down menu of movie titles with blank option as default
const movieList = (res) => {
  res.data.forEach((movie) => {
    const select = document.querySelector("select");
    const option = document.createElement("option");
    option.value = movie.id; // assign id to select item later
    option.textContent = movie.title;
    select.appendChild(option);
  });
};

// display the title, release year, description of selected movie.
// update when another movie is selected.
const movieSelection = async (e) => {
  const blank = document.querySelector("#blank");
  const releaseYear = document.querySelector("#release-year");
  const description = document.querySelector("#description");
  try {
    const res = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}` // change endpoint upon selection
    );
    movieTitle.textContent = res.data.title;
    releaseYear.textContent = res.data.release_date;
    description.textContent = res.data.description;
    blank.selected = "selected";
  } catch (err) {
    console.log("can not compute!");
  }
};

// display each user review with movie title in list form
const movieReview = (e) => {
  e.preventDefault();
  const movieReview = document.querySelector('form > input[type="text"]');
  const submittedReviews = document.querySelector("#submitted-reviews");
  const li = document.createElement("li");
  li.innerHTML = `<b>${movieTitle.textContent}:</b> ${movieReview.value}`;
  submittedReviews.appendChild(li);
  movieReview.value = "";
};

// submit review
const enter = document.querySelector('form > input[type="submit"]');
enter.addEventListener("click", movieReview);

// select movie title
const select = document.querySelector("select");
select.addEventListener("change", movieSelection);

movieDirectory();
