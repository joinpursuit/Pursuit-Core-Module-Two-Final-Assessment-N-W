
const selectMenu = document.querySelector("select")


const getGhibliMovies = async () => {
    try{
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        const moviesArr = res.data;
        moviesArr.forEach(movie => {
            const option = document.createElement("option");
            option.textContent = movie.title
            option.value = movie.id 
            selectMenu.appendChild(option);
        });
        
    } catch (err) {
        console.log(err)
    }
}

getGhibliMovies();

const title = document.createElement("h3");
const displayInfo = document.querySelector("#display-info");

selectMenu.addEventListener("click", async (e) => {
    try {
        displayInfo.textContent = ""
        const url = `https://ghibliapi.herokuapp.com/films/${e.target.value}`;
        const res = await axios.get(url);
        const relYear = document.createElement("p");
        const description = document.createElement("p");
        title.textContent = res.data.title;
        relYear.textContent = res.data.release_date;
        description.textContent = res.data.description;
        displayInfo.appendChild(title);
        displayInfo.appendChild(relYear);
        displayInfo.appendChild(description);
    } catch (err) {
        console.log(err);
    }
})

const form = document.querySelector("form");
const comments = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector(".text");
    const submit = document.querySelector(".submit");
    const li = document.createElement("li");
    li.innerHTML = `<b>${title.textContent}:<b> ${input.value}`
    comments.appendChild(li);
    input.value = "";
})