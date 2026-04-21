function random(){ return Math.random() }

function randomInt(min, max) {
  if (min > max) throw new Error("min cannot be greater than max");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  if (min > max) throw new Error("min cannot be greater than max");
  return Math.random() * (max - min) + min;
}

function randomChoice(arr) {
  if (!arr || arr.length === 0) throw new Error("Array cannot be empty");
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomArray(n){
 return Array.from({length:n},()=>Math.random())
}

module.exports={
 random,randomInt,randomFloat,randomChoice,randomArray
}