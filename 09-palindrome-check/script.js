const textInput = document.getElementById("textInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const resultText = document.getElementById("resultText");

function checkPalindrome() {

  let text = textInput.value;

  if (text === "") {
    resultText.textContent = "Please enter some text.";
    return;
  }

  text = text.toLowerCase();

  text = text.replaceAll(" ", "");


  let reversedText = text.split("").reverse().join("");

  if (text === reversedText) {
    resultText.textContent = "✅ It is a Palindrome";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "❌ It is not a Palindrome";
    resultText.style.color = "red";
  }
}

function clearData() {
  textInput.value = "";
  resultText.textContent = "Result will appear here";
  resultText.style.color = "#111827";
}

checkBtn.addEventListener("click", checkPalindrome);
clearBtn.addEventListener("click", clearData);
