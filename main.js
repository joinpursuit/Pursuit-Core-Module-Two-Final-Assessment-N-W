
const select = document.querySelector("select")

const movieApi = async () => {
    try{
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        res.data.forEach(film =>{
            const option = document.createElement("option")
            option.textContent = film.title
            option.value = film.id
            select.appendChild(option)
        })
    }catch(err){
        console.log(err)
    }
}

movieApi()

const form = document.querySelector("form")
const input = document.querySelector("#text")
const ul = document.querySelector("#movieReview")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const li = document.createElement("li")
    li.innerHTML = `<b>${movieName.textContent}:</b> ${input.value}`
    ul.appendChild(li)
    input.value = ""
})

const movieName = document.querySelector("#movieName")
const movieYear = document.querySelector("#movieYear")
const movieInfo = document.querySelector('#movieInfo')

select.addEventListener("change", async(e)=>{
    try{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
        movieName.innerText = res.data.title
        movieYear.innerText = res.data.release_date
        movieInfo.innerText = res.data.description
    }catch(err){
        console.log("there's a problem")
    }
})

