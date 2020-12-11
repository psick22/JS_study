"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // 서버와 통신하는 등 시간이 많이 걸리는 일들을 비동기적으로 처리하는 것이 좋음

  // Promise object를 생성하는 순간 excutor 콜백함수가 바로 실행
  console.log("doing something...");
  // network 통신이 일어난 것처럼 묘사하기 위해 setTimeout으로 delay줌
  setTimeout(() => {
    resolve("ellie"); // network에서 성공적으로 받아온 데이터를 resolve 콜백 함수를 통해 전달
    // reject(new Error("no network")); // 실패했을 때는 에러를 reject 를 통해 전달
  }, 2000);
});

// 2. Consumer: then, catch, finally
// then : promise가 정상적으로 잘 수행이 되어서 최종적으로 resolve 콜백으로 받아온 값을 parameter로 전달
// catch :
promise
  .then((value) => {
    console.log(value); // promise 가 성공했을 때 resolve로 받아오는 값
  })
  .catch((error) => {
    console.log(error); // promise 가 실패했을 때 reject 로 받아오는 값
  })
  .finally(() => {
    console.log("finally"); // promise가 성공하든 실패하든 상관없이 마지막으로 수행하고 싶은 기능 작성
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1초 뒤에 숫자 1 전달
});

// then : value를 전달해도 되고 Promise를 전달할 수 있음
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => meal`), 1000);
  });

getHen() //
  .then(getEgg) // then((hen) => getEgg(hen))
  .catch((error) => {
    return "bread";
  }) // 중간에 error가 발생해도 전체적인 promise chain에 문제가 발생하지 않도록
  .then(cook) // then((egg) => cook(egg))
  .then(console.log) // then((fry) => console.log(fry));
  .catch(console.log);
