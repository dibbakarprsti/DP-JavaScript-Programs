//In while loop first we check then execute the Block code

//In Do-while loop first we execute the code then check condition
// do{
//     CSSLayerStatementRule;
// } while();

let i = 11;
do {
  console.log(i);
  i++;
} while (i <= 10);

//Print the below pattern by using do while loop
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777

let num = 1;
do {
  let rows = "";
  let j = 1;
  do {
    rows += num;
    j++;
  } while (j <= num);
  console.log(rows);
  num++;
} while (num <= 7);
