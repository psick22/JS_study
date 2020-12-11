// primitive type variable

// object
// object
const obj = {
  // key: value,
  name: "ellie",
  age: 4,
};

console.log(obj.name);

const obj2 = obj;

console.log(obj2.name);

obj2.name = "kgirok";
console.log(obj2.name);
console.log(obj.name);
