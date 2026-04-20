function add(a,b){ return a+b }
function sub(a,b){ return a-b }
function mul(a,b){ return a*b }
function div(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
function mod(a,b){ return a%b }
function power(a,b){ return Math.pow(a,b) }
function sqrt(a){ return Math.sqrt(a) }
function cbrt(a){ return Math.cbrt(a) }
function abs(a){ return Math.abs(a) }
function sign(a){ return Math.sign(a) }
function fibonacci(n) {
  if (n <= 1) return n;
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

module.exports={
 add,sub,mul,div,mod,power,sqrt,cbrt,abs,sign,fibonacci
}