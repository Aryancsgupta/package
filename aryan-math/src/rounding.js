function round(x){ return Math.round(x) }
function floor(x){ return Math.floor(x) }
function ceil(x){ return Math.ceil(x) }
function trunc(x){ return Math.trunc(x) }
function fix(x){ return parseInt(x) }
function clamp(x, min, max) {
  if (min > max) throw new Error("min cannot be greater than max");
  return Math.min(Math.max(x, min), max);
}

module.exports={
 round,floor,ceil,trunc,clamp,fix
}