document.getElementById("searchBtn").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    document.getElementById("result").innerHTML = "<p>Please enter a city name!</p>";
  } else {
    document.getElementById("result").innerHTML = `<p>Searching for weather in <b>${city}</b>...</p>`;
  }
});
