import { combineReducers } from 'redux';
import api from './api.reducer';
import settings from './settings.reducer';
import geolocation from './geolocation.reducer';

const rootReducer = combineReducers({
    api,
    settings,
    geolocation,
});

export default rootReducer;
