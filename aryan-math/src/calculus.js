function derivative(f,x,h=0.0001){
 return (f(x+h)-f(x))/h
}

function integrate(f,a,b,n=1000){
 let h=(b-a)/n
 let sum=0

 for(let i=0;i<n;i++){
  let x1=a+i*h
  let x2=a+(i+1)*h
  sum+=(f(x1)+f(x2))*h/2
 }

 return sum
}

module.exports={
 derivative,integrate
}