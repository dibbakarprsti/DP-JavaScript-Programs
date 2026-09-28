
/*
In JavaScript, a variable is a named container used to store data and values. 
Think of a variable as a labeled storage box, You can put data into the box 
and change the data whenever you need.
There are three keywords used by JavaScript dependes upon data and behavior.
1. let : let keyword does not allow multiple declaration with same name.
          But we can initialize the same variable multiple times.
2. const: const keyword does not allow multiple declaration not the initialization.
3. var : Var keyword allows multiple declaration and multiple initialization 
         both are possible. Same variable name allows multiple time to store 
         different Data. Basically avoided in modern coding as it can cause unexpected Bugs.

*/
/* let : The keyword telling the computer to prepare a new variable
    age: The unique name(identifier) you choose for the variable
    =  : The assignment operator that puts the value into the container
    30 : The actual data being stored
*/

/* console.log("******** Variable ********")
console.log("*** 1. Var Keyword ***")
var var_name; //declaration of the variable
var_name="Dibbakar";  //Initialization of the variable
console.log(var_name);

var var_name = "Dibbakar";  //declaration and initialization both in a line
console.log(var_name); */

/* console.log("**** 2. let keyword ****")
let age =30;
console.log(age);
let age =40;
console.log(age);
age = 50;
console.log(age); */



console.log("**** 3. const keyword ****")
const Aadhar = 7205589111;
console.log(typeof Aadhar)
//const Aadhar = 23455;
Aadhar = 50;
console.log(Aadhar);





