function log(x) {
  if (x <= 0) throw new Error("log input must be greater than 0");
  return Math.log(x);
}
function log10(x) {
  if (x <= 0) throw new Error("log10 input must be greater than 0");
  return Math.log10(x);
}
function log2(x) {
  if (x <= 0) throw new Error("log2 input must be greater than 0");
  return Math.log2(x);
}
function exp(x){ return Math.exp(x) }
function expm1(x){ return Math.expm1(x) }
function log1p(x){ return Math.log1p(x) }

module.exports={
 log,log10,log2,exp,expm1,log1p
}