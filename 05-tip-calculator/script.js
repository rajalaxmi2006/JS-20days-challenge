const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("people");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const perPerson = document.getElementById("perPerson");

function calculateTip() {
  const bill = Number(billAmountInput.value);
  const tipPercent = Number(tipPercentageInput.value);
  const people = Number(peopleInput.value);
  if (bill <= 0 || tipPercent < 0 || people <= 0) {
    alert("Please enter valid values.");
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  const splitAmount = total / people;
  tipAmount.textContent = `Tip Amount: ₹${tip.toFixed(2)}`;
  totalAmount.textContent = `Total Amount: ₹${total.toFixed(2)}`;
  perPerson.textContent = `Per Person: ₹${splitAmount.toFixed(2)}`;
}
function resetCalculator() {
  billAmountInput.value = "";
  tipPercentageInput.value = "";
  peopleInput.value = "";
  tipAmount.textContent = "Tip Amount: ₹0";
  totalAmount.textContent = "Total Amount: ₹0";
  perPerson.textContent = "Per Person: ₹0";
}

calculateBtn.addEventListener("click", calculateTip);
resetBtn.addEventListener("click", resetCalculator);
