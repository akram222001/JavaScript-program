
// increasing order recusive function
function recusion(i){
    if(i>5){
      return;
    }
    console.log(i);
    
    recusion(i+1)
  }
  recusion(1)


//   Decreasing order
  function recusive(n){
    // BASE CASE STOP
    if(n == 0){
        return;
    } 
    console.log("Akram Ansari");
    console.log(n);

    recusive(n-1);
  }
  recusive(5);

  // example 2-=-0 
  function recusion(n){
    // BASE CASE
    if(n==0){
      return;
    }
    console.log(n);
    
    // RECUSION CASE
    recusion(n-1);
  }
  recusion(5);

//   same questjion incecreasing order
// new fun
function rec2(i, n){
    if(i>n){
        return;
    }
    console.log("ACCIOJOB");
    rec2(i+1, n);
}
function rec(n){
    rec2(1,n)
}

// FollBack of recursion
function rec3(i){
    if(i>5){
        return;
    }
    console.log(i);
    rec3(i+1);
    console.log(i);  //follback
}
rec3(1);


// 23rd Jan (Recursively Print the numbers in reverse Order)

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printtillN(N) {
  // BASE CASE 
  if(N == 0)
  {
    return;
  }
  
  // THIS WILL HELP TO PRINT IN A SINGLE LINE
  process.stdout.write(N + " ");
  
  // RECURSIVE CASE 
  printtillN(N-1);
}

rl.on('line', (N) => {
  printtillN(parseInt(N));
  rl.close();
});


// // 23rd Jan (Print n times using Recursion)
// const readline = require('readline');

// //const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function printWord(N) {
  // BASE CASE 
  if(N == 0)
  {
    return;
  }
  
  console.log("AccioSchool");
  // Recursive Case
  printWord(N-1);
}

rl.on('line', (N) => {
  printWord(parseInt(N));
  rl.close();
});


//Recursive print number in Reverse
function printreverse(N){
if(N==0){
  return;
}

  process.stdout.write(N +" ");
  printreverse(N-1);
}
// input: 5
// output : 5 4 3 2 1 


//Print between x and y
function recursive(i , y){
  // Base case
if(i > y){
  return;
}
process.stdout.write(i + " ");
  // recursive case
recursive(i+1, y);
}
function printXandY(x , y){
recursive(x , y);
}
// input: 5
        //8
// output : 5 6 7 8

// Recursive print Number
function printN(N, i){
  // BASE CASE
if(i>N){
  return
}

process.stdout.write(N +" ");
  //RECURSIVE CASE

printN(N+1, i);
}

// input
5
// output
// 1 2 3 4 5 

// sum of natural number

function recursion(n){
  // BASE CASE 
  if(n==1){
    return 1;
  }

let product = n + product(n-1)   // 5 + (5-1)
  // RECURSIVE CASE 
  recursion(n+1);
}
