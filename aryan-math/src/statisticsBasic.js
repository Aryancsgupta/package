function mean(arr){
 return arr.reduce((a,b)=>a+b,0)/arr.length
}

function median(arr){
 arr=[...arr].sort((a,b)=>a-b)
 let n=arr.length
 return n%2?arr[Math.floor(n/2)]:(arr[n/2-1]+arr[n/2])/2
}

function mode(arr){
 let f={}
 let max=0,res=null
 for(let n of arr){
  f[n]=(f[n]||0)+1
  if(f[n]>max){max=f[n];res=n}
 }
 return res
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