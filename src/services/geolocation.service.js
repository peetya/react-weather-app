export const isGeolocationSupported = () => {
    return navigator.geolocation;
};

export const getUserCoordinates = options => {
    return new Promise((resolve, reject) => {
        if (isGeolocationSupported()) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        } else {
            reject('Geolocation is not supported by this browser');
        }
    })
};
