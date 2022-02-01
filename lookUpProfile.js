const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i <= contacts.length; i++) {
    console.log(contacts[i].firstName);
    if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
      // checking does ("Harry", "likes")) fall under this condition? No
      console.log(1); // fails the "if" test if the following "if else" condition is present
      contacts[i][prop];
    } else if (name !== contacts[i].firstName) {
      // checking does ("Harry", "likes")) fall under this condition? YES
      console.log(2); // if we delete this contition - the first "if" works and our parameters pass first "if"
      ("No such contact"); // return respectively value.
    } else if (!contacts[i].hasOwnProperty(prop)) {
      ("No such property");
    }
  }
}
// loop is writen right (if I delete all "if" contitions - I het every iteration element)

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Bob", "likes"));
// console.log(lookUpProfile("Akira", "drinks"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes")); // we passed the test only on the first element (element with index 0)
