const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");

const randomBtn = document.getElementById("randomBtn");
const gradientBtn = document.getElementById("gradientBtn");
const copyBtn = document.getElementById("copyBtn");

// Generate Random HEX Color
function getRandomColor() {
  const letters = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Random Color Button
function generateRandomColor() {
  const color = getRandomColor();

  colorBox.style.background = color;

  colorCode.textContent = color;
}
function generateGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;

  colorBox.style.background = gradient;

  colorCode.textContent = `${color1} → ${color2}`;
}
function copyColorCode() {
  navigator.clipboard.writeText(colorCode.textContent);

  copyBtn.textContent = "Copied ✓";

  setTimeout(() => {
    copyBtn.textContent = "Copy Code";
  }, 1500);
}
randomBtn.addEventListener("click", generateRandomColor);

gradientBtn.addEventListener("click", generateGradient);

copyBtn.addEventListener("click", copyColorCode);

generateRandomColor();
