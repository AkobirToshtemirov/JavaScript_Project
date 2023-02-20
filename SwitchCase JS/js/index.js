const a = +prompt("Enter the first number: ");
const b = prompt("Enter the operator: ");
const c = +prompt("Enter the second number: ");

let text = "The answer is ";

switch (b) {
  case "+":
    alert(`${text} ${a + c}`);
    break;
  case "-":
    alert(`${text} ${a - c}`)
    break;
  case "*":
    alert(`${text} ${a * c}`);
    break;
  case "/":
    alert(`${text} ${a / c}`)
    break;
  default:
    alert("You didn't enter correct operator! Pls try again!")
}