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
  //the shorthand version of this would just be "if (pineapplePizza) {"
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i += 1) {
  console.log(lifeEvents[i]);
}

//MY FOR LOOP BELOW WORKED, BUT NOT HOW THE LAB WANTED IT
//for (let listing of lifeEvents) {
//  console.log(listing);
//}

let counter = 0;
//I originially had my random number here, need to go IN the loop

while (true) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    //this else implies that random number WAS 5
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

let hours = 50;
let wage = 10;
let basePay = 0;
let overTimePay = 0;
if (hours > 40) {
  let extraHours = hours - 40;
  basePay = wage * 40;
  console.log(extraHours);
  overTimePay = extraHours * wage * 1.5;
  console.log(overTimePay);
} else {
  basePay = wage * hours;
}
console.log(`Total paycheck: $${basePay + overTimePay} per week`);

let weeksToAMillion = 1000000 / (basePay + overTimePay);
let weeksRoundedUp = Math.ceil(weeksToAMillion);
console.log(`It would take ${weeksRoundedUp} weeks to earn $1,000,000.`);

//MY WHILE LOOP ATTEMPT BELOW, WHILE LOOP WOULD LEAD TO BROKEN INFINITE LOOP (due to no break)
//while (randomNumber !== 5) {
//  console.log("${randomNumber} !== 5`),
//  counter++,
//}

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
