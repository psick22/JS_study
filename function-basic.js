// 함수 선언
// 함수 호출

// 함수 선언

function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}
// 함수를 인자로 전달할 때 함수 이름 그대로 받으면 전달받은 함수를 이용해서 무언가를 하거나
// ()를 이용해서 함수를 호출 할 수 있음

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomething();

// const result = add(1, 2);
// console.log(result);

// doSomething(add()); // add 함수 호출 후 return 값을 전달
// doSomething(add); // 함수 자체를 전달 -> 함수 이름만

const addFun = add;

console.log(addFun);
console.log(addFun(2, 4));
