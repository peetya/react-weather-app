export const SAVE_WEATHER_INFO = 'SAVE_WEATHER_INFO';

/**
 * Saves some details from the OpenWeatherMap api response
 */
export const saveWeatherInfo = apiResponse => ({
    type: SAVE_WEATHER_INFO,
    humidity: apiResponse.main.humidity,
    temperature: apiResponse.main.temp,
    cityName: apiResponse.name,
    weatherConditionCode: apiResponse.weather[0].id,
});
