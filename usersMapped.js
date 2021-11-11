let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((obj) => {
  let newObj = {};
  newObj.fullName = obj.name + " " + obj.surname;
  newObj.id = obj.id;
  return newObj;
});
console.log(usersMapped);

/*let usersMapped = users.map(function mapping(obj) {
  let newObj = {};
  newObj.fullName = obj.name + " " + obj.surname;
  newObj.id = obj.id;
  return newObj;
});

let usersMapped = users.map((obj) => ({
  fullName: `${obj.name} ${obj.surname}`,
  id: obj.id,
}));
*/

console.log(usersMapped);
