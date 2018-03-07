export const SAVE_WEATHER_INFO = 'SAVE_WEATHER_INFO';

export const saveWeatherInfo = apiResponse => ({
    type: SAVE_WEATHER_INFO,
    apiResponse: apiResponse,
});
