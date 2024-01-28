
/*push method use in the insert Element in array */
// let arr = [];
// console.log(arr);
// arr.push(1);
// arr.push(2);
// arr.push(4);
// arr.push(5);
// arr.push(6);
// arr.push(7);
// arr.push(8);
// console.log(arr);

/*pop method use for delete in element form array */
// arr.pop(1)
// arr.pop(1)
// console.log(arr);

/*2D Array in push element and print */

// let a  = [1,2]
// let b = [1,2,3]
// let c = [1];

// let arr1 =[];
// arr1.push(a); //element 2
// arr1.push(b); // element 3
//arr1.push(c); //element 1
//console.log(arr1);

//indexing is starting from  0

// for(let i = 0; i<b.length; i++){
//     console.log(b[i]);
// }

//2D array
let a1  = [1,2]
let b1 = [1,2,3]
let c1 = [1];

let array1 = [];//Elements = 0
array1.push(a1);//Elements = 1
array1.push(b1);//Elements = 2
array1.push(c1);//Elements = 3
// console.log(array1);
for(let i = 0; i<array1.length; i++){
    for(let j = 0; j<array1[i].length; j++ ){
    console.log(array1[i][j]);
    }
}

//https://course.acciojob.com/idle?question=a48120ce-3cf5-4ea3-bbf1-f8f1deeeaf96
// pascal tringal-1
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    let triangle = pascalTriangle(parseInt(n));
    for (let i = 0; i < triangle.length; i++) {
      console.log(triangle[i].join(' '));
    }
    readline.close();
  });
  
  function pascalTriangle(numRows) {
    
    let answer = [];
    let firstRow = [1];
    
    // firstRow is added into answer 
    answer.push(firstRow); // [[1]]
    
    // [[1] 
    //  [1 1]  ---> middle elements = 0, rowIndex = 1 
    //  [1 2 1] ---> middle elements = 1, rowIndex = 2 
    //  [1 3 3 1] ---> middle elements = 2, rowIndex = 3 
    //  [1 4 6 4 1]] ---> middle elements = 3, rowsIndex = 4 
    
    // Building all other rows 
    for(let i=1; i<numRows; i++)
    {
      let currentRow = [];
      
      // first element of every row is 1 
      currentRow.push(1);
      
      // Middle Elements 
      let numberOfMiddleElements = i - 1;
      for(let j=1; j<=numberOfMiddleElements; j++)
      {
        // middleElement is a sum of above two elements 
        let middleElement = answer[i-1][j] + answer[i-1][j-1];
        
        // insert middle element to current row 
        currentRow.push(middleElement);
      }
      
      // last element of every row is 1 
      currentRow.push(1);
      
      answer.push(currentRow);
    }
    
    return answer;
  }
  /* //https://course.acciojob.com/idle?question=b6e58bfc-b800-41d2-b19e-0529ebf126c5

  // pascal tringal-2nd nth 
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    let triangle = pascalTriangleRow(parseInt(n));
    console.log(triangle.join(' '));
    readline.close();
  });
  
  function pascalTriangleRow(numRows) {
    let answer = [];
    let firstRow = [1];
    
    // firstRow is added into answer 
    answer.push(firstRow); // [[1]]
    
    // [[1] 
    //  [1 1]  ---> middle elements = 0, rowIndex = 1 
    //  [1 2 1] ---> middle elements = 1, rowIndex = 2 
    //  [1 3 3 1] ---> middle elements = 2, rowIndex = 3 
    //  [1 4 6 4 1]] ---> middle elements = 3, rowsIndex = 4 
    
    // Building all other rows 

    for(let i=1; i<numRows; i++)
    {
      let currentRow = [];
      
      // first element of every row is 1 
      currentRow.push(1);
      
      // Middle Elements 
      let numberOfMiddleElements = i - 1;
      for(let j=1; j<=numberOfMiddleElements; j++)
      {
        // middleElement is a sum of above two elements 
        let middleElement = answer[i-1][j] + answer[i-1][j-1];
        
        // insert middle element to current row 
        currentRow.push(middleElement);
      }
      
      // last element of every row is 1 
      currentRow.push(1);
      
      answer.push(currentRow);
    }
    
    return answer[numRows - 1];
  }
  */
  
  