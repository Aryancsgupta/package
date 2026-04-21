// Vector Addition

function vectorAdd(a,b){
    if (a.length !== b.length) throw new Error("Vectors must be the same length");
 return a.map((v,i)=>v + b[i])
}


// Vector Subtraction

function vectorSub(a,b){
    if (a.length !== b.length) throw new Error("Vectors must be the same length");

 return a.map((v,i)=>v - b[i])
}


// Dot Product

function dotProduct(a,b){
 let sum = 0
 if (a.length !== b.length) throw new Error("Vectors must be the same length");
 for(let i=0;i<a.length;i++){
  sum += a[i] * b[i]
 }

 return sum
}


// Vector Magnitude

function vectorMagnitude(v){
 return Math.sqrt(v.reduce((s,x)=>s + x*x,0))
}


// Vector Normalize

function vectorNormalize(v) {
  let mag = vectorMagnitude(v);
  if (mag === 0) throw new Error("Cannot normalize a zero vector");
  return v.map(x => x / mag);
}

// Matrix Addition

function matrixAdd(A,B){
    if (A[0].length !== B.length)
        throw new Error("Matrix A columns must equal Matrix B rows");
    return A.map((row,i)=>
    row.map((val,j)=>val + B[i][j])
 )
}


// Matrix Subtraction

function matrixSub(A,B){
 return A.map((row,i)=>
  row.map((val,j)=>val - B[i][j])
 )
}


// Matrix Multiplication

function matrixMul(A,B){

 let result = []

 for(let i=0;i<A.length;i++){

  result[i] = []

  for(let j=0;j<B[0].length;j++){

   let sum = 0

   for(let k=0;k<B.length;k++){
    sum += A[i][k] * B[k][j]
   }

   result[i][j] = sum
  }
 }

 return result
}


// Matrix Transpose

function matrixTranspose(A){

 return A[0].map((_,i)=>
  A.map(row=>row[i])
 )
}


// 2x2 Determinant

function matrixDeterminant2(A){
    if (A.length !== 2 || A[0].length !== 2)
        throw new Error("matrixDeterminant2 requires a 2x2 matrix");
    return A[0][0]*A[1][1] - A[0][1]*A[1][0]
}

module.exports = {
 vectorAdd,
 vectorSub,
 dotProduct,
 vectorMagnitude,
 vectorNormalize,
 matrixAdd,
 matrixSub,
 matrixMul,
 matrixTranspose,
 matrixDeterminant2
}