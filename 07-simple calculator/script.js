const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

function calculate(operator) {
  const firstNumber = Number(num1.value);
  const secondNumber = Number(num2.value);

  if (num1.value === "" || num2.value === "") {
    alert("Please enter both numbers.");
    return;
  }

  let answer;

  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      break;

    case "-":
      answer = firstNumber - secondNumber;
      break;

    case "*":
      answer = firstNumber * secondNumber;
      break;

    case "/":
      if (secondNumber === 0) {
        result.textContent = "Result: Cannot divide by zero";

        return;
      }
      answer = firstNumber / secondNumber;
      break;
  }
  result.textContent = `Result: ${answer}`;
}

resetBtn.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  result.textContent = "Result: 0";
});
