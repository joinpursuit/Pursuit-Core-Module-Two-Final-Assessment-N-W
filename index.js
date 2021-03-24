const select = document.querySelector("select")
const title = document.querySelector("#movie-title")
const releaseYear = document.querySelector("#year")
const description = document.querySelector("#description")
const form = document.querySelector("form")
const reviews = document.querySelector("#reviews")
// const commment = document.querySelector("comments")

const movieTitle = async (e) => {
    
        const res = await axios.get("https://ghibliapi.herokuapp.com/films") 
        res.data.forEach(film => {
            // console.log(film.title)
            const option = document.createElement("option")
            option.textContent = film.title
            option.title = film.title
            option.value = film.id
            select.appendChild(option)   
           
        });
        
    // } catch (error) {
    //     console.log(error)
    // }
}
movieTitle()

select.addEventListener("change", async (e) => {
 try{
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`) 
    title.innerText = res.data.title
    releaseYear.innerText = res.data.release_date
    description.innerText = res.data.description
    if(e.target.value === "") {
        title.innerText = ""
    releaseYear.innerText = ""
    description.innerText = ""
    }
}
 catch (error) {
     console.log(error)
 }

})


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const comment = document.querySelector("#comments")
    const li = document.createElement("li")
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${select.value}`) 
    li.innerHTML = ` <b>${res.data.title}: </b> ${comment.value}` 
    reviews.appendChild(li)
    comment.value = ""
        
   
})
