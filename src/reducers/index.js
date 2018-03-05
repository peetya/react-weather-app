import { combineReducers } from 'redux';
import apiReducer from './api.reducer';
import settingsReducer from './settings.reducer';

const rootReducer = combineReducers({
    apiReducer,
    settingsReducer,
});

export default rootReducer;
