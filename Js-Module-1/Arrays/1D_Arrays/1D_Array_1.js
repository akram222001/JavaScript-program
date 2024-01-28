 // how to get  the last array
 const arr = ["akram", "arman","ishan",1,2,3,4];
 console.log(arr);
 
 // how to access elements of array
 console.log(arr[2]);
 console.log(arr[3]);
 console.log(arr[4]);
 console.log(arr[5]);
 
 //find the number of  element in the array
 console.log(arr.length);
 console.log(arr.length);
 
 //hpe to change box value change elements 
 arr[0]= "azim";
 console.log(arr);
 
 //how to add new elements array
 arr.push("wahid");
 console.log(arr);
 
 //array store multiple data type at once
 const firstName = "akram ansari";
 const age = 21;
 const job = "teacher";
 const friends = ["sallu","parwez", "anwar"]
 const myArray = [firstName, age, job, friends]
 console.log(myArray[0]);
 console.log(myArray[1]);
 console.log(myArray[2]);
 console.log(myArray[3]);
 
 //hosting doubt in break
 /* let sum = 0;
 let power = 0;
 while(n > 0) {
     const digit = n % 10; // extract digit
     sum = sum + (digit * (2 ** power)); 
     power++;
     n = parseInt(n / 10); // remove digit
 }
 
 return sum;
 */
 
 //hosting doubt in break
 
 ////////////////////
 // Exercise
 function calcAge(birthYear) {
     return 2023 - birthYear;
   }
   
   const years = [1990, 1967, 2002, 2010, 2018, 1992, 2003, 1987];
   
   // create an array called ages which has
   // respective age for each birthYear in the years array
   const ages = [];
   for(i = 0; i<years.length; i++ ){
     ages.push(calc)
   }
   console.log(ages);
 
   ///////////////////////
 //max element and its index
 function ArrayProblem1(n, arr) {
     // Write code here
     let maxEle = arr[0];
     let maxIdx = 0;
   
     /*
     // alternatively
     let maxEle = -Infinity;
     let maxIdx = -1;
     run loop from i = 0
     */
   
     for (let i = 1; i < n; i++) {
       // if you find a shop with greater chocolates
       if (arr[i] > maxEle) {
         maxEle = arr[i];
         maxIdx = i;
       }
     }
   
     return maxIdx;
   }
 
   //array operation
 
 let sum = 0; 
 let maxEle = -Infinity; // or arr[0]
 for(let i=0; i<n; i++){
     sum =sum+arr[i];
     if(arr[i]>maxEle){
         maxEle=arr[i];
     }
     const agerage = parseInt(sum/n);
     console.log(sum , agerage, maxEle)
     
 }
 ////////////////21/12/2023///////////
 
 // oprimal / efficient approach
 function ArrayProblem(arr) {
   // Write your code here
   const n = arr.length;
   let maxEle = -Infinity;
   let minEle = Infinity;
 
   for (let i = 0; i < n; i++) {
     if (arr[i] > maxEle) {
       maxEle = arr[i];
     }
 
     if (arr[i] < minEle) {
       minEle = arr[i];
     }
   }
 
   console.log(maxEle - minEle);
 }
 
 //2nd largest from array
 
 let firstMax = -Infinity;
 for(let i = 0; i<n; i++){
   if(arr[i]>firstMax){
     firstMax = arr[i];
   }
 }
 let secondMax =-Infinity;
 for(let i = 0; i<n; i++){
   if(arr[i] != firstMax && arr[i]>secondMax){
     secondMax=arr[i];
   }
 }
 console.log(secondMax);
 
 ///////////////////////
 function printFindParticipants(arr, n, k) {
   // Write your code here
   const kthPartScore = arr[k - 1];
   let cnt = 0;
   for (let i = 0; i < n; i++) {
     if (arr[i] >= kthPartScore && arr[i] > 0) {
       cnt++;
     }
   }
 
   console.log(cnt);
 }
 
 ///////////22/12/2023///////////
 const res = []
 for(let i =0; i<n; i++){
   res.push(0);
 }
 let i = n-1;
 let j = n-1;
 let carry = 0;
 while(i>=0){
   sum = j>=0 ? a[i]+b[i]+carry:a[i]+carry;
   res[1] = sum%10;
   carry = sum/10;
 i--;
 j--;
 }
 if(carry == 1){
 res.unshift(1);
 }
 
 // final this code
 // ?dding two array
 
 function calSumUtil(a, b, n, m) {
   // Write your code here
 
   // 1. initialize / create empty result array
   const res = [];
   for (let i = 0; i < n; i++) {
     res.push(0);
   }
 
   // 2. start adding from last
   let i = n - 1;
   let j = m - 1;
   let carry = 0;
 
   while (i >= 0) {
     let sum = j >= 0 ? a[i] + b[j] + carry : a[i] + carry;
     res[i] = sum % 10;
     carry = parseInt(sum / 10);
 
     i--;
     j--;
   }
 
   // 3. If there is carry left, add 1 to the beginning of array
   if(carry == 1) {
     res.unshift(1);
   }
 
   return res;
 }
 
 function calSum(a, b, n, m) {
   // Write your code here
   if (n >= m) {
     return calSumUtil(a, b, n, m);
   }
   return calSumUtil(b, a, m, n);
 }
 
 // Bulding
 //for(heights[i]);
 
 
 //back building
 const n = heights.length;
 let cnt = 0;
 let runningMax = -Infinity;
 for(let i = 0; i<n; i++){
   if(runningMax <= heights[i]){
     cnt++;
     runningMax = heights[i];
   }
 }
 return cnt;
 
 //rotate array
 