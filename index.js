const select = document.querySelector("select");
const section = document.querySelector("#display-info");
const form = document.querySelector("form");

const getFilms = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    debugger;
    res.data.forEach((film) => {
     
      const option = document.createElement("option");
      option.innerText = film.title;
      select.appendChild(option);
      debugger;
    });
  } catch (error) {
    console.log(error);
  }
};
getFilms();

const createSection = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    res.data.forEach((film) => {
  debugger
      const title = document.createElement("h3");
      const releaseYear = document.createElement("p");
      const description = document.createElement("p");
      title.innerText = film.title;
      releaseYear.innerText = film.release_date;
      description.innerText = film.description;
      section.appendChild(title);
      section.appendChild(releaseYear);
      section.appendChild(description);
    //   section.innerText = "";
    });
  } catch (error) {
    console.log(error);
  }
};

createSection();

select.addEventListener("click", async (e) => {
    debugger
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        res.data.forEach((film) => {
      debugger
          const title = document.createElement("h3");
          const releaseYear = document.createElement("p");
          const description = document.createElement("p");
          title.innerText = film.title;
          releaseYear.innerText = film.release_date;
          description.innerText = film.description;
          section.appendChild(title);
          section.appendChild(releaseYear);
          section.appendChild(description);
        //   section.innerText = "";
        });
      } catch (error) {
        console.log(error);
      }
   
});

form.addEventListener("click", (e) => {
    e.preventDefault();
    debugger
    const textInput = document.querySelector("#review-text-input");
    debugger
    const reviewsUl = document.querySelector("#reviews")
    const reviewLi = document.createElement("li");
    reviewLi.innerHTML = `<b>${film.title}</b> ${textInput.value}`
    reviewsUl.appendChild(reviewLi);
    textInput.value = "";
})







/*March 23rd*/
// const select = document.querySelector("select");
// const form = document.querySelector("form");

// const getFilms = async () => {
//   try {
//     res = await axios.get("https://ghibliapi.herokuapp.com/films");
//     debugger
//     res.data.forEach((film) => {
//         debugger
//       const option = document.createElement("option");
//     //   option.setAttribute("value", "disabled selected")
//     //   option.innerHTML = "Select A Film";
//       option.innerText = film.title;
//       select.appendChild(option);
//       debugger;
//     });
//   } catch (error) {
//       console.log(error)
//   }
// };
// getFilms();

// select.addEventListener("click", async (e) => {
//     debugger
//     const res = await axios.get(`https://ghibliapi.herokuapp.com/${e.target}`);
//     // res.data.forEach((film) => {
//         debugger
//         let displayInfoSec = document.querySelector("#display-info");
//         const title = document.createElement("h3");
//         const releaseYear = document.createElement("p");
//         const description = document.createElement("p");
//         debugger
//         title.innerHTML = `<b>${film.title}</b>`;
//         releaseYear.innerText = `${film.release_date}`;
//         description.innerText = `${film.description}`;
//         displayInfoSec.appendChild(title);
//         displayInfoSec.appendChild(releaseYear);
//         displayInfoSec.appendChild(description);
//         debugger
//         // displayInfoSec = "";
//     })

// // });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const reviewText = document.querySelector("#review-text-input");
//   const submit = document.querySelector("#submit-input")
//   const reviewsUl = document.querySelector("#reviews");
//   const reviewLi = document.createElement("li");
//   const reviewBody = reviewText.value
//   reviewLi.innerHTML = `<b>${title.textContent}:</b> ${reviewBody}`;
//   reviewsUl.appendChild(reviewLi);
//   reviewText.value = "";
// });

/*March 23rd*/
// const select = document.querySelector("select");
// const form = document.querySelector("form");

// const selectFilm = async () => {
//   try {
//     const res = await axios.get("https://ghibliapi.herokuapp.com/films");
//     res.data.forEach((film) => {
//       debugger;
//       const option = document.createElement("option");
//       debugger;
//       option.innerText = film.title;
//       option.setAttribute("value", film.release_date);
//       debugger;
//       select.appendChild(option);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// selectFilm();

// select.addEventListener("change", async (e) => {
//     debugger
//   const res = await axios.get("https://ghibliapi.herokuapp.com/films");
//   res.data.forEach((film) => {
//       debugger
//     const displaySection = document.querySelector("#display-info")
//     const filmTitle = document.querySelector("#film-title");
//     const releaseYear = document.querySelector("#release-year");
//     const description = document.querySelector("#description");
//     filmTitle.innerText = `${film.title}`;
//     releaseYear.innerText = `${film.release_date}`;
//     description.innerText = `${film.description}`;
//     displaySection.innerText = `<b>${film.title}</b>`
//     displaySection.innerText = `${film.release_date}`
//     displaySection.innerText = `${film.description}`
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const reviewText = document.querySelector("#review-text-input");
//   const reviewsUl = document.querySelector("#reviews");
//   const reviewLi = document.createElement("li");
//   reviewLi.innerHTML = `<b>${title.textContent}:</b> ${reviewText.value}`;
//   reviewsUl.appendChild(reviewLi);
//   reviewText.value = "";
// });
