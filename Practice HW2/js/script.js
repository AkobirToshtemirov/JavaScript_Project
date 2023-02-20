// HW 1

// let private = false;

// function showDB() {
//   console.log("Informations");
// }

// if(!private) {
//   console.log("You can see infos below!");
//   showDB();
// } else {
//   console.log("You do not have access. NO infos!");
// }

// HW2

let genres = [];

for (let i = 0; i < 3; i++) {
  const askQuestion = prompt((i + 1) + " What is your favourite move?");
  // genres.push(askQuestion);
  genres[i] = askQuestion;
}

console.log(genres);