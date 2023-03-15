let currentValue = "";
let operator = "";
let previousValue = "";
let otherValue = "";

const numButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButtons = document.querySelector("[data-clear]");
const allClearButtons = document.querySelector("[data-allClear]");
const equalButtons = document.querySelector("[data-equal]");
const preview = document.querySelector("[data-preview]");
const output = document.querySelector("[data-output]");

//numbers being inputed
numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    preview.textContent = currentValue;
  });
});

function handleNumber(num) {
  if (currentValue.length <= 9) currentValue += num;
}

//operators being inputed
operationButtons.forEach((op) => {
  op.addEventListener("click", (e) => {
    handleOp(e.target.textContent);
    preview.textContent = previousValue + " " + operator + " ";
    currentValue = "";
  });
});

function handleOp(op) {
  operator = op;
  previousValue = parseFloat(
    currentValue !== "" ? currentValue : previousValue
  );
}

//clear button
clearButtons.addEventListener("click", (e) => {
  currentValue = "";
  preview.textContent = previousValue + " " + operator + " ";
});

//all clear
allClearButtons.addEventListener("click", (e) => {
  currentValue = "";
  operator = "";
  previousValue = "";
  preview.textContent = currentValue;
  output.textContent = currentValue;
});

//equal button
equalButtons.addEventListener("click", () => {
  calculate();
});
//calculates using the operators
function calculate() {
  const currentValueNumber = parseFloat(currentValue);
  let result;

  if (operator === "+") {
    result = previousValue + currentValueNumber;
  } else if (operator === "-") {
    result = previousValue - currentValueNumber;
  } else if (operator === "X") {
    result = previousValue * currentValueNumber;
  } else if (operator === "/") {
    result = previousValue / currentValueNumber;
  }

  previousValue = result.toString();
  currentValue = "";
  output.textContent = result.toString();
}
