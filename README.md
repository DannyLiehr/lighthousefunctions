# Lighthouse Functions
NPM Package for the functions I find myself using frequently. This is primarily for personal use, but feel free to use this if you also would like to.

# Functions
## randomise(array)
Returns a random item from an array.

Example usage:
```js
const array = ["A", "B", "C", "D"];
const randomItem = randomise(array);
console.log(randomItem); // Output: A random item from the array. This could be any type of variable.
```
## truncate(str)
Truncates the string by n characters. Default n is 8.

Example usage:
```js
const str = "Hello World";
const truncatedString = truncate(str, 6);
console.log(truncatedString); // Output: "Hello..."
```
## capitalise(str)
Capitalises the first letter of a string

Example usage:
```js
const str = "hello world";
const capitalisedString = capitalise(str);
console.log(capitalisedString); // Output: "Hello world"
```
## getKeyByValue(object, value)
Grabs the key of an object using the value.

Example Usage:
```js
const myObject = {
    a: 1,
    b: 2,
    c: 3
};

console.log(getKeyByValue(myObject, 2)); // Output: 'b'
console.log(getKeyByValue(myObject, 4)); // Output: undefined
```
## getRandomNumber(min, max)
Returns a random number between the `min` and `max` arguments.

Example usage:
```js
const randomNumber = getRandomNumber(1,100);
console.log(randomNumber); // Output: Some number between 1 and 100.
```
## probability(prob)
Simulates a probabilistic event based on the given probability. This function takes a probability value between 0 and 1 and generates a random number.It returns true if the random number is less than the specified probability, effectively simulating an event that occurs with the given probability.

Default is 0.5 (50% chance).

Example usage:
```js
const willHappen = probability(0.45);
if (willHappen){
    // 45% chance of returning true.
    console.log("Yes!");
} else {
    // 55% chance of returning false.
    console.log("No!");
}
```