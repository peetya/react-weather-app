/**
 * Returns the response from the openweathermap API
 *
 * @param latitude
 * @param longitude
 * @returns {Promise<any>}
 */
export const getCurrentWeatherInfo = (latitude, longitude) => {
    return fetch(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => data);
};
