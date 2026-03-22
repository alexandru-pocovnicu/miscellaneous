const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
console.log(film);
const filmCard=document.createElement("section")
const title=document.createElement("h1")
const director=document.createElement("p")
director.textContent=film.director
title.textContent=film.title
filmCard.append(title,director)
const bodyEl=document.querySelector("body")
bodyEl.append(filmCard)