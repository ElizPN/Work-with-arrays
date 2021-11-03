

function getMaxSubSum(arr) {
    let arrSum = [];

    for (i = 0; i < arr.length; i++) {
        let sum = arr[i] // you  should not define variable and assign its value 0, and then plus arr[i], because it is same thing that "sum = arr[i]".
        arrSum.push(sum);
        for ( j = i + 1 ; j < arr.length; j++) { //  "j = arr[i] + 1" - will be error, because your nested loop starts from secont Index, so you don`t need to work with value, you need Index.
            sum += arr[j]
            arrSum.push(sum)
        } 
    }
    let maxSum = arrSum[0];
    for (let element of arrSum) {
        if (maxSum < element) {
            maxSum = element;
        }
    } 
    return maxSum;
    
}
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));