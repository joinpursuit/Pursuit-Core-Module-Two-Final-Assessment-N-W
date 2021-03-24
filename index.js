// - A `section`, empty of text and with the id `display-info`, that will contain the title (`h3`), release year (`p`), and description (`p`) of the selected film.
// - A `form`, including a "text" `input` and a "submit" `input`, that allows users to submit (not save, just add to the frontend) a review of that film. On submission the input should clear.
// - A `ul` underneath that `form` that should contain the submitted reviews of each film.

// - Use the `select` box to select a specific film. When they select a film, information about that film (title, release year, description) should populate in the `display-info` section below. When they select a different film, this information should be replaced.
// - Use the `form`, below the movie information, to submit a review. Each review should be a new `li`, with the selected film's title (in bold) and a review body (not bold).

const movieDirectory = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
        movieList(res);
    }
    catch (err) {
        console.log("uh oh!")
    }
}


// `select` box that contains the title of each movie, as well as a default blank selection
const movieList = (res) => {
    res.data.forEach(movie => {
        const select = document.querySelector("select");
        const option = document.createElement("option");
        option.textContent = movie.title;
        select.appendChild(option);


    });
}

movieDirectory();