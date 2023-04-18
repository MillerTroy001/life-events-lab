"use strict";

const name = "Troy Miller";
let age = 29;
const birthday = "September 14";
const pineapplePizza = false;
const lifeEvents = [
  "My name is Troy and I recently moved to Troy, MI.",
  "I graduated from Oakland University",
  "I coached my former high school swim team to a Division Championship my first year as a coach",
  "I got married on Nov 11, 2021",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let listing of lifeEvents) {
  console.log(listing);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

while (randomNumber != 5) {
  console.log("${randomNumber} !== 5`);
  counter++,
}

//if (randomNumber !== 5) {
//counter++;
//  console.log(`"${randomNumber} !== 5"`);
//} else randomNumber === 5;
//{
//counter++;
//console.log(
//  `"5 ===5. It took ${counter} iterations to randomly generate the number 5."`
//);
//}
