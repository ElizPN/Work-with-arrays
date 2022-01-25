function compare(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

let arr = [67, 1, 8 - 2, 15, 2, 38, 0, 8];

function twoOldestAge(arr) {
  let newArr = [];
  arr.sort(compare);
  newArr.push(arr[0], arr[1]);
  return newArr;
}
let result = twoOldestAge(arr);
console.log(result);
