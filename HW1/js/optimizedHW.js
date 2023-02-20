"use strict";

let numbersOfSeries;

function startApp() {
  numbersOfSeries = +prompt("How many movies did you watch?", "");

  while (numbersOfSeries == "" || numbersOfSeries == null || isNaN(numbersOfSeries)) {
    numbersOfSeries = +prompt("How many movies did you watch?", "");
  }
}

startApp();

let seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false
}

function rememberMySeries(series) {
  for (let i = 0; i < 2; i++) {
    const lastMovie = prompt((i + 1) + " The last movie you watched: ");
    const grade = +prompt((i + 1) + " Yuour grade for that movie (1/10): ");

    if (lastMovie != null && lastMovie != "" && grade != null && grade != "" && !isNaN(grade)) {
      series[lastMovie] = grade;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMySeries(seriesDB.series);

function writeGenres(genre) {
  for (let i = 0; i < 3; i++) {
    const genres = prompt((i + 1) + " Write your favourite ganre: ")
    if (genres != null && genres != "") {
      genre[i] = genres;
    } else {
      i--;
    }
  }
}

writeGenres(seriesDB.genres);

function showDB(hidden) {
  const confirmation = confirm("Do you want to see DB?");
  hidden = confirmation;
  if (hidden) {
    console.log(seriesDB);
  } else {
    console.log("Information will not be displayed!");
  }
}

showDB(seriesDB.private);