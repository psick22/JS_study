// async & await
// clear style of using promise

// 1. async

// promise
/* 
function fetchUser() {
  // do network request in 10 secs...
  return new Promise((reslove, reject) => {
    reslove("ellie");
  });
}
*/

// async
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async 함수 안에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);

  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// function getBanana() {
//   return delay(3000).then(() => "banana");
// }

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} and ${banana}`);
//   });
// }

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} and ${banana}`;
}

pickFruits().then(console.log);

// await 병렬 처리
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} and ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise API
function pickAllfruits() {
  // promise 배열을 전달하면 모든 promise를 병렬적으로 다 받을 때까지 기다림
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllfruits().then(console.log);

function pickOnlyone() {
  // 배열에 전달된 promise 중에서 가장 먼저 값을 return 한 promise만 전달됨
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyone().then(console.log);
