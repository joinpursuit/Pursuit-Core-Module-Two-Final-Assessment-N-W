const option = document.querySelector("option");
const main = document.querySelector("main");
const button = document.querySelector("button");
const allTitles = document.querySelector("#all-movie-titles"); //select tag
const h3 = document.querySelector("#title");
const ptag = document.querySelector("#release-date");
const p = document.querySelector("#description");
const form = document.querySelector("form");

// const displayInfo = document.querySelector("#display-info");

//get all movie titles getAlltitles gets movies from API
const getAllTitles = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    //gets data from API on films
    res.data.forEach((movie) => {
      const h3 = document.createElement("h3"); //gives title of movie
      h3.innerText = movie.title;

      const p = document.createElement("p"); //gives description
      p.innerText = movie.description;
      //   debugger;
      const ptag = document.createElement("p"); //gives year
      ptag.innerText = movie.release_date;

      //   const displayInfo = document.querySelector("#display-info");
      //   displayInfo.appendChild(h3); //title
      //   displayInfo.appendChild(p); //description
      //   displayInfo.appendChild(ptag); //year
    });
  } catch (err) {
    console.log(err);
  }
};
getAllTitles();

const select = document.querySelector("select");
const createOptions = (movie) => {
  for (let i = 1; i <= movie; i++) {
    const option = document.createElement("option");
    option.innerHTML = movie.title;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions();

select.addEventListener("click", getAllTitles);

//comment input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("#userInput"); //4. grab the input id, value is used to get value of input
  const li = document.createElement("li"); //crete li for each comment
  li.innerHTML = `<b>movie.title:<b> ${userInput.value}</b></b>`; //puts li = to the name displayed in the browser when img is clicked and prints the title/name and comment that is input by user, value is placed here beacuse it is our input
  comments.appendChild(li); //append child li to the ul(character-comments-ul)
  userInput.value = ""; //input box -> comment , get the value and = "" to clear box
});
