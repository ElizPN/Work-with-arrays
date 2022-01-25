let age = [2, 101, 6, 95, 7, 8, 80, 96, 100, 67, 99];
let age2 = [82, 22, 28, 33, 58];

function twoOldestAges(age) {
  let newArr = [];
  let oldestAge = age[0];
  let almostOld = age[0];
  for (let i = 0; i < age.length; i++) {
    if (oldestAge <= age[i]) {
      almostOld = oldestAge;
      console.log(oldestAge, almostOld);
      oldestAge = age[i];
      console.log(oldestAge, almostOld);
    } else if (almostOld < age[i]) {
      almostOld = age[i];
      console.log(oldestAge, almostOld);
    }
    // console.log(oldestAge + "oldestage", almostOld + "almostOld");
  }
  newArr.push(oldestAge, almostOld);
  return newArr;
}
let oldest = twoOldestAges(age);
console.log(oldest);

// create a variable that will contain max. number and assign it the first element of array.
// create a variable that will contain second max. number and assign it the first element of array.
// in every iteration we check whether less max. number than iterable element.
// if condition is true - we assign max.value to the second max. number (for now)
