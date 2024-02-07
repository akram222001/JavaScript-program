//////////////////////////////
// last occurence index 
// target value T = 3; 
function lastoccurence(A , T, startindex){
if(startindex==0){
    return -1;
}

    if(A[startindex]==T){
        return startindex;
    }
    else{
        return lastoccurence(A, T, startindex-1);
    }
}

// input
// 6
// 8 9 4 1 1 2
// 1
// output 4

///////////////////////////////////////////////

// Find the max Element in array using recursion 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', nums => {
      const arr = nums.split(' ').map(Number);
      const result = maxElement(arr);
      console.log(result);
      readline.close();
    });
  });
  function recursion(i, arr, n){
      // BASE CASE 
      if(i>=n){
          return 0;
  }
      //RECUSSIVE CASE 
      let option1 = arr[i];
      let option2 = recursion(i+1, arr, n);
  
      if(option1 > option2){
          return option1;
      }
          else{
          return option2;
      }
  }
  function maxElement(arr) {
    // Write your code here
      let n = arr.length;
      return recursion(0, arr, n);
      
  }

  ///////////////////////////////////////////////////////
//   Smallest Number in an Array using Recursion 

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', nums => {
      const arr = nums.split(' ').map(Number);
      const result = minElement(arr);
      console.log(result);
      readline.close();
    });
  });
  
  function recursion(i, arr, n)
  {
    // BASE CASE 
    if(i == n-1)
    {
      return arr[i];
    }
    
    // RECURSIVE CASE
    let option1 = arr[i];
    let option2 = recursion(i+1, arr, n);
    
    if(option1 < option2)
    {
      return option1;
    }
    else 
    {
      return option2;
    }
  }
  
  function minElement(arr) {
    let n = arr.length;
    return recursion(0, arr, n);
  }
  */

  //////////////////////////////////
  
  //find the array11 in array

  const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);
  console.log(array11(arr, 0));
});

function array11(nums, index) 
{
  // BASE CASE 
  if(index == nums.length)
  {
    return 0;
  }
  
  // RECURSIVE CASE 
  if(nums[index] == 11)
  {
    return 1 + array11(nums, index + 1);
  }
  else
  {
    return array11(nums, index + 1);
  }
}

///////////////////////////////////////

//find the number of digits
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function numOfDigi(n) {
  
  if(n == 0)
  {
    return 0;
  }
  
  let answer = 1 + numOfDigi(parseInt(n/10));
  return answer;
}

readline.question('', n => {
  const result = numOfDigi(parseInt(n));
  console.log(result);
  readline.close();
});
*/

///////////////////////////////////////////////

// find digits sum
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfDigi(n) {
  
  if(n == 0)
  {
    return 0;
  }
  
  let lastDigit = n%10;
  
  let answer = lastDigit + sumOfDigi(parseInt(n/10));
  return answer;
}

readline.question('', n => {
  let result = sumOfDigi(parseInt(n));
  console.log(result);
  readline.close();
});
*/