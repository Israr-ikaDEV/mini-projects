// Using Open-Meteo + Geocoding from a free service (like Nominatim or Geoapify)

// Helper to fetch coordinates for a city
async function getCoordinates(cityName) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`
  );
  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }
  const { latitude, longitude, country, name } = data.results[0];
  return { latitude, longitude, country, name };
}

document.getElementById("searchBtn").addEventListener("click", async function () {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value.trim();
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "<p>⚠️ Please enter a city name!</p>";
    return;
  }

  resultDiv.innerHTML = `<p>⏳ Getting weather for <b>${city}</b>...</p>`;

  try {
    const { latitude, longitude, country, name } = await getCoordinates(city);
    // fetch weather
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();
    if (!weatherData.current_weather) {
      throw new Error("Weather data not available");
    }
    const cw = weatherData.current_weather;
    resultDiv.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p>🌡️ Temperature: <b>${cw.temperature} °C</b></p>
      <p>💨 Wind Speed: <b>${cw.windspeed} m/s</b></p>
      <p>📅 Time: <b>${cw.time}</b></p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
    console.error(error);
  }
});
