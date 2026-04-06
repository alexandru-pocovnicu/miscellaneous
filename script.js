const state = {
  films: [
    {
      title: "Jurrasic park",
      director: "bob",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 109,
    },
    {
      title: "friends",
      director: "bill",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 123,
    },
    {
      title: "lost",
      director: "jane",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 87,
    },
    {
      title: "south park",
      director: "eu",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 871,
    },
  ],
  searchTerm: "",
};

function createFilmCard(film) {
  const filmCard = document.getElementById("film-card").content.cloneNode(true);
  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;
  return filmCard;
}

function render() {
  const filteredFilms = state.films.filter((film) =>
    film.title.includes(state.searchTerm),
  );
  const filmCards = filteredFilms.map((eachFilm) => createFilmCard(eachFilm));
  document.getElementById("film-container").append(...filmCards);
}
render();

const input = document.getElementById("q");
input.addEventListener("keyup", () => {
  state.searchTerm = input.value;
  document.getElementById("film-container").innerHTML=""
  render()
});
