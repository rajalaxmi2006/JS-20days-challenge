const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movieCard = document.getElementById("movieCard");
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const year = document.getElementById("year");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const plot = document.getElementById("plot");

// Local Movie Database
const movies = [
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi, Adventure",
    rating: "8.7",
    poster: "https://m.media-amazon.com/images/I/71n58oWR+rL.jpg",
    plot: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
  },

  {
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi, Action",
    rating: "8.8",
    poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL.jpg",
    plot: "A thief enters people's dreams to steal information and perform impossible missions.",
  },

  {
    title: "Avatar",
    year: "2009",
    genre: "Adventure, Fantasy",
    rating: "7.9",
    poster: "https://m.media-amazon.com/images/I/61OUGpUfAyL.jpg",
    plot: "A marine is sent to Pandora and becomes involved with its native inhabitants.",
  },

  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action, Crime",
    rating: "9.0",
    poster: "https://m.media-amazon.com/images/I/81AJdOIEIhL.jpg",
    plot: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
  },

  {
    title: "Titanic",
    year: "1997",
    genre: "Romance, Drama",
    rating: "7.9",
    poster: "https://m.media-amazon.com/images/I/71yF9Qm1KBL.jpg",
    plot: "A young couple falls in love aboard the ill-fated RMS Titanic.",
  },
];

// Search Movie
function searchMovie() {
  const searchValue = movieInput.value.trim().toLowerCase();
  if (searchValue === "") {
    alert("Please enter a movie name.");
    return;
  }

  const movie = movies.find(function (item) {
    return item.title.toLowerCase().includes(searchValue);
  });
  if (movie) {
    displayMovie(movie);
  } else {
    alert("Movie not found!");
    movieCard.style.display = "none";
  }
}

// Display Movie
function displayMovie(movie) {
  movieCard.style.display = "flex";
  poster.src = movie.poster;
  title.textContent = movie.title;
  year.textContent = movie.year;
  genre.textContent = movie.genre;
  rating.textContent = movie.rating;
  plot.textContent = movie.plot;
}

// Events
searchBtn.addEventListener("click", searchMovie);
movieInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchMovie();
  }
});
