if (23 % 2 == 0) {
  console.log("23 is even");
} else {
  console.log("23 is odd");
}

//We have 3 variable which is Greatest
let a = 89;
let b = 56;
let c = 45;

if (a > b && a > c) {
  console.log("a is greter");
}
if (b > a && b > c) {
  console.log("b is greter");
}
if (c > a && c > b) {
  console.log("c is greater");
}

//Print the value zero, positive, negative
let x = 0;
if (x > 0) {
  console.log("x is positive");
}
if (x < 0) {
  console.log("x is negative");
}
if (x == 0) {
  console.log("x is 0");
}

//Find number is odd or even

let t = 90;
if (t % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

//Nested if else :

//if i want selected in
var written = 89;
var physical = 78;
var medical = 56;

if (written >= 60) {
  if (physical >= 50) {
    console.log("not clear the physical");
    if (medical) {
    }
  }
} else {
  console.log("not clear the written");
}

//If your Indian u r elligible for vote in india, your age 18 and equal 18
let citizen = Indian;
let age = 45;
let vote = true;
let medical = fit;
if (citizen == "Indian") {
  console.log("Elligible for voting in India");
  if (age >= 18) {
    console.log("Elligible for voting after 18");
    if (medical == "fit") {
      console.log("Mental condiition True");
    } else {
      console.log("Mentally not fit");
    }
  }
  if (vote == true) {
    console.log("elligible for voting");
  } else {
    console.log("Not able to voting");
  }
} else {
  console.log("Not Indian");
}

//Q2 : If ur a Boy and your height is equals and more than 6 feet and weight is between 64-75 then elligible for Army.
//And if your girl and your height is equals for more than 5 feet and weight 50-56

var gender = "Boy";
let bheight = 6.1;
let bweight = 76;

var gender1 = "Girl";
let gheight = 5;
let gweight = 56;

if (gender == "Boy" && bheight >= 6 && bweight >= 64 && bweight <= 75) {
  console.log("Boy Elligible in indian Army");
} else {
  console.log("Boy not elligible");
}
if (gender1 == "Girl" && gheight >= 5 && gweight >= 50 && gweight <= 56) {
  console.log("Girl is Elligible in Army");
} else {
  console.log("Girl not elligible");
}

//if else ladder

var marks = 89;
if (marks < 33) {
  console.log("fail");
} else if (marks >= 33 && marks < 40) {
  console.log("pass with third div");
} else if (marks >= 40 && marks < 60) {
  console.log("pass with second");
} else if (marks > 60 && marks <= 100) {
  console.log("pass with first");
} else {
  console.log("Invalid data");
}

//we have 7 days in a week then according to day print the menu of mess
//Day=1 print dal rice

let day = "Tuesday";
if (day == "Monday") {
  console.log("Dal Rice");
} else if (day == "Tuesday") {
  console.log("Sweet Rice");
} else if (day == "Wednessday") {
  console.log("Chicken Rice");
} else if (day == "Thursday") {
  console.log("Yellow Rice");
} else if (day == "Friday") {
  console.log("Egg Rice");
} else if (day == "Saturday") {
  console.log("Tomato Rice");
} else if (day == "Sunday") {
  console.log("Chicken, Egg Rice");
} else {
  console.log("InvalidDay entered");
}

//Find the number of day according to the name of the day
let days = "Tuesday" //o/p today is the day one of the week
if (days == "Monday") {
  console.log("Day 1 of the week");
} else if (days == "Tuesday") {
  console.log("Day 2 of the week");
} else if (days == "Wednessday") {
  console.log("Day 3 of the week");
} else if (days == "Thursday") {
  console.log("Day 4 of the week");
} else if (days == "Friday") {
  console.log("Day 5 of the week");
} else if (days == "Saturday") {
  console.log("Day 6 of the week");
} else if (days == "Sunday") {
  console.log("Day 7 of the week");
} else {
  console.log("InvalidDay entered");
}


//Find the Vowel and which character is consonent. --a,e,i,o,u
let char = "E";
if (char == "A") {
  console.log("Vowel");
} else if (char == "E") {
  console.log("vowel");
} else if (char == "I") {
  console.log("vowel");
} else if (char == "O") {
  console.log("vowel");
} else if (char == "U") {
  console.log("vowel");
} else {
  console.log("Consonent");
}

