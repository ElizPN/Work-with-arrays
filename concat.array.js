// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

let myConcat = (arr1, arr2) => arr1.concat(arr2);

let yourConcat = (arr1, arr2, arr3 = "You must specify number") =>
  arr1.concat(arr2, arr3);

console.log(myConcat([1, 2], [3, 4, 5]));
console.log(yourConcat(["Gooo"], [1, 2], [3, 4, 5]));
console.log(yourConcat(["Gooo"], [1, 2]));
// calling without third parameter will throw default value "You must specify number"

// concat method combines two or more arrays into one
