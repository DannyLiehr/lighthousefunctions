export function randomise(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

export function truncate (str, n){
	return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

export function capitalise(s){
	if (!s) return s;
	return s[0].toUpperCase() + s.slice(1);
}

export function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

export function getRandomNumber(min, max) {
    // Ensure min is less than max
    if (min > max) {
        throw new Error("Min should be less than or equal to Max");
    }
    // Generate a random number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function probability(prob) {
    // Ensure the probability is between 0 and 1
    if (prob < 0 || prob > 1) {
        throw new Error("Probability must be between 0 and 1");
    }
    
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    
    // Return true if the random value is less than the probability
    return randomValue < prob;
}