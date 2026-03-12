const { mean, variance, std } = require("./statisticsBasic");

// Skewness

function skewness(arr){

 const m = mean(arr)
 const n = arr.length

 let num = arr.reduce((s,x)=> s + Math.pow(x-m,3),0)/n
 let den = Math.pow(std(arr),3)

 return num/den
}


// Kurtosis

function kurtosis(arr){

 const m = mean(arr)
 const n = arr.length

 let num = arr.reduce((s,x)=> s + Math.pow(x-m,4),0)/n
 let den = Math.pow(variance(arr),2)

 return num/den - 3
}


// Covariance

function covariance(x,y){

 const mx = mean(x)
 const my = mean(y)

 let sum = 0

 for(let i=0;i<x.length;i++){
  sum += (x[i]-mx)*(y[i]-my)
 }

 return sum/x.length
}


// Correlation

function correlation(x,y){

 return covariance(x,y)/(std(x)*std(y))
}


// Z Score

function zScore(x,arr){

 const m = mean(arr)
 const s = std(arr)

 return (x-m)/s
}


// Linear Regression

function linearRegression(x,y){

 const mx = mean(x)
 const my = mean(y)

 let num = 0
 let den = 0

 for(let i=0;i<x.length;i++){

  num += (x[i]-mx)*(y[i]-my)
  den += (x[i]-mx)*(x[i]-mx)

 }

 const slope = num/den
 const intercept = my - slope*mx

 return {slope, intercept}
}


// Normal PDF

function normalPDF(x,meanVal=0,stdVal=1){

 return (1/(stdVal*Math.sqrt(2*Math.PI))) *
        Math.exp(-((x-meanVal)**2)/(2*stdVal**2))
}


// Percentile

function percentile(arr,p){

 arr=[...arr].sort((a,b)=>a-b)

 const index=(p/100)*(arr.length-1)

 const lower=Math.floor(index)
 const upper=Math.ceil(index)

 if(lower===upper) return arr[lower]

 return arr[lower] + (arr[upper]-arr[lower])*(index-lower)
}


// Quartile

function quartile(arr,q){

 if(q===1) return percentile(arr,25)

 if(q===2) return percentile(arr,50)

 if(q===3) return percentile(arr,75)

}


// Interquartile Range

function iqr(arr){

 return quartile(arr,3) - quartile(arr,1)
}


// Error Function approximation (Abramowitz & Stegun, max error ~1.5e-7)

function erf(x){
 const sign = x >= 0 ? 1 : -1
 x = Math.abs(x)

 const a1 =  0.254829592
 const a2 = -0.284496736
 const a3 =  1.421413741
 const a4 = -1.453152027
 const a5 =  1.061405429
 const p  =  0.3275911

 const t = 1.0 / (1.0 + p * x)
 const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)

 return sign * y
}


// Normal CDF (approx)

function normalCDF(x,meanVal=0,stdVal=1){

 return 0.5*(1+erf((x-meanVal)/(stdVal*Math.sqrt(2))))

}


// One Sample t-test

function tTest(arr,mu){

 const m = mean(arr)
 const s = std(arr)
 const n = arr.length

 return (m-mu)/(s/Math.sqrt(n))
}


// Chi Square Test

function chiSquare(observed,expected){

 let sum = 0

 for(let i=0;i<observed.length;i++){

  sum += ((observed[i]-expected[i])**2)/expected[i]

 }

 return sum
}


// Export

module.exports = {

 skewness,
 kurtosis,
 covariance,
 correlation,
 zScore,
 linearRegression,
 normalPDF,
 percentile,
 quartile,
 iqr,
 normalCDF,
 tTest,
 chiSquare

}