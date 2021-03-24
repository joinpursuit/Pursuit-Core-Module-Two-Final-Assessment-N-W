
const select = document.querySelector("select")

const selectFilm = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        // debugger
       res.data.forEach((film) => {
           const option = document.createElement("option")
        //    debugger
           option.innerText = film.title
           select.appendChild(option)
       })
        // debugger
    } catch (error) {
        console.log(error)
    }
}
selectFilm()
