const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let operator = "";
let firstNumber = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      currentInput = "";
      operator = "";
      firstNumber = null;
      display.value = "0";
    } else if (button.classList.contains("operator")) {
      if (currentInput === "" && firstNumber === null) return;
      if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      } else if (currentInput !== "") {
        firstNumber = calculate(firstNumber, parseFloat(currentInput), operator);
        operator = value;
        currentInput = "";
        display.value = firstNumber;
      } else {
        operator = value;
      }
    } else if (button.classList.contains("equal")) {
      if (firstNumber !== null && currentInput !== "") {
        firstNumber = calculate(firstNumber, parseFloat(currentInput), operator);
        display.value = firstNumber;
        currentInput = "";
        operator = "";
      }
    } else { // numbers or dot
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  switch(op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return b;
  }
}
