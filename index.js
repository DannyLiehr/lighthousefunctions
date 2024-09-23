const fs = require('fs').promises;
const request = require('request'); // For the downloadFile function

/**
 * Picks a random item from an array.
 * @param {array} arr An array. 
 * @returns {*} A random item from the array.
 */
export function randomise(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

/**
 * Truncates the string by n characters.
 * If the string is longer than n characters, it will be truncated and '...' will be appended.
 * @param {string} str The string to truncate.
 * @param {number} [n=8] The number of characters to truncate to (default is 8).
 * @returns {string} The truncated string.
 */
export function truncate(str, n = 8) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
}

/**
 * Capitalises the first letter of a string.
 * @param {string} s String that needs capitalised.
 * @returns {string} Capitalised string or an empty string if input is not a string.
 */
export function capitalise(s) {
    if (typeof s !== 'string') return '';
    if (!s) return s; // Handle empty string case
    return s[0].toUpperCase() + s.slice(1);
}


/**
 * Retrieves the key associated with a given value in an object.
 * If the value is not found, it returns undefined.
 * 
 * @param {Object} object The object to search within.
 * @param {*} value The value to find the corresponding key for.
 * @returns {string|undefined} The key associated with the value, or undefined if not found.
 */
export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

/**
 * Gets a random number between min and max values.
 * @param {number} [min=1] min Minimum value. (Default: 1)
 * @param {number} [max=10] max Maximum value. (Default: 10)
 * @returns {number} A number between the minimum and maximum value
 */
export function getRandomNumber(min = 1, max = 10) {
    // Ensure both arguments are numbers
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error("Lighthouse Function Error - getRandomNumber: Min and Max arguments need to both be numbers.");
    }
    // Ensure min is less than or equal to max
    if (min > max) {
        throw new Error("Lighthouse Function Error - getRandomNumber: Min should be less than or equal to Max");
    }
    
    // Generate a random number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Simulates a probabilistic event based on the given probability.
 * 
 * This function takes a probability value between 0 and 1 and generates a random number.
 * It returns true if the random number is less than the specified probability, 
 * effectively simulating an event that occurs with the given probability.
 * 
 * @param {number} [prob=0.5] prob The probability of the event occurring (between 0 and 1). Default is 0.5
 * @returns {boolean} Returns true if the event occurs, false otherwise.
 * @throws {Error} Throws an error if the probability is not a number or not between 0 and 1.
 */
export function probability(prob=0.5) {
    // Ensure the probability is a number
    if (typeof prob !== "number") {
        throw new Error("Probability must be a number");
    }

    // Ensure the probability is between 0 and 1
    if (prob < 0 || prob > 1) {
        throw new Error("Probability must be between 0 and 1");
    }
    
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    
    // Return true if the random value is less than the probability
    return randomValue < prob;
}

/**
 * Turns an array into a list styled like the following: Item 1, Item 2, and Item 3
 * Optionally includes the Oxford comma before the 'and'.
 * 
 * @param {Array} arr The array of items to convert to a string.
 * @param {boolean} [useOxfordComma=true] Whether to include the Oxford comma (default is true).
 * @returns {string} The formatted string.
 */
export function makeString(arr, useOxfordComma = true) {
    if (arr.length === 0) return ''; // Handle empty array case
    if (arr.length === 1) return arr[0];

    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];

    // Join the first items with a comma
    let result = firsts.join(', ');

    // If using the Oxford comma and there are at least two items, add it
    if (useOxfordComma && firsts.length > 0) {
        result += ',';
    }

    // Add the last item with 'and'
    return result + ' and ' + last;
}

/**
 * Creates a comparison function for sorting objects by a specified property.
 *
 * @param {string} property The property name to compare.
 * @returns {function} A comparison function that can be used with Array.prototype.sort().
 * @throws {Error} Throws an error if the property does not exist on one of the objects.
 */
export function compareByProperty(property) {
    return function(a, b) {
        if (a[property] === undefined || b[property] === undefined) {
            throw new Error(`Property "${property}" does not exist on one of the objects.`);
        }
        return a[property] - b[property];
    };
}


/**
 * Downloads a file from a given URL.
 * @param {string} fileURL The base URL of the file to download (without extension).
 * @param {string} downloadPath The path where the file should be saved (without extension).
 * @param {string} fileType The type of the file (e.g., 'csv', 'jpg', etc.).
 * @returns {Promise<string>} The path where the file was saved, including the file extension.
 */
export async function downloadFile(fileURL, downloadPath, fileType) {
    try {
        // Construct the full URL with the file type and cache-busting parameter
        const fullURL = `${fileURL}.${fileType}?t=${new Date().getTime()}`;
        
        const { response, body } = await new Promise((resolve, reject) => {
            request(fullURL, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ response, body }); // Resolve with both response and body
                }
            });
        });

        if (response.statusCode !== 200) { // Access statusCode directly from response
            throw new Error(`Failed to download file: Status code ${response.statusCode}`);
        }

        // Write the file to the specified path with the correct extension
        await fs.writeFile(`${downloadPath}.${fileType}`, body, { flag: 'w' });

        return `${downloadPath}.${fileType}`;
    } catch (error) {
        console.error(`Error downloading ${fileType}:`, error);
        throw error; // Re-throw for further handling
    }
}