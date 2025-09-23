 function fetchPrayerTimes() {
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const resultDiv = document.getElementById('fetch-result');

      if (!city || !country) {
        resultDiv.innerText = 'Please enter both city and country!';
        return;
      }

      resultDiv.innerText = 'Loading...';

      axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`)
        .then(response => {
          const timings = response.data.data.timings;
          let html = `<h3>Prayer Times for ${city}, ${country}</h3>`;
          for (const [prayer, time] of Object.entries(timings)) {
            html += `<strong>${prayer}:</strong> ${time}<br>`;
          }
          resultDiv.innerHTML = html;
        })
        .catch(error => {
          resultDiv.innerText = 'Error: Invalid city/country or network issue.';
        });
    }