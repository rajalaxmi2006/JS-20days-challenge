// Get elements from HTML
const textInput = document.getElementById("textInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const resultText = document.getElementById("resultText");

// Function to check palindrome
function checkPalindrome() {
  // Get user's input
  let text = textInput.value;
  // Check if input is empty
  if (text === "") {
    resultText.textContent = "Please enter some text.";
    return;
  }
  // Convert text to lowercase
  text = text.toLowerCase();
  // Remove spaces
  text = text.replaceAll(" ", "");

  // Reverse the text
  let reversedText = text.split("").reverse().join("");
  // Compare original and reversed text
  if (text === reversedText) {
    resultText.textContent = "✅ It is a Palindrome";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "❌ It is not a Palindrome";
    resultText.style.color = "red";
  }
}

// Function to clear data
function clearData() {
  textInput.value = "";
  resultText.textContent = "Result will appear here";
  resultText.style.color = "#111827";
}

// Event Listeners
checkBtn.addEventListener("click", checkPalindrome);
clearBtn.addEventListener("click", clearData);
