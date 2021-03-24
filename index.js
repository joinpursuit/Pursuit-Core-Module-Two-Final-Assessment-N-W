

        


// let showInfo = (el)=>{
//     // let description = el.description
//     // let releaseYear = el.release_date
//     let releaseYear = document.getElementById("release-year")
//      let titleOutput = document.getElementById("title")
//      let descriptionOutput = document.getElementById("film-description")
//      let displayInfo = document.getElementById("display-info")
 
// releaseYear.textContent = el.release_date
// titleOutput = el.title
// descriptionOutput = el.description



// }




let select = document.querySelector("#movie-titles")
let titleOutput = document.getElementById("title")
 let descriptionOutput = document.getElementById("film-description")

 let releaseYear = document.getElementById("release-year")
const getFilms = async (event) => {
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films");
 let films = res.data

  let displayInfo = document.getElementById("display-info")


 films.forEach(el => {

    //  let title = el.title 
    
     let filmOptions = document.createElement("option")
     filmOptions.textContent = el.title
     filmOptions.value = el.url
     select.appendChild(filmOptions)




 });
    } catch (err) {
      console.log(err);
    }
  };
 




  select.addEventListener("change",(event)=>{
    //console.log(event.value)
    const getUrl = async()=>{
       
    try {
        let resUrl = await axios.get(event.currentTarget.value)
        titleOutput.textContent = resUrl.data.title
        descriptionOutput.textContent = resUrl.data.description
        releaseYear.textContent = resUrl.data.release_date
    }catch(err){
        console.log(err)
    }
    }
          getUrl()  
            })


let form = document.querySelector('form')
let userInput = document.getElementById("user-review")
let allReviews = document.getElementById("submitted-reviews")
form.addEventListener("submit",(event)=>{
  event.preventDefault()  
  debugger
  let liReview = document.createElement('li')
  //liReview.classList.add("li-class-Reviews");
  liReview.innerHTML = `<b>${titleOutput.textContent}:</b> ${userInput.value}`;

  allReviews.appendChild(liReview)
    userInput.value =""
})



//   let test = document.getElementById('test')
//   test.addEventListener("click",getFilms)

document.addEventListener('DOMContentLoaded',(event)=>{
    getFilms()
  })