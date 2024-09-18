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
 * Capitalises the first letter of a string
 * @param {string} s String that needs capitalised
 * @returns {string} Capitalised string 
 */
export function capitalise(s){
	if (!s) return s;
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