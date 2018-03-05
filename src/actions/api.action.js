import { getCurrentWeatherInfo } from '../services/owp.service';

export const GET_WEATHER_INFO = 'GET_WEATHER_INFO';

export const getWeatherInfo = (latitude, longitude) => ({
    type: GET_WEATHER_INFO,
    apiResponse: getCurrentWeatherInfo(latitude, longitude),
});
