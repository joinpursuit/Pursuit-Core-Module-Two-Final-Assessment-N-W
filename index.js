const select = document.querySelector("#titles");


const getFilms = async () => {
  try {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");

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

getFilms()