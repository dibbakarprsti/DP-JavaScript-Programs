//For loop always work for finite iteration
for (var i = 1; i <= 20; i++) {
  console.log("Iterarion i " + i);
}

//print the table of 2
for (let i = 1; i <= 10; i++) {
  console.log(`Table of 2 * ${i} = ${2 * i}`);
}

//print the factorial of 5 it means 5*4*3*2*1
let num = 5;
let fact = 1;
for (let i = num; i >= 1; i--) {
  fact *= i;
}
console.log(`Factorial of ${num} is ${fact}`);

//Find even and ODD in between 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("Even number: " + i);
  } else {
    console.log("odd number: " + i);
  }
}
//find which number is divisible by 3 and 5 both between 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Number is divisible by both 3 & 5: " + i);
  } else {
    console.log("Not divisible by both 3 & 5: " + i);
  }
}
//Math.floor(7/2)=3

//find the Sum of digits
let num1 = 3456;
let sum = 0;
for (; num1 > 0; ) {
  sum = sum + (num1 % 10);
  num = Math.floor(num1 / 10);
}
console.log("Sum of Numbers is: " + sum);

//Find any number is prime or not number=45
//those numbers who is divisible by 1 and by itself

let number = 45;
let isPrime = true;
//If any number is less than or equals to 1 then its not Prime number so 0 and 1 are not prime
if (number <= 1) {
  isPrime = false;
}
//Is it exactly 2, 2 is the only even prime number
else {
  for (let i = 2; i <= number; i++) {
    //if number that divides with a remainder of 0, not prime
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}