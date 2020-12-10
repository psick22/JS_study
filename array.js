"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
//
//
//
//
//
// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
//
//
//
//
//
// 3. Looping
// print all fruits
// a. for
console.clear();

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for in -> get Index
console.clear();

for (let i in fruits) {
  console.log(i);
}

// c. for of -> get value
console.clear();

for (let fruit of fruits) {
  console.log(fruit);
}

// d. forEach
console.clear();

fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));
//
//
//
//
//
// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push("strawberry", "peach");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the begining
fruits.unshift("strawberry", "peach");
console.log(fruits);

// shift : remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are much slower than pop, push
// splice : remove an item by index position
fruits.push("strawberry", "orange", "lemon");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "apple", "watermelon");
console.log(fruits);
// combine two arrays
const fruits2 = ["mango", "pear"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//
//
//
//
// 5. Searching
// find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("watermelon"));

// includes
console.log(fruits.includes("watermelon"));
console.log(fruits.includes("blueberry"));

// lastIndexOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple")); // 가장 먼저나온 apple
console.log(fruits.lastIndexOf("apple")); // 가장 마지막 apple
