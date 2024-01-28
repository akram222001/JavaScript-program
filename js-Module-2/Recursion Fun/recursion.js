
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