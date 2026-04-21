function random(){ return Math.random() }

function randomInt(min,max){
 return Math.floor(Math.random()*(max-min+1))+min
}

function randomFloat(min,max){
 return Math.random()*(max-min)+min
}

function randomChoice(arr){
 return arr[Math.floor(Math.random()*arr.length)]
}

function randomArray(n){
 return Array.from({length:n},()=>Math.random())
}

module.exports={
 random,randomInt,randomFloat,randomChoice,randomArray
}