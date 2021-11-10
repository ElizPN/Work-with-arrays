let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function transformToArrayName (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].name) 
        }
    return newArr

}

let names = transformToArrayName(users);
console.log(names);

//solution with method map

let newArr = users.map(item => item.name)
console.log(newArr)



