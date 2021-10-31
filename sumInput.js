

function sumInput() {
    let arr = [];
    let answer = prompt('Enter the number');
console.log(answer);
    if (answer === null || answer === ''|| !isFinite(answer)) {
    alert ("Input process completed")
} else { 
    while (answer != null && answer != '' && isFinite(answer) === true) { 
        arr.push(answer);
        answer = prompt('Enter the number')
        console.log(answer);
    } 
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);   
    } 

    console.log(sum);
}
sumInput();

