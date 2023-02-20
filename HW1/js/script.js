const numbersOfSeries = +prompt("How many movies did you watch?")

let seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false
}

let i = 0;
do {
  const lastMovie = prompt("The last movie you watched: ")
  const grade = +prompt("Yuour grade for that movie (1/10): ")
  seriesDB.series[lastMovie] = grade;
  i++
} while (i < 2)

console.log(seriesDB);