const select = document.querySelector("select");
const movieTitle = document.querySelector("#movie-title");
const year = document.querySelector("#movie-year");
const description = document.querySelector("#movie-description");
const form = document.querySelector("form");
const ul = document.querySelector("#movie-review-comment");

const createOptions = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      res.data.forEach(movie => {
          const option = document.createElement("option");
          option.textContent = movie.title;
          option.value = movie.id;
          select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }

};
createOptions();

select.addEventListener("change", async (e) => {
        const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
        const res = await axios.get(url);
        movieTitle.innerText = res.data.title;
        year. innerText = res.data.release_date;
        description.innerText = res.data.description;    
})


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const li = document.createElement("li");
    const review = document.querySelector("#review-comment").value;
    console.log(review)
    li.innerHTML = `<b>${movieTitle.textContent}:<b> ${review}`
    debugger
    ul.appendChild(li);
    form.reset()
 })