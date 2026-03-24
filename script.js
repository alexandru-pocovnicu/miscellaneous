const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },

  {
    title: "1984",
    director: "joe pesci",
    times: ["15:35"],
    certificate: "15",
    duration: 117,
  },
];

function createFilmCard(film) {
  const filmCard = document.getElementById("film-card").content.cloneNode(true);
  
  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;

  return filmCard;
}

for(const film of films){
  const card=createFilmCard(film)
  document.body.append(card);
}


