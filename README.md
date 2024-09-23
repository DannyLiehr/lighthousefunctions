# Lighthouse Functions
NPM Package for the functions I find myself using frequently. This is primarily for personal use, but feel free to use this if you also would like to.

# Functions
### `randomise(array)`
Returns a random item from an array.

Example usage:
```js
const array = ["A", "B", "C", "D"];
const randomItem = randomise(array);
console.log(randomItem); // Output: A random item from the array (could be any type of variable).
```
### `truncate(str, n=8)`
Truncates the string by n characters. Default n is 8.

Example usage:
```js
const str = "Hello World";
const truncatedString = truncate(str, 6);
console.log(truncatedString); // Output: "Hello..."
```
### `capitalise(str)`
Capitalises the first letter of a string

Example usage:
```js
const str = "hello world";
const capitalisedString = capitalise(str);
console.log(capitalisedString); // Output: "Hello world"
```
### `getKeyByValue(object, value)`
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
### `getRandomNumber(min=1, max=10)`
Returns a random number between the `min` and `max` arguments.

Example usage:
```js
const randomNumber = getRandomNumber(1,100);
console.log(randomNumber); // Output: Some number between 1 and 100.
```
### `probability(prob=0.5)`
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
### `makeString(array, useOxfordComma=true)`
Turns an array into a list styled like the following: Item 1, Item 2, and Item 3. Optionally includes the Oxford comma before the 'and'. Oxford comma is enabled by default.

Example usage:
```js
const array = ["A", "B", "C", "D"];
const withOxfordComma = makeString(array);

console.log(withOxfordComma); //Output: A, B, C, and D

const withoutOxfordComma = makeString(array, false); // No Oxford Comma

console.log(withoutOxfordComma); //Output: A, B, C and D
```
### `compareByProperty(property)`
Compares two objects by a specified property for sorting. Returns a comparison function that can be used with Array.prototype.sort().

Example usage:
```js
const items = [
    { name: 'Item 1', group: 2 },
    { name: 'Item 2', group: 1 },
    { name: 'Item 3', group: 3 }
];

// Sort by 'group'
items.sort(compareByProperty('group'));
console.log(items);

// Sort by 'name'
const itemsByName = [
    { name: 'Banana', group: 2 },
    { name: 'Apple', group: 1 },
    { name: 'Cherry', group: 3 }
];
itemsByName.sort(compareByProperty('name'));
console.log(itemsByName);
```
### `downloadFile(fileURL, downloadPath, fileType)`
Downloads a file from a given URL.

Example usage:
```js
downloadFile('https://example.com/file', 'path/to/save/file', 'jpg')
    .then(path => console.log(`File downloaded to: ${path}`))
    .catch(err => console.error(err));
```
### `sumArray(values)`
Sums all the valid numbers in an array.

Example usage:
```js
const mixedArray = [1, 2, 'Hello', 3, { key: 'value' }, 4, 5];
const total = sumArray(mixedArray);
console.log(`The sum of the valid numbers is: ${total}`); // Output: The sum of the valid numbers is: 15

```

### `analyzeArray(values)`
Analyzes an array and returns statistical information. Only numeric values are processed. Returns an object containing statistical information, including mean, median, mode, range, variance, skewness, interquartile range, and quartiles.

Example usage:
```js
const dataArray = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];

// Call the analyzeArray function with the dataArray
const analysisResult = analyzeArray(dataArray);

// Log the results
console.log("Statistical Analysis Result:");

// Mean: The average value of the array. Useful for understanding the overall trend or central value.
console.log(`Mean: ${analysisResult.mean}`);

// Median: The middle value when the array is sorted. Important for understanding the center of the data, especially when there are outliers.
console.log(`Median: ${analysisResult.median}`);

// Mode: The most frequently occurring value in the array. Helpful for identifying the most common item in the dataset.
console.log(`Mode: ${analysisResult.mode}`);

// Range: The difference between the maximum and minimum values. Useful for understanding the spread of the data.
console.log(`Range: ${analysisResult.range}`);

// Variance: Measures how far the values are spread out from the mean. Important for assessing the variability in the dataset.
console.log(`Variance: ${analysisResult.variance}`);

// Standard Deviation: The square root of the variance. Provides a measure of dispersion in the same units as the data, making it easier to interpret.
console.log(`Standard Deviation: ${Math.sqrt(analysisResult.variance)}`);

// Skewness: Indicates the asymmetry of the distribution. Useful for understanding the direction and degree of skew in the data.
console.log(`Skewness: ${analysisResult.skewness}`);

// Interquartile Range: The range between the first and third quartiles. Useful for understanding the spread of the middle 50% of the data, reducing the impact of outliers.
console.log(`Interquartile Range: ${analysisResult.interquartileRange}`);

// Quartiles: Values that divide the dataset into four equal parts. Helpful for understanding the distribution and spread of the data.
console.log(`Quartiles: ${analysisResult.quartiles}`);


```

