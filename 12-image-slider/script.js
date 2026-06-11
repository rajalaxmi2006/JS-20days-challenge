const sliderImage = document.getElementById("sliderImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const dots = document.querySelectorAll(".dot");

// Array of Images

const images = [
  "https://picsum.photos/id/1015/800/500",

  "https://picsum.photos/id/1016/800/500",

  "https://picsum.photos/id/1018/800/500",

  "https://picsum.photos/id/1025/800/500",
];

// Starting Image Index

let currentIndex = 0;

// Show Image

function showImage(index) {
  sliderImage.src = images[index];

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[index].classList.add("active");
}

// Next Image

function nextImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

// Previous Image

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);
}

// Button Events

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", prevImage);

// Auto Slide Every 3 Seconds

setInterval(nextImage, 3000);
