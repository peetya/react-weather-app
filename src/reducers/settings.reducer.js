import { UPDATE_SETTINGS } from '../actions/settings.action';

const defaultState = {
    weatherConditionCode: 800,
    temperature: 35,
};

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return {
                ...state,
                weatherConditionCode: action.weatherConditionCode,
                temperature: action.temperature,
            };

        default:
            return state;
    }
};

export default apiReducer;
