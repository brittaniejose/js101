// console.log("Hello World");

let myName = "Brittanie";
const someNum = 42;

// Variables can also be declared using var and let
// var is outdated. use const or let

// console.log(myName); // myName = Brittanie

// with let, you can change the values. with const, the value will stay fixed and if you try to change it you'll receive an error code.

// Data types

// Numbers

const one = 1;
const floatNum = 3.14; //floating point number

// Boolean

let is18 = true;
is18 = false;

// Arrays

const someArr = [ "milk", "butter", "eggs", true, 42, {someKey: "A value"}, [1, 2, 3] ] // 0, 1, 2. each item in the array is assigned a number starting at 0.

// console.log(someArr[0])

// console.log(someArr[3], someArr[6], someArr[100])

someArr[0] = "cat";

// console.log(someArr);


// Objects

const myHero = { 
    name: "Galahad", 
    quest: "Seek the grail", 
    favoriteColor: "blue", 
    hp: 100, 
    magic: false,
    is18: is18 // how it reads - is18: false 
}

// console.log(myHero.name); // Galahad
// console.log(myHero.hp);

// console.log(console);




// STRINGS

// "I'm a string"  'I am a string'  `I'm a "string"`

var someString = "I'm a string";
let anotherString = 'I\'m also a string';
const theString = `This is my favorite but any is fine, a 'string' is a "string"`;

// console.log(anotherString); // I'm also a string



const firstNumber = 23;
let secondNumber = 19;

let theAnswer = firstNumber + secondNumber;
// console.log("The answer is", theAnswer); // The answer is 42

secondNumber = 100

theAnswer = firstNumber + secondNumber;

// console.log("The answer is still", theAnswer);



// Number Operators

const add = 2 + 2; // 4
const subtract = 4 - 2; // 2
const divide = 4 / 2; // 2
const multiply = 2 * 2; //4

// console.log(add, subtract, divide, multiply);

const modulo = 5 % 2; // the remainder

// console.log(modulo);

let theNum = 42;

theNum += 10; // 52
theNum -= 20; // 32
theNum *= 2; // 64
theNum /= 2; // 32

// console.log(theNum);




// String Operators

const someName = "Zaphod";
const dayGreeting = "Good Morning, ";

// console.log( dayGreeting + someName); // Goodmorning, Zaphod

// console.log(someName.length); //6
// console.log(someName[1]); // a (indexing the 2nd letter of Zaphond or someName)




// Opposite Operators

let boolean = true;

let not = !boolean;

// console.log(not);




// JS Functions
// Functions must return a value (or it will return undefined)
// Functions are declared using the function keyword



function myFunction() {
    let total = 42;
    return "Hello World " + total;
}

myFunction();

// console.log(myFunction());




// Parameters aka Arguments

function greet(name) { // name is the parameter
    return "Hello " + name + "!"
}

console.log(greet("Zaphod")); // Zaphod is the argument

console.log(greet((2 + 2) * 2));
