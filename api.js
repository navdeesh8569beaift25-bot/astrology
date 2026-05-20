const API_KEY = 'ak-60af18b8cbb34e71dce14941b5fbeeb7ecddd14c';

const BASE_URL = 'https://json.astrologyapi.com/v1/western_horoscope';

/**
 * Fetches the daily horoscope for a given sign.
 * @param {string} signName - The zodiac sign (e.g., 'aries')
 * @param {string} day - 'today', 'tomorrow', or 'yesterday'
 */
async function fetchDailyHoroscope(signName, day = 'today') {
    try {
        const response = await fetch(`${BASE_URL}/horoscope?sign=${signName.toLowerCase()}&day=${day}`, {
            method: 'GET',
            headers: {

                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching horoscope: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Horoscope API failed:", error);
        return null;
    }
}

/**
 * Fetches live moon phase data.
 */
async function fetchLiveMoonData() {
    try {
        const response = await fetch(`${BASE_URL}/moon-phase`, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching moon data: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Moon API failed:", error);
        return null;
    }
}
