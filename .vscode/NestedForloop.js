//Nested For loop
for (let i = 1; i <= 10; i++) {
  let output = i + ": ";
  for (let j = 11; j <= 20; j++) {
    output += j + " ";
  }
  console.log(output);
}



for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }
  console.log(output);
}
//o/p
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 


//Print the pattern in * fromat
for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 1; j <= 5; j++) {
    output += " *";
  }
  console.log(output);
}

//*
//**
//***
//****/

row=5;
for (let i = 1; i <= row; i++) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  console.log(output);
}
//O/P
//*
//* *
//* * *
//* * * *
//* * * * *

//Hollow right angle triangle
//*
//**
//* *
//*  *
//*    * /
for (let i = 1; i <= 5; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    //Print * for first column and last column
    if (j == 1 || j == i || i == 5) {
      rows += "*";
    }else 
    {
      rows += " ";
    }
  }
  console.log(rows);
}

//O/P
//*
//* *
//*  *
//*   *
//*     *

// 1
// 22
// 333
// 4444
// 55555
for (let i = 1; i <= 5; i++) { //i=4
  let row = ""; //3
  for (let j = 1; j <= i; j++) {
    row += i;//
  }
  console.log(row);
}

//O/P
//1
//2 2
//3 3
//4 4 4
//5 5 5 5

1
12
123
1234
1234
for(let i =1; i<=5; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        row +=i;
    }
    console.log(row)
}



//Print the Pattern
/* 1 2 3 4
 2 3 4
  3 4
   4 */
//let row =5;
for (let j = 1; j <= 4; j++) {
  let output = "";
  //For Scape
  for (let i = 1; i <= j-1; i++) {
    output += " ";
  }
  //2. Print numbers
  for (let i = j; i <= 4; i++) {
    output += i + " ";
  }
  console.log(output);
}





for (let i = 1; i <= 4; i++) {
  let output = "";
  //For Scape
  for (let j = 1; j <= i - 1; j++) {
    output += " ";
  }
  //2. Print numbers
  for (let j = i; j <= 4; j++) {
    output += i + " ";
  }
  console.log(output);
}

// *****
//  ****
// ***
//  **
//   *
