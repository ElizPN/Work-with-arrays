let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function compareNumeric(a, b) {
  if (a.age > b.age) return 1;
  if (a.age == b.age) return 0;
  if (a.age < b.age) return -1;
}
arr.sort(compareNumeric);

let sortByAge = (arr) => arr.sort(compareNumeric);
console.log(arr);
