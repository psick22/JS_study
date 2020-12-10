// QUIZ
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

const calculator = function (command, a, b) {
  let cmd = command;
  switch (cmd) {
    case "add":
      addCommand(a, b);
      break;
    case "substract":
      subsCommand(a, b);
      break;
    case "divide":
      divCommand(a, b);
      break;
    case "multiply":
      mulCommand(a, b);
      break;
    case "remainder":
      remainCommand(a, b);
      break;
    default:
      alert(`${cmd} : Not supported commands`);
      break;
  }
};
const addCommand = function (a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
};
const subsCommand = function (a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
};
const divCommand = function (a, b) {
  console.log(`${a} / ${b} = ${a / b}`);
};
const mulCommand = function (a, b) {
  console.log(`${a} * ${b} = ${a * b}`);
};
const remainCommand = function (a, b) {
  console.log(`${a} % ${b} = ${a % b}`);
};

calculator("add", 1, 2);
calculator("substract", 1, 2);
calculator("divide", 1, 2);
calculator("multiply", 5, 3);
calculator("remainder", 5, 3);
calculator("power", 5, 3);
