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

module.exports={
 add,sub,mul,div,mod,power,sqrt,cbrt,abs,sign
}