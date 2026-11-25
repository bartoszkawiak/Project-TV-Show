//You can edit ALL of the code here
function createFilmCard(film) {
  const card = document.getElementById("film-template").content.cloneNode(true);
  const season = String(film.season).padStart(2, "0");
  const episode = String(film.number).padStart(2, "0");

  card.querySelector("h3").textContent = `${film.name} - ${season}${episode}`;

  card.querySelector("img").src = film.image.medium;
  card.querySelector("img").alt = film.name;

  card.querySelector(".summary").innerHTML = film.summary;
  return card;
}

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach((film) => {
    const card = createFilmCard(film);
    rootElem.appendChild(card);
  });
}

window.onload = setup;
