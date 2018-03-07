export const getCurrentWeatherInfo = (latitude, longitude) => {
    const apiKey = ''; //TODO: inject apiKey from config
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => data);
};

export const getWeatherConditionList = () => [
    { codeStartsWith: 2, name: 'Thunderstorm' },
    { codeStartsWith: 3, name: 'Drizzle' },
    { codeStartsWith: 5, name: 'Rain' },
    { codeStartsWith: 6, name: 'Snow' },
    { codeStartsWith: 7, name: 'Atmosphere' },
    { codeStartsWith: 800, name: 'Clear' },
    { codeStartsWith: 8, name: 'Clouds' },
    { codeStartsWith: 9, name: 'Extreme' },
];
