/* 
Filename: ComplexCode.js
Content: Complex code demonstrating various programming concepts and techniques
*/

// Object representing a person
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum of all even numbers in the array using Array.reduce() method
const sumOfEvenNumbers = numbers.reduce((sum, num) => {
  if (num % 2 === 0) {
    return sum + num;
  }
  return sum;
}, 0);

// Function to find the maximum number in an array
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Prototype method to check if a string is a palindrome
String.prototype.isPalindrome = function () {
  const reversed = this.split('').reverse().join('');
  return this === reversed;
};

// Class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  displayDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Example instances of the Person and Car classes
const johnDoe = new Person('John Doe', 30, '123 Street, City');
const janeSmith = new Person('Jane Smith', 25, '456 Avenue, Town');
const myCar = new Car('Toyota', 'Camry', 2021);
const yourCar = new Car('Honda', 'Accord', 2022);

// Execute code
johnDoe.greet();
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Reverse of "hello": ${reverseString('hello')}`);
console.log(`Sum of even numbers in the array: ${sumOfEvenNumbers}`);
console.log(`Maximum number in the array: ${findMaxNumber(numbers)}`);
console.log(`"racecar" is a palindrome: ${"racecar".isPalindrome()}`);
console.log(`"javascript" is a palindrome: ${"javascript".isPalindrome()}`);
myCar.displayDetails();
yourCar.displayDetails();