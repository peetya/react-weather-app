import {SAVE_CURRENT_DETAILS, SAVE_SETTINGS} from '../actions/settings.action';

const defaultState = {
    weatherConditionCode: 800,
    temperature: 35,
    humidity: 50,
    icon: '',
    name: '',
    className: '',
    positiveText: '',
    negativeText: '',
};

const settingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_SETTINGS:
            return {
                ...state,
                weatherConditionCode: action.weatherConditionCode,
                temperature: action.temperature,
                humidity: action.humidity,
            };

        case SAVE_CURRENT_DETAILS:
            return {
                ...state,
                icon: action.icon,
                name: action.name,
                className: action.className,
                positiveText: action.positiveText,
                negativeText: action.negativeText,
            };

        default:
            return state;
    }
};

export default settingsReducer;
