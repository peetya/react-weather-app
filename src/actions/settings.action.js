export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSettings = (weatherConditionCode, temperature) => ({
    type: UPDATE_SETTINGS,
    weatherConditionCode,
    temperature,
});
