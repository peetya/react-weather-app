import { SAVE_WEATHER_INFO } from '../actions/api.action';

const defaultState = {
    humidity: null,
    temperature: null,
    cityName: null,
    weatherConditionCode: null,
};

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_WEATHER_INFO:
            return {
                ...state,
                humidity: action.humidity,
                temperature: action.temperature,
                cityName: action.cityName,
                weatherConditionCode: action.weatherConditionCode,
            };

        default:
            return state;
    }
};

export default apiReducer;
