function round(x){ return Math.round(x) }
function floor(x){ return Math.floor(x) }
function ceil(x){ return Math.ceil(x) }
function trunc(x){ return Math.trunc(x) }
function clamp(x,min,max){ return Math.min(Math.max(x,min),max) }
function fix(x){ return parseInt(x) }

module.exports={
 round,floor,ceil,trunc,clamp,fix
}