console.log("Hello, World! This is the 15th class and 3rd class of js.");
console.log(typeof parseFloat("10.988"));
const num = parseFloat("10.988");

console.log(typeof num, num);
console.log(typeof "10.988");

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 % 4);
console.log(10 ** 5);

console.log("10" + "20");

console.log("-----------------------------------");

let a = 10;
a = a + 1;
a++;
a--;
console.log(a, "a");

console.log("-----------------------------------");

console.log(Math.floor(Math.random() * 100), "random number");

console.log(Math.floor(Math.random()));
console.log(Math.ceil(10.1));
console.log(Math.round(10.5));
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.pow(16, 2));

console.log("-----------------------------------");

let x = Math.floor(Math.random() * 10);
console.log("x:", x);


console.log("-----------------------------------");


// if (x == 1 || x == 3 ||x == 5 ||x == 7 ||x == 9 ) {
//     console.log("x is odd number");
// } else {
//     console.log("x is even number");
// }   


if (x % 2 !== 0) {
    console.log("x is an odd number");
} else {
    console.log("x is an even number");
}

console.log("-----------------------------------");


// // Ternary Operator
// x % 2 !== 0 ? console.log("x is odd number") : console.log("x is even number"); 

let age = Math.floor(Math.random() * 64);

console.log("age:", age);

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

console.log("-----------------------------------");

