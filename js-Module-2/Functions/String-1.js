// let a = 1; 
// let b = "hello"
// let c = "my name is ka"
// let d = "A";


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// // Indexing in the same in the array and string

// let a1 = [1,2,3];
// // [1,2,3]---->Array
// // 0 1 2 -----> this indexing in array
// let b1 = "Hellow";

// console.log(a1[1]);
// console.log(a1.length);

// console.log(b1[1]);
// console.log(b1.length);   //Number of length of letter --->length
// // throw for loops
// for(let i = 0; i<b1.length; i++){
//     console.log(b1[i]);
// }

// other example in string
let s = "akramansari";
let ans = "";
for(let i = 0; i<s.length; i++){
    if(i%2==0){ //deven index print
        ans = ans + s[i];
    }
    console.log(ans);
}
/*output
a
a
ar
ar
arm
arm
armn
armn
armna
armna
armnai
*/


//String to convert ASCII VALUE 
// char code function in js
// let a = "akram ansari";
// for(let i = 0; i<a.length; i++){
//     console.log(a[i]+ "," +a.charCodeAt(i));
// }

// // convert the number to String using inbuild function

// let value = 97;
// // inbuild fincrion 
// let n = String.fromCharCode(value);
// console.log(n)


// convert the String Upper to lower and Lower to Upper
let str = "AkraM aNSAri"

let answer = ""; // temp string sotre

for(let i = 0; i<str.length; i++){
    // change the ASCCI value number
    let value = str.charCodeAt(i);  // 65 to 90 
    if(value>=65 && value<=90){
        value = value + 32 // convert to Lower
        let strings = String.fromCharCode(value);
        answer = answer + strings;
    }
    else if(value>=97 && value<=122){
        value = value -32 // convert the Upper case
        let strings  = String.fromCharCode(value);
        answer = answer + strings
    }
    else{ //special latter 
        answer = answer + a[i];
    }
    return answer;
}