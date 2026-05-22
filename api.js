const USER_ID = '653566';
const API_KEY = 'ak-5f04457610aa5ef290c31d3947eae2f57d53573e';

const AUTH_HEADER = 'Basic ' + btoa(`${USER_ID}:${API_KEY}`);
const BASE_URL = 'https://json.astrologyapi.com/v1';

async function fetchDailyHoroscope(signName, day = 'today') {
  try {
    let endpoint = `${BASE_URL}/sun_sign_prediction/daily/${signName.toLowerCase()}`;

    if (day === 'yesterday') {
      endpoint = `${BASE_URL}/sun_sign_prediction/daily/previous/${signName.toLowerCase()}`;
    } else if (day === 'tomorrow') {
      endpoint = `${BASE_URL}/sun_sign_prediction/daily/next/${signName.toLowerCase()}`;
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': AUTH_HEADER,
        'Content-Type': 'application/json'
      },
      // FIX: Added timezone to properly orient the prediction date
      body: JSON.stringify({ timezone: -5.0 })
    });

    if (!response.ok) throw new Error(`Horoscope server error: ${response.status}`);
    const data = await response.json();

    // FIX: Parse the prediction object into a clean string for the UI
    let fullReading = null;
    if (data.prediction) {
      fullReading = `${data.prediction.personal_life} ${data.prediction.profession} ${data.prediction.health}`;
    }

    return { description: fullReading };
  } catch (error) {
    console.error("Horoscope API failed:", error);
    return null;
  }
}

async function fetchLiveMoonData() {
  const now = new Date();
  const requestPayload = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    min: now.getMinutes(),
    lat: 40.7128,
    lon: -74.0060,
    tzone: -5.0
  };

  try {
    // FIX: Updated to the correct AstrologyAPI endpoint for Moon Phases
    const response = await fetch(`${BASE_URL}/lunar_metrics`, {
      method: 'POST',
      headers: {
        'Authorization': AUTH_HEADER,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestPayload)
    });

    if (!response.ok) throw new Error(`Moon API error: ${response.status}`);
    const data = await response.json();

    return {
      phase: data.moon_phase || data.phase,
      illumination: data.moon_illumination || data.illumination,
      // FIX: Grab the age from 'moon_age_in_days'
      age: data.moon_age_in_days || data.moon_age || data.age,
      zodiac: data.moon_sign || data.zodiac,
      nextFull: data.next_full_moon || data.nextFull,
      emoji: data.emoji || "🌔"
    };
  } catch (error) {
    console.error("Moon API failed:", error);
    return null;
  }
}
