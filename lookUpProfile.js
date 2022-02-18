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
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      // if this condition is not truthly - all following code in the loop will not execute
      if (contacts[i].hasOwnProperty(prop)) {
        // will execute if firs conditions is truthly
        return contacts[i][prop]; // will execute if nested conditions is truthly
      } else {
        return "No such property"; // will execute only if nested conditions is false
      }
    }
  }
  return "No such contact"; // will run if first conditions is false (because we put it outside the loop)
}

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Bob", "likes"));
// console.log(lookUpProfile("Akira", "drinks"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));

// prop in contacts[i] - another way to check existens of property
