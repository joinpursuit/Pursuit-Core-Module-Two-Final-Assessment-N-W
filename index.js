const ul = document.querySelector("ul")
const displayInfo = document.querySelector("#display-info")
const titles = document.querySelector("#titles")

const getAllFilms = async () => {
    try{
        const res = await axios.get ("https://ghibliapi.herokuapp.com/films/")
        res.data.forEach((film) => {
            const options = document.createElement("option")
            
            titles.appendChild(options)
            options.textContent= film.title
            titles.addEventListener("change", async(e)=>{
                const title = document.querySelector(".title")
                const release = document.querySelector(".release")
                const descriptions = document.querySelector(".description")
                title.textContent = film.title
                release.textContent = film.release_date
                descriptions.textContent = film.description
                displayInfo.appendChild(title)
                displayInfo.appendChild(release)
                displayInfo.appendChild(descriptions)
                debugger
                
                
            })

            
            // const personalText = document.querySelector("#personal-text")
            // const name = document.querySelector("#name")
            // const h3 = document.querySelector("h3")
            // const releases = document.querySelector(".release")
            // const description = document.querySelector(".description")

            
            
        })
        
    }catch(err){
    console.log(err)

    }
}
getAllFilms()