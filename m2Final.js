const select = document.querySelector("#movie-titles");
const chosenTitle = document.querySelector("#selected-title");
const chosenRelease = document.querySelector("#release-yr");
const chosenDescription = document.querySelector("#film-description");
const reviewList = document.querySelector("#review-list");
const reviewSubmission = document.querySelector("#review-submit");

const createOptions = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
    res.data.forEach((movie) => {
      const option = document.createElement("option");
      option.textContent = movie.title;
      select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }
};
createOptions();

const movieInfo = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
    res.data.forEach((film) => {
      if (film.title === chosenTitle.textContent) {
        chosenTitle.textContent = film.title;
        chosenRelease.textContent = film.release_date;
        chosenDescription.textContent = film.description;
      }
    });
  } catch (err) {
    console.log(err);
  }
};

select.addEventListener("change", (e) => {
  const index = e.target.options.selectedIndex;
  chosenTitle.textContent = e.target.options[`${index}`].textContent;
  movieInfo();
});

const submitReview = () => {
      const li = document.createElement("li");
      const reviewInput = document.querySelector("#user-review");
      li.classList.add("film-reviews");
      li.innerHTML = `<b>${chosenTitle.textContent}:</b> ${reviewInput.value}`;
      reviewList.appendChild(li);
      reviewInput.value = "";
}

reviewSubmission.addEventListener("click", (e) => {
    e.preventDefault();
    submitReview();
})