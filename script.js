const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const filmCard = document.getElementById("film-card").content.cloneNode(true);


filmCard.querySelector("h3").textContent=film.title
filmCard.querySelector("p").textContent = film.director;
document.body.append(filmCard)