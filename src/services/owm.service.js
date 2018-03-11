import config from '../config';

/**
 * Calls the OpenWeatherMap API to get the current weather information based on the given latitude and longitude
 * and returns the response
 */
export const getCurrentWeatherInfo = (latitude, longitude) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&APPID=${config.owm_api_key}`)
        .then(response => response.json())
        .then(data => data);
};

/**
 * Returns a list with the possible weather statuses and it's details
 */
export const getWeatherStatusList = () => [
    { codeStartsWith: 800, name: 'Clear', icon: 'wi-day-sunny', positiveText: 'Oh, Happy Day!', negativeText: 'No clue, how you cannot love this...' },
    { codeStartsWith: 2, name: 'Thunderstorm', icon: 'wi-thunderstorm', positiveText: 'How can you like this? I am so afraid!', negativeText: 'Better to hide under the bed.' },
    { codeStartsWith: 3, name: 'Drizzle', icon: 'wi-showers', positiveText: 'Well, if you like when it is slightly wet...', negativeText: 'At least it is not raining so much yet...' },
    { codeStartsWith: 5, name: 'Rain', icon: 'wi-rain', positiveText: 'If you like when your shoes and socks get wet, it is perfect!', negativeText: 'Let\'s cry together with the sky...' },
    { codeStartsWith: 6, name: 'Snow', icon: 'wi-snow', positiveText: 'It\'s beautiful, post it on Facebook! Maybe someone did not notice it.', negativeText: 'Common! Don\'t worry, you can build a snowman!' },
    { codeStartsWith: 8, name: 'Clouds', icon: 'wi-cloudy', positiveText: 'It\'s not that bad, but why don\'t you want to see the sun?', negativeText: 'The sun is hiding, but don\'t worry, just keep smiling :)'},
];
