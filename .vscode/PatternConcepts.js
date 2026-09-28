//Pattern should be like below
// 1 1 1 1
//  2 2 2
//   3 3
//    4
//Logic to Handle this Pattern
/*Row (i) | Spaces Needed | Numbers Needed | What to print
--------------------------------------------------------
i = 1   |      0        |       4        | "1 "
i = 2   |      1        |       3        | "2 "
i = 3   |      2        |       2        | "3 "
i = 4   |      3        |       1        | "4 " */

//1. The Item Rule: What value is being printed? It matches the current row number exactly (\[i\]).
//2. The Space Rule: How many spaces do we need? It is always exactly \(i - 1\).
//3. The Quantity Rule: How many times do we print the number? If total rows \(N = 4\),
// then the count matches the formula \(N - i + 1\) (e.g., \(4 - 1 + 1 = 4\) times).
//3. Cheat Sheet Formulas for Inner Loops
// When trying to figure out what mathematical formula to put inside your inner loops, these are the most common patterns:
// Increasing items (\(1, 2, 3, 4, 5\)): Use i as the limit.
// Decreasing items (\(5, 4, 3, 2, 1\)): Use TotalRows - i + 1 as the limit.
// Odd number sequences (\(1, 3, 5, 7, 9\) for pyramids): Use 2 * i - 1 as the limit.
// Even number sequences (\(2, 4, 6, 8, 10\)): Use 2 * i as the limit.
// Summary StrategyWhen you look at a pattern, ask yourself:
// How many lines total? (Controls your outer loop)
// As I go down, do spaces increase or decrease? (Controls your space loop)
// As I go down, do items increase or decrease? (Controls your item loop)
// Am I printing constants (*), row counts (i), or column counts (j)? Would

//Step1: The Outer loop dictates the Rows
for (let i = 1; i <= 4; i++) {
  rows = ""; // Reset the line string for the new row

  //Step2: The first inner loop handles leading spaces
  for (let j = 1; j <= i - 1; j++) {
    rows += " ";
  }
  //Step 3. The 2nd inner loop handles the Characters(Star/Numbers)Add numbers with a space after each
  for (k = 1; k <= 4 - i + 1; k++) {
    rows += i + " ";
  }
  console.log(rows);
}

//5 4 3 2 1
//  4 3 2 1
//    3 2 1
//      2 1
//        1
for (let i = 1; i <= 5; i++) {
  rows = "";
  //Space Rule (i-1) for increasing space, if decreasing space then(N-i) rule)
  for (let j = 1; j <= i - 1; j++) {
    rows += "  ";
  }
  //For Inner Loop, 1. The counting Rule for Decreasing count 5 4 3 2 1 formula(N-i +1) And for Increasing count (i)
  //2. The Identity Rule for, if value dropping with each column like 5,4,3,2,1 then formula(StartingValue - K + 1)
  // If value stays identical like 1,1,1,1,1 then do not use counter at all
  let rowStartVal = 5 - i + 1;
  for (let k = 1; k <= rowStartVal; k++) {
    let num = rowStartVal - k + 1;
    rows += num + " ";
  }
  console.log(rows);
}

//-------------------
let N = 5;
for (let i = 1; i <= N; i++) {
  rows = "";
  //Space Rule (i-1) for increasing space, if decreasing space then(N-i) rule)
  for (let j = 1; j <= i - 1; j++) {
    rows += "  ";
  }
  //For Inner Loop, 1. The counting Rule for Decreasing no of print count 5 4 3 2 1 formula(N-i +1) And for Increasing count (i)
  //2. The Identity Rule for, if value dropping with each column like 5,4,3,2,1 then formula(StartingValue - K + 1)
  // If value stays identical like 1,1,1,1,1 then do not use counter at all
  let rowStartVal = N - i + 1;
  for (let k = 1; k <= rowStartVal; k++) {
    //let num = rowStartVal - k + 1;
    //rows += i;
    if (i <= 3) {
      rows += i + " ";
    } else {
      rows += 6 - i + " ";
    }
  }
  console.log(rows);
}

//===========================
//1
//01
//010
//1010

let num = 1;
for (let i = 1; i <= 4; i++) {
  r = "";
  for (let j = 1; j <= i; j++) {
    if (num % 2 == 0) {
      r += "0";
    } else {
      r += "1";
    }
    num++;
  }
  console.log(r);
}
//==============================

let n = 5;
for (let i = 1; i <= n; i++) {
  let line = "";
  // 1. Add leading spaces
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }
  // 2. Add stars (Formula for odd numbers: 2 * i - 1)
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }
  console.log(line);
}

/*  *
 ***
 *****
 *******
 ********* */

let x = 5;
for (let i = 1; i <= x; i++) {
  let line = "";
  // 1. Add leading spaces
  for (let j = 1; j <= i - 1; j++) {
    line += " ";
  }
  // 2. Add stars (Formula for odd numbers: 2 * i - 1)
  for (let k = 1; k <= 2 * (x - i) + 1; k++) {
    line += k;
  }
  console.log(line);
}
//
// 123456789
//  1234567
//   12345
//    123
//     1
//

let y = 5;
for (let i = 1; i <= y; i++) {
  let line = "";
  // 1. Add leading spaces
  /* for (let j = 1; j <= i; j++) {
    line += " ";
  } */
  // 2. Add stars (Formula for odd numbers: 2 * i - 1)
  for (let k = 1; k <= i; k++) {
    line += i;
  }
  console.log(line);
}
/* Output:
1
22
333
4444
55555
*/

/* Output:
1
01
101
0101
10101
*/
let n1 = 5;
for (let i = 1; i <= n1; i++) {
  r = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      r += "1";
    } else {
      r += "0";
    }
  }
  console.log(r);
}

// 7 6 5 4 3 2 1
//   54321
//    321
//     1

let n2 = 4;
for (let i = n2; i >= 1; i--) {
  r = "";
  for (let j = 1; j <= (n2 - i); j++) {
    r += " ";
  }
  for (let k = 7; k >= 2*(n2 - i) + 1; k--) {
    r += (k);
  }
  console.log(r);
}    

// 7654321
//  76543
//   765
//    7

