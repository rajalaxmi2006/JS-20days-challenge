const usernameInput = document.getElementById("username");

const searchBtn = document.getElementById("searchBtn");

const profileCard = document.getElementById("profileCard");

const avatar = document.getElementById("avatar");

const nameElement = document.getElementById("name");

const loginElement = document.getElementById("login");

const followersElement = document.getElementById("followers");

const followingElement = document.getElementById("following");

const reposElement = document.getElementById("repos");

const profileLink = document.getElementById("profileLink");

// Fetch GitHub Profile

async function getGitHubProfile() {
  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please enter a username.");

    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found!");
    }

    const data = await response.json();

    displayProfile(data);
  } catch (error) {
    alert(error.message);

    profileCard.style.display = "none";
  }
}

// Display Profile

function displayProfile(data) {
  profileCard.style.display = "block";

  avatar.src = data.avatar_url;

  nameElement.textContent = data.name || "No Name";

  loginElement.textContent = `@${data.login}`;

  followersElement.textContent = data.followers;

  followingElement.textContent = data.following;

  reposElement.textContent = data.public_repos;

  profileLink.href = data.html_url;
}

// Button Click

searchBtn.addEventListener("click", getGitHubProfile);

// Enter Key Support

usernameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getGitHubProfile();
  }
});
