import { SAVE_COORDINATES } from '../actions/geolocation.action';

const defaultState = {
    latitude: 0,
    longitude: 0,
};

const geolocationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_COORDINATES:
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude,
            };

        default:
            return state;
    }
};

export default geolocationReducer;
