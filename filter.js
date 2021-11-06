let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    } 
    
    return newArr;
} 

let filter = filterRange(arr, 1, 4);
console.log(filter);
