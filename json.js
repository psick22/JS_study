// JSON

// 1. Object to Json
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// a. array
json = JSON.stringify(["apple", "banana"]);
console.log(json);

// b. object

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol or function are not supported
  // symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]); // replacer -> 원하는 property만 json으로 변환
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
}); // replacer -> 원하는 property만 json으로 변환
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // error
// obj 는 serialize 된 JSON 으로 부터 parse 해서 오브젝트를 만든 것
// 함수는 serialize 될때 포함되지 않으므로 obj 에는 jump() 라는 API가 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error
// obj.birthDate는 string이기 때문에 getDate API 를 호출 할 수 없음

// parse API에서 reviver를 사용하면 string을 다시 object로 바꿔줄 수 있음
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate());
