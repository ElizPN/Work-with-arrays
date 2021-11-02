


let arr = [2, -1, 2, 3, -9];
let arrSum = [];


for (i = 0; i < arr.length; i++) {
    let sum = 0;
    sum = sum + arr[i];
    arrSum.push(sum)

  for ( j = arr[i] ; j < arr.length; j++) {
  sum = sum + arr[j]
  arrSum.push(sum)
  } 

}
