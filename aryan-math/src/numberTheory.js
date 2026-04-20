function factorial(n){
 let res=1
 for(let i=2;i<=n;i++) res*=i
 return res
}

function gcd(a,b){
 while(b){
  [a,b]=[b,a%b]
 }
 return a
}

function lcm(a,b){
 return (a*b)/gcd(a,b)
}

function isEven(n){ return n%2===0 }

function isOdd(n){ return n%2!==0 }

function digitSum(n){
 return n.toString().split("").reduce((a,b)=>a+ +b,0)
}

function fibonacci(n) {
  if (n <= 1) return n;
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}


function primeCheck(n){
 for(let i=2;i<=Math.sqrt(n);i++){
  if(n%i===0) return false
 }
 return n>1
}

module.exports={
 factorial,gcd,lcm,isEven,isOdd,digitSum,fibonacci,primeCheck
}