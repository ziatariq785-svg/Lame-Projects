// Array Filter - returns a new array with elements that pass a test
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Array Fill - fills all array elements with a static value
const arr1 = new Array(5);
arr1.fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]

// Array Find - returns the first element that passes a test
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }

// Array FindIndex - returns the index of the first element that passes a test
const index = numbers.findIndex(num => num > 3);
console.log(index); // 3

// Array Map - creates a new array by transforming each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12]

// Array Reduce - reduces array to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 21

// Array Some - checks if at least one element passes a test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// Array Every - checks if all elements pass a test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true