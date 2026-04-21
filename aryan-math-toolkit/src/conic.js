// Circle

function circleEquation(x,y,r){
 return x*x + y*y - r*r
}

function circleArea(r){
 return Math.PI * r * r
}

function circleCircumference(r){
 return 2 * Math.PI * r
}


// Parabola

function parabola(x,a,b,c){
 return a*x*x + b*x + c
}

function parabolaVertex(a,b,c){
 const x = -b/(2*a)
 const y = parabola(x,a,b,c)

 return {x,y}
}


// Ellipse

function ellipseEquation(x,y,a,b){
 return (x*x)/(a*a) + (y*y)/(b*b)
}

function ellipseArea(a,b){
 return Math.PI * a * b
}


// Hyperbola

function hyperbolaEquation(x,y,a,b){
 return (x*x)/(a*a) - (y*y)/(b*b)
}


// Export

module.exports = {
 circleEquation,
 circleArea,
 circleCircumference,
 parabola,
 parabolaVertex,
 ellipseEquation,
 ellipseArea,
 hyperbolaEquation
}