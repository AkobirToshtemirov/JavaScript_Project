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

function rememberMySeries() {
  for (let i = 0; i < 2; i++) {
    const lastMovie = prompt((i + 1) + " The last movie you watched: ");
    const grade = +prompt((i + 1) + " Yuour grade for that movie (1/10): ");

    if (lastMovie != null && lastMovie != "" && grade != null && grade != "" && !isNaN(grade)) {
      seriesDB.series[lastMovie] = grade;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMySeries();

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    const genres = prompt((i + 1) + " Write your favourite ganre: ")
    if (genres != null && genres != "") {
      seriesDB.genres[i] = genres;
    } else {
      i--;
    }
  }
}

writeGenres();

function showDB() {
  const confirmation = confirm("Do you want to see DB?");
  seriesDB.private = confirmation;
  if (seriesDB.private) {
    console.log(seriesDB);
  } else {
    console.log("Information will not be displayed!");
  }
}

showDB();