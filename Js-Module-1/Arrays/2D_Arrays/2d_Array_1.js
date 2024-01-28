//2D arrays 
const friend1 = ["akram", "aslam"];
const friend2 = ["arman", "altaf", "sonu"];
const friend3 = ["amar"];

const allfriend = [friend1, friend2, friend3];

console.log(allfriend);
console.log(friend1);
console.log(friend2);
console.log(friend3);

const rows = allfriend.length;
const cols1 = friend1.length;
const cols2 =  friend2.length;
const cols3 = friend3.length;

console.log("no of rows(small array)"+rows);
console.log("no of cols row-0"+" "+cols1);
console.log("no of cols row-1"+" "+cols2);
console.log("no of cols row-2"+" "+cols3);

//creat n x n matrix 
function printMatrix(mat){
    for(let i = 0; i<mat[0].length; i++){
        process.stdout.write(mat[0][i]+" ");
    }
    console.log();
    for(let i = 0; i<mat[1].length; i++){
        process.stdout.write(mat[1][i]+" ");
    }
    console.log();
    for(let i = 0; i<mat[2].length; i++){
        process.stdout.write(mat[2][i]+" ");
    }
    console.log();
}
const mat = [[1,2,3],
             [4,4,5],
             [7,8,9]
            ];
printMatrix(mat);

console.log("using loops start here ")

function printMax(mats){
    const rows = mat.length;
    const cols = mat[0].length;
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            process.stdout.write(mat[i][j]+" ");
        }
        console.log();
    }
}
const mats = [[1,2,3],
            [4,4,5],
            [7,8,9]
            ];
printMax(mats);