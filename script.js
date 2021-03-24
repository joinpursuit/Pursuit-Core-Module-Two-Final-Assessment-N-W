const allCharacters = document.querySelector("#all-characters")
const main = document.querySelector("main")
const name = document.querySelector("#character-name")
const image = document.querySelector("#character-img")
const status = document.querySelector("#character-status")
const place = document.querySelector("#character-location")
const title = document.querySelector("title")
const form = document.querySelector("#movie-review-form");
const comments = document.querySelector("#comment")

const getAllCharacters = async () => {
    try {
        const res = await axios.get('https://ghibliapi.herokuapp.com/films');

        res.data.results.forEach(char => {
            const li = document.createElement("li")
            const img = document.createElement("img")
            const p = document.createElement("p")

            img.src = char.image;
            img.value = char.id;
            p.innerText = char.name;
            debugger
            li.appendChild(img)
            li.appendChild(p)
            allCharacters.appendChild(li)


        })
    } catch (err) {
        console.log(err)
    }
}
getAllCharacters()

allCharacters.addEventListener("click", async (e) => {

    main.style.display = "flex"
    const URL = `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    const res = await axios.get(URL);

    name.innerText = res.data.name;
    image.src = res.data.image;
    status.innerHTML =  `<b>Status:</b> ${res.data.status}`// innerhtml for extra text
    place.innerHTML = `<b>Location:</b> ${res.data.location.name}`
    title.innerText = res.data.name;


})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const comment = document.querySelector("#comment")
    const li = document.createElement("li")
    li.innerHTML= `<b>${title.textContent}:</b> ${comment.value}`
    comments.appendChild(li)
    comment.value = "";
}) 