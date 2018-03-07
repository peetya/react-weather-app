import { SAVE_WEATHER_INFO } from '../actions/api.action';

const defaultState = {
    apiResponse: {},
};

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_WEATHER_INFO:
            return {
                ...state,
                apiResponse: action.apiResponse,
            };

        default:
            return state;
    }
};

export default apiReducer;
