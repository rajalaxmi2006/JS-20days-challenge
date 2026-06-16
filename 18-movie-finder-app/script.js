const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movieCard = document.getElementById("movieCard");
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const year = document.getElementById("year");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const plot = document.getElementById("plot");

// Replace with your OMDb API Key
const apiKey = "YOUR_API_KEY";

// Search Movie
async function searchMovie() {
  const movieName = movieInput.value.trim();
  if (movieName === "") {
    alert("Please enter a movie name.");
    return;
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`,
    );

    const data = await response.json();
    if (data.Response === "False") {
      throw new Error("Movie not found!");
    }

    displayMovie(data);
  } catch (error) {
    alert(error.message);
    movieCard.style.display = "none";
  }
}

// Display Movie

function displayMovie(data) {
  movieCard.style.display = "flex";
  poster.src = data.Poster;
  title.textContent = data.Title;
  year.textContent = data.Year;
  genre.textContent = data.Genre;
  rating.textContent = data.imdbRating;
  plot.textContent = data.Plot;
}

// Search Button
searchBtn.addEventListener("click", searchMovie);

// Enter Key Support
movieInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchMovie();
  }
});
