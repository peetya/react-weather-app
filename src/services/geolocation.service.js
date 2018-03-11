/**
 * Returns true if the Geolocation API is supported in the browser, false otherwise
 */
export const isGeolocationSupported = () => navigator.geolocation;

/**
 * Returns the response from the HTML Geolocation API
 */
export const getUserCoordinates = options => {
    return new Promise((resolve, reject) => {
        if (isGeolocationSupported()) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        } else {
            reject('Geolocation is not supported by this browser');
        }
    })
};

