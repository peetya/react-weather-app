export const SAVE_COORDINATES = 'SAVE_COORDINATES';

/**
 * Saves the coordinates from the Geolocation API
 */
export const saveCoordinates = (latitude, longitude) => ({
    type: SAVE_COORDINATES,
    latitude,
    longitude,
});
