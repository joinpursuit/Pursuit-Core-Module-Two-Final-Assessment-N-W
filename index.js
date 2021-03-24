const select= document.querySelector("select")
const movieTitle= document.querySelector("#movie-title")
const releaseYear= document.querySelector("#release-year")
const description = document.querySelector("#movie-description")
const form= document.querySelector("form")
const input= document.querySelector("#text-input")
const ul = document.querySelector("#reviews")

const grabMovies = async () =>{
    try{
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        console.log(res)
        res.data.forEach(movie=>{
            const option = document.createElement("option")
            option.textContent = movie.title
            option.value = movie.id
            select.appendChild(option)
        })
    }catch(err){
        console.log(err)
    }

}

grabMovies()



select.addEventListener("change", async(e)=>{
    const id = e.target.value
    try{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        movieTitle.innerText = res.data.title
        releaseYear.innerText = res.data.release_date
        description.innerText = res.data.description
    }catch(err){
        console.log(err)
    }
})

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const li = document.createElement("li")
    li.innerHTML =`<b>${movieTitle.textContent}:</b> ${input.value}`
    ul.appendChild(li)
    input.value=""
})

