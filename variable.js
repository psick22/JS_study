// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";
//
// 2. Variable
// let (added in ES6)

let globalName = "global name"; // global scope

{
  // block scope
  let name = "kgirok";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  console.log(age);

  age = 4;
  console.log(age);

  var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (변수에 할당이 가능함)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, dont use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${brendan}, type: ${typeof brendan}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + ", type: " + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

// object, real-life object, data structure
const kgirok = { name: "kgirok", age: 20 };
console.log(`value: ${kgirok}, type: ${typeof kgirok}`);
console.log(`value: ${kgirok.name}, type: ${typeof kgirok.name}`);
console.log(`value: ${kgirok.age}, type: ${typeof kgirok.age}`);

kgirok.age = 21;
console.log(`value: ${kgirok}, type: ${typeof kgirok}`);
console.log(`value: ${kgirok.name}, type: ${typeof kgirok.name}`);
console.log(`value: ${kgirok.age}, type: ${typeof kgirok.age}`);

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
