// product of N number 
// 5 = 5*4*3*2*1 = 120

function recursive(n){
    // BASE CASE 
if(n==1){
    return 1;
}
    //RECURSIVE CASE
    let product = n * product(n-1);
    return product;
}

//////////////////////////////////////////////////////////////

//Multiplication of n * m

function recursion(n, m){
    //BASE CASE
if(m == 1){
    return n;
}
    //RECURSIVE CASE
    let product = 5 + recursion(n, m-1);
    return product;
}

function product(n , m){
    let answer = recursion(n, m);
    return answer;
}

////////////////////////////////////////////

// FACTORIAL recursive

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    console.log(factorial_recursive(parseInt(n)));
    readline.close();
  });

  ///////////////////////////////////
  
  // 0! = 1 
  // 1! = 1 
  
  function factorial_recursive(n) {
    
    // BASE CASE 
    if(n == 0)
    {
      return 1;
    }
    
    if(n == 1)
    {
      return 1;
    }
    
    // RECURSIVE CASE 
    let factorial = n * factorial_recursive(n - 1);
    return factorial;
  }

  ////////////////////////////////

  //RECURSIVE FABONACCI SERIES

  /*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function fib(n) {
    // write code here
      // BASE CASE 
  if(n==1){
      return 0;
  }
  if(n==2){
      return 1;
  }
      //RECURSIVE CASE 
      let fabonacci = fib(n-1) + fib(n-2);
      return fabonacci;
  }
  
  readline.question('', n => {
    console.log(fib(Number(n)));
    readline.close();
  });
  */

  ////////////////////////////////////////////////////

  //PRINT PATTERN STAR USING RECURSION

  /*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function recursive(i , n){
      // BASE CASE 
  if(i>n){
      return;
  }
      //RECUSIVE CASE
      for(let j = 1; j<=i; j++){
          process.stdout.write("* ");
      }
      console.log();
      recursive(i+1, n);
  }
  
  function solve(n) {
    // Your code here
      recursive(1, n);
  }
  
  readline.question('', n => {
    solve(parseInt(n));
    readline.close();
  });
  */

  ////////////////////////////////////////////////

  //Print Array Recursively

  /*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      printArray(arr, n);
      readline.close();
    });
  });
  
  function printArray(arr, n) {
    printArrayRecursive(arr, 0, n);
  }
  
  function printArrayRecursive(arr, i, n) {
      // Write your code here
  
      //BASE CASE
  if(i>=n){
      return;
  }
      
  process.stdout.write(arr[i]+ " ");
      //RECURSIVE CASE
      printArrayRecursive(arr, i+1, n);
      
  }
  */

  ////////////////////////////////////////////////