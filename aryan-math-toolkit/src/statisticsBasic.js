function mean(arr){
    if (!arr || arr.length === 0) throw new Error("Array cannot be empty");
    return arr.reduce((a,b)=>a+b,0)/arr.length
}

function median(arr){
    if (!arr || arr.length === 0) throw new Error("Array cannot be empty");
 arr=[...arr].sort((a,b)=>a-b)
 let n=arr.length
 return n%2?arr[Math.floor(n/2)]:(arr[n/2-1]+arr[n/2])/2
}

function mode(arr) {
  let f = {}, max = 0;
  for (let n of arr) { f[n] = (f[n] || 0) + 1; max = Math.max(max, f[n]); }
  return Object.keys(f).filter(k => f[k] === max).map(Number);
}

function variance(arr){
 let m=mean(arr)
 return arr.reduce((s,x)=>s+(x-m)**2,0)/arr.length
}

function std(arr){
 return Math.sqrt(variance(arr))
}

module.exports={
 mean,median,mode,variance,std
}