/* let arr = [1,4,5,7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; 
} 
console.log(sum); */


let arr = [];
let answer = prompt('Enter the number');

while (isFinite(answer) === true) {
    arr.push(answer);
}

console.log(arr);
