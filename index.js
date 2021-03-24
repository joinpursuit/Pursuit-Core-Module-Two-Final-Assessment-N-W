const selectMenu = document.querySelector("#movie-list");
const form =document.querySelector("form")
let titleArr = [];
let yearArr = [];
let descriptionArr = [];


const allMovies = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        const movieData = res.data;
        console.log(movieData);
        movieData.forEach((movie, i) => {
            const selectOption = document.createElement("option");
            const title = movieData[i].title;
            titleArr.push(movieData[i].title);
            yearArr.push(movieData[i].release_date);
            descriptionArr.push(movieData[i].description);
            selectOption.innerText = title;
            selectMenu.appendChild(selectOption);
        });
    }
    catch (err) {
        console.log(err);
    }
};

allMovies();

selectMenu.addEventListener("change", async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const title = document.querySelector("#title");
    const year = document.querySelector("#release-year");
    const description = document.querySelector("#description");
    title.textContent = e.target.value;
    for (let i = 0; i < titleArr.length; i++) {
        if (e.target.value === titleArr[i]) {
            year.textContent = yearArr[i];
            description.textContent = descriptionArr[i];
        }
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = document.querySelector("#comment");
    const comments = document.querySelector("#comments");
    const title = document.querySelector("#title");
    const li = document.createElement ("li");
    li.innerHTML = `<strong><b>${title.textContent}: </b></strong>${comment.value}`;
    comments.appendChild(li);
    comment.value = "";
})