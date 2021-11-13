let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }
  return sum / arr.length;
}
console.log(getAverageAge(arr));
