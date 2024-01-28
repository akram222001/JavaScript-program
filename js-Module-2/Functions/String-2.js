// Hey print means heeey middile double
function print(str){

    // count number of element
    let n = str.length; // length 5
    let answer = "";
    // h and y only chacter parts from e,S
    let numberOfE = n-2; // 5-2 = 3;

    answer = "h";

    for(let i = 1; i< 2*numberOfE; i++){
        answer = answer+"e";
    }
    answer = answer+"y";
    return answer;
}
//output  heeeeeey

// shufile string means string abc  indices 201 ans   bca

function shufile(indices, s){
    let n = s.length; 
    let string = []; // means array we want change  but string this is not change 

    for(let i = 0; i<n; i++){
        string.push("*");
    }
    for(let i =0; i<n; i++){
        string(indices[i]) = string + s[i];
    }
}
