// Q1. make a string out of an array
// answer
{
  const fruits = ["apple", "bannan", "orange"];
  makeString = function (arr) {
    let str = "";
    for (let i of arr) {
      str += i;
    }
    return str;
  };
  console.log(makeString(fruits));
  console.log(typeof makeString(fruits));
}

// solution: join API
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string

// solution: split API
{
  console.clear();
  const fruits = "apple, kiwi, banana, cherry";
  const result = fruits.split(", ");
  console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]

// solution: reverse API
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements

// splice API -> modify array itself
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5] -> change array itself
}
// solution: slice API -> make new array without modifying original array
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(0, 2);
  console.log(result); // [1, 2] -> make new array
  console.log(array); // [1, 2, 3, 4, 5] -> original array is preserved
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// answer
{
  console.log(students);
  console.log(typeof students[0]);
  // student.score == 90
  let result = [];
  console.log(result);

  for (student of students) {
    if (student.score == 90) {
      result.push(student);
      console.log(student);
    } else {
      continue;
    }
  }
}

// solution: find API
{
  const result = students.find((student) => student.score == 90);

  console.log(result);
}

// Q6. make an array of enrolled students

// filter API => callback function 의 조건에 맞는 element 들로 구성된 array 생성
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]

// answer
{
  let arr = [];
  students.forEach((student) => arr.push(student.score));
  console.log(arr);
}

// solution: map API -> 각각의 element에 callback function을 적용해서 mapping 한 array 생성
{
  const result = students.map((student) => student.score);
  const result2 = students.map((student) => student.enrolled);

  console.log(result);
  console.log(result2);
}

// Q8. check if there is a student with the score lower than 50

// solution: some API -> callback function 의 조건을 만족으로 element 가 하나라도 잇으면 true, 없으면 false 반환
// solution2: every API  -> callback function 의 조건을 모든 element 가 만족할 때 true, 단 하나라도 만족하지 않으면 false 반환
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score

{
  const result = students.map((student) => student.score);
  let sum = 0;
  for (i of result) {
    sum += i;
  }
  console.log(sum / result.length);
}
// solution: reduce API -> 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
// prev -> 이전의 콜백함수에서 리턴된 값, 여기서는 두 element를 더한 값
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score);
  console.log(result.join(","));
}

// solution: map + join
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// map + join + filter

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result);
}

// do Q10 sorted in ascending order
// result shold be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}

// descending order
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
