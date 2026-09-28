//Find any number is prime or not number=45
//those numbers who is divisible by 1 and by itself

//let number = 100;
for (let i = 1; i <= 100; i++) {
  let number = i;
  let isPrime = true;
  //If any number is less than or equals to 1 then its not Prime number so 0 and 1 are not prime
  if (number <= 1) {
    isPrime = false;
  }
  //Is it exactly 2, 2 is the only even prime number
  else {
    // Inner loop: Check if 'num' has any divisors
    for (let j = 2; j < number; j++) {
      //if number that divides with a remainder of 0, not prime
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  //Print final result
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not Prime Number`);
  }
}

//=================================================Another Logic =======================
for (let i = 1; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime == true) {
    console.log(i + " is a prime number");
  }
}

