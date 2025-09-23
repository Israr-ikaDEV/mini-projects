// travel_recommendation.js

let travelData = [];

// Load data from JSON
fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log("Travel data loaded:", travelData); // ✅ check in console
  })
  .catch(error => console.error("Error loading data:", error));

// Function to display results
function displayResults(results) {
  const container = document.getElementById("recommendations");
  container.innerHTML = ""; // clear old results

  if (results.length === 0) {
    container.innerHTML = `<p>No results found. Try "beach", "temple", "mountain", "city", "adventure" or a country name.</p>`;
    return;
  }

  results.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("result-card");

    card.innerHTML = `
      <h3>${place.name} (${place.country})</h3>
      <img src="${place.imageUrl}" alt="${place.name}">
      <p>${place.description}</p>
    `;

    container.appendChild(card);
  });

  // Smooth scroll to results
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}

// Function to search recommendations
function searchRecommendations() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  let results = [];

  if (input === "") {
    alert("Please enter a keyword (e.g., beach, temple, mountain, city, adventure, Pakistan)");
    return;
  }

  // Keyword matching
  if (input.includes("beach")) {
    results = travelData.filter(place => place.type.toLowerCase() === "beach");
  } else if (input.includes("temple")) {
    results = travelData.filter(place => place.type.toLowerCase() === "temple");
  } else if (input.includes("mountain")) {
    results = travelData.filter(place => place.type.toLowerCase() === "mountain");
  } else if (input.includes("city")) {
    results = travelData.filter(place => place.type.toLowerCase() === "city");
  } else if (input.includes("adventure")) {
    results = travelData.filter(place => place.type.toLowerCase() === "adventure");
  } else {
    // Assume it's a country search
    results = travelData.filter(place => place.country.toLowerCase().includes(input));
  }

  displayResults(results);
}

// ✅ Function to clear results
function clearResults() {
  document.getElementById("searchInput").value = ""; // clear search bar
  document.getElementById("recommendations").innerHTML = ""; // clear results
}

// Event listeners
document.getElementById("searchBtn").addEventListener("click", searchRecommendations);
document.getElementById("clearBtn").addEventListener("click", clearResults);
