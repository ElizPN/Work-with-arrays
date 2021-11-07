
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let newArr = arr.slice(0); 
    return newArr.sort()
}
  
    let sorted = copySorted(arr);
    console.log(arr);
    console.log(sorted);
    