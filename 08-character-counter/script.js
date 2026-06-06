const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");

const wordCount = document.getElementById("wordCount");

const remaining = document.getElementById("remaining");

const readingTime = document.getElementById("readingTime");

const progressBar = document.getElementById("progressBar");

const clearBtn = document.getElementById("clearBtn");

const maxCharacters = 200;

textInput.addEventListener("input", () => {
  const text = textInput.value;

  // Character Count
  const characters = text.length;
  charCount.textContent = characters;

  // Word Count
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  wordCount.textContent = words;

  // Remaining Characters
  remaining.textContent = maxCharacters - characters;

  // Reading Time
  const minutes = Math.ceil(words / 200);

  readingTime.textContent = `${minutes} Min`;

  // Progress Bar
  const progress = (characters / maxCharacters) * 100;

  progressBar.style.width = `${progress}%`;
});

clearBtn.addEventListener("click", () => {
  textInput.value = "";

  charCount.textContent = 0;
  wordCount.textContent = 0;
  remaining.textContent = 200;
  readingTime.textContent = "0 Min";
  progressBar.style.width = "0%";
});
