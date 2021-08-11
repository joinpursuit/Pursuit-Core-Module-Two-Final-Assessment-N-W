const select = document.querySelector("#titles");
const display = document.querySelector("#display-info");

const getFilms = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    h3.setAttribute("id", "title");
    p.setAttribute("id", "year");
    p2.setAttribute("id", "desc");

    display.appendChild(h3);
    display.appendChild(p);
    display.appendChild(p2);

    res.data.forEach((films) => {
      const option = document.createElement("option");
      option.textContent = films.title;
      option.value = films.id;
      select.appendChild(option);
    });
  } catch (err) {
    console.log(err);
  }
};

getFilms();

select.addEventListener("change", async (e) => {
  try {
    const film = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${e.target.value}`
    );
    title.textContent = film.data.title;
    year.innerHTML = film.data.release_date;
    desc.textContent = film.data.description;
  } catch (err) {
    console.log(err);
  }
});

const form = document.querySelector("#rev-form");
const input = document.querySelector("#review");
const ul = document.querySelector("#reviews");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `<b>${title.textContent}:</b> ${input.value}`;
  ul.appendChild(li);

  input.value = "";
});
