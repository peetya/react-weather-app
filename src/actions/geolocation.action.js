export const SAVE_COORDINATES = 'SAVE_COORDINATES';

export const saveCoordinates = (latitude, longitude) => ({
    type: SAVE_COORDINATES,
    latitude,
    longitude,
});
