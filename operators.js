/* 
Those symbols who responsible to perform some actions on the varibale values are called operator

1. Arithmetic
2. Comparision /relational operator
3. Logical operator
4. Unary operator
5. Turnery
6. Assignment
7. Bitwise
Arithmetic Operator: who is responsible to perform any calculation that is Arithmetic

 */
/* //Addition
console.log(73+10)
//Substraction
console.log(73-10)

//Division
console.log(73/10)

//Multiplication
console.log(73*10)
//modulus/remainder
console.log(73%10)

//Power / exponetial
console.log(73**10);  //2*2*2  2^3 */

// Arithmetic
let total = 10 + 5; // total is 15
console.log(total);

// Assignment
let score = 10;
score += 5; // score is now 15
console.log(score);

// Comparison (Strict vs Loose)
console.log(5 == "5"); // true (because it only checks the value)
console.log(5 === "5"); // false (because one is a Number and one is a String)

// Logical
let highSchooler = true;
let drivingAge = false;

let canDrive = highSchooler && drivingAge;
console.log(canDrive); // Outputs: false (both must be true)

//Comparision opearator/Relational Operator
//Comparision opearator always return in T/F
console.log(`Greater than Operator: ${34 > 89}`);
console.log(`Smaller than Operator: ${34 < 89}`);
console.log(`Greater than Equals Operator: ${34 >= 89}`);
console.log(`Smaller than Equals Operator: ${34 > 89}`);


console.log(34 == "34"); //equals only the data ot the type
console.log(34 == 34); //compare only value
console.log(34 === "34"); // Compare both value and type

//Assignment Operator
//1. 1. Simple assignment operator: those operator who is responsible to assign any value
var number = 45; // Simple assignment operator

//Compounding assignment operator
number += 3; //number=number+3 //number 45+3=48
console.log(number);

//substraction compounding operator
number -= 5; //number=number-5 //45-5=40
console.log(number);

//multiplication compounding operator
number *= 2; //number=number-5 //45-5=40
console.log(number);

//Division Compounding operator
number /= 4; //number=number-5 //45-5=40
console.log(number);

//Modulus compounding operator
number %= 5; //number=number-5 //45-5=40
console.log(number);

//Logical Operators.  &&.(AND)  ||(OR)  !(NOT)
//If we want to find any end result from multiple conditions then we use logical operators

//AND operator
console.log(34 > 78 && 34 > 23 && 23 > 12); //If all condition true then true if anyone false then false

//OR Operator
console.log(34 > 78 || 34 > 23 || 23 > 12); //If anyone condition true then True, If all True then True
console.log(34 < 78 || 34 > 23 || 23 > 12);
console.log(34 > 78 || 34 < 23 || 23 < 12); //If all false then false

//Not Operator : responsible to inverse the final result
console.log(!(34 < 78 || 34 > 23 || 23 > 12)); //Result is True hence it inverse to False
console.log(!(34 > 78 || 34 < 23 || 23 < 12)); //Result is False hence inverse to True

//Turnery operator // They are flow control operator
var result = 23 % 2 == 0 ? "number is even" : "number is odd";
console.log(result); //If condition is false then Right hand site of the will display
var result = 23 % 2 == 1 ? "number is even" : "number is odd"; //If condn is True then left hand site result will display

console.log(result); //If

//Unary Operators : are those only one operand .

var a=90
a++; //increment
console.log(a);

var b=67;
b--;
console.log(b);

//Preincrement : First increse the value then assign
var c=75;
var d = ++c;
console.log(d);
console.log(c);
 
// Postincrement
var x=90;
var y=x++;
console.log(y);
console.log(x);

//Predecrement
var c=75;
var d = --c;
console.log(d);
console.log(c);

// Postdncrement
var x=90;
var y=x--;
console.log(y);
console.log(x);