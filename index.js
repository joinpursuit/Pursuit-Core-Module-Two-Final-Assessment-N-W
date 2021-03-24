console.log("hello");
const select = document.querySelector("#select");
const section = document.querySelector("#display-info");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const h3 = document.querySelector("#title");
const year = document.querySelector("#year");
const description = document.querySelector("#description");


// debugger
const ghible = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    // debugger
    select.innerHTML =""
    res.data.forEach((info) => {
      const option = document.createElement("option");
      option.innerText = info.title;
      option.value = info.id;
      select.appendChild(option);
      debugger
    });
  } catch (err) {
    console.log(err);
  }
};
ghible();

select.addEventListener("change", async (e) =>{
    const filmID = e.target.value
    debugger
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${filmID}`)
    debugger
    h3.innerText = res.data.title;
    year.innerText = res.data.release_date;
    description.innerText = res.data.description

})
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const review = document.createElement("li");
  review.innerHTML = `<strong>${h3.innerText}:</strong> ${input.value}`
  ul.appendChild(review);
  input.value = "";
});
