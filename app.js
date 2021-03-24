//get all movie titles getAlltitles gets movies from API
const getAllTitles = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films"); //gets data from API on films
    res.data.forEach((movie) => {
      //says movie not defined
      const li = document.createElement("li"); //li
      const h3 = document.createElement("h3"); //h3
      const p = document.createElement("p"); //p
      h3.innerText = movie.title; //works
      p.innerText = movie.release_date; //gives the year,HTML?
      p.innerText = movie.description; //works HTML?
      //both p are giving me the year ,
      li.appendChild(h3); //title  works
      li.appendChild(p); //works gives me description
      //li for date?
      allTitles.appendChild(li); //append to the ul in HTML
    });
  } catch (err) {
    console.log(err);
  }
};

console.log(getAllTitles()); //gives me promise fufilled , promise result -undefined

const select = document.querySelector("select");
const createOptions = (movie) => {
  for (let i = 1; i <= movie; i++) {
    const option = document.createElement("option");
    option.textContent = movie; //empty string
    option.value = i; //empty string
    select.appendChild(option);
    debugger;
  }
};
console.log(createOptions()); //gives undefined

//1.select options for select box movielIST
// const select = document.querySelector("select");
// const createOptions = (getAllTitles) => {
//   for (let i = 1; i <= getAllTitles; i++) {
//     console.log(getAllTitles);
//     const option = document.createElement("option");
//     option.textContent = i;
//     option.value = i;
//     select.appendChild(option);
//     debugger;
//   }
// };
// createOptions();
// getAllTitles();

//2.grabbing selectors
const option = document.querySelector("option");
const main = document.querySelector("main");
const button = document.querySelector("button");
const allTitles = document.querySelector("#all-movie-titles"); //select tag
const movieName = document.querySelector("#title");
const movieYear = document.querySelector("#release-year");
const movieDescription = document.querySelector("#description");
const ul = document.querySelector("#all-titles");
const form = document.querySelector("form");

//3. create function to get API of each title movie
// const getAllTitles = async () => {
//   try {
//     const res = await axios.get("https://ghibliapi.herokuapp.com/films");
//     res.data.forEach((films) => {
//       const li = document.createElement("li");
//       const h3 = document.createElement("h3");
//       const p = document.createElement("p");
//       h3.innerText = films.title;
//       p.innerText = films.movieYear;
//       p.innerText = films.description;
//       li.appendChild(h3);
//       li.appendChild(p);
//       allTitles.appendChild(li);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// getAllTitles();

// const select = document.querySelector("select");
// const createOptions = (getAllTitles) => {
//   for (let i = 1; i <= getAllTitles; i++) {
//     const option = document.createElement("option");
//     option.textContent = i;
//     option.value = i;
//     select.appendChild(option);
//   }
// };
// createOptions();

// allTitles.addEventListener("click", async (e) => {
//   //this holds all the images
//   const url = `https://ghibliapi.herokuapp.com/films${e.target.value}`;
//   const res = await axios.get(url); //stores url in res
//   //11.get name
//   movieName.innerHTML = `<b> ${res.data.movieName} <b>`;
//   //reassign value
//   //   image.src = res.data.image; //reassign value
//   movieYear.innerContext = `${res.data.movieYear}`; //status in bold so thats why we use innerHTML here
//   movieDescription.innerHTML = `<b> ${res.data.movieDescription} <b>`; //also in bold
//   //   title.innerText = res.data.name; //give it the name of the different character in the browser bar
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userInput = document.querySelector("#userInput"); //4. grab the input id, value is used to get value of input
//   const li = document.createElement("li"); //crete li for each comment
//   li.innerHTML = `<b>${userInput.value}</b>`; //puts li = to the name displayed in the browser when img is clicked and prints the title/name and comment that is input by user, value is placed here beacuse it is our input
//   comments.appendChild(li); //append child li to the ul(character-comments-ul)
//   userInput.value = ""; //input box -> comment , get the value and = "" to clear box
// });
