export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const SAVE_CURRENT_DETAILS = 'SAVE_CURRENT_DETAILS';

/**
 * Saves the user's preferred settings
 */
export const saveSettings = (weatherConditionCode, temperature, humidity) => ({
    type: SAVE_SETTINGS,
    weatherConditionCode,
    temperature,
    humidity,
});

/**
 * Saves the weather condition details
 */
export const saveCurrentDetails = (icon, name, className, positiveText, negativeText) => ({
    type: SAVE_CURRENT_DETAILS,
    icon,
    name,
    className,
    positiveText,
    negativeText,
});