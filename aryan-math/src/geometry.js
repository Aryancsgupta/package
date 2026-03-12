// Circle

function circleArea(r){
 return Math.PI * r * r
}

function circleCircumference(r){
 return 2 * Math.PI * r
}

function circleDiameter(r){
 return 2 * r
}


// Square

function squareArea(a){
 return a * a
}

function squarePerimeter(a){
 return 4 * a
}

function squareDiagonal(a){
 return Math.sqrt(2) * a
}


// Rectangle

function rectangleArea(l,w){
 return l * w
}

function rectanglePerimeter(l,w){
 return 2 * (l + w)
}

function rectangleDiagonal(l,w){
 return Math.sqrt(l*l + w*w)
}


// Triangle

function triangleArea(base,height){
 return 0.5 * base * height
}

function trianglePerimeter(a,b,c){
 return a + b + c
}

function triangleHeron(a,b,c){
 let s = (a+b+c)/2
 return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}


// Parallelogram

function parallelogramArea(base,height){
 return base * height
}

function parallelogramPerimeter(a,b){
 return 2*(a+b)
}


// Trapezium

function trapeziumArea(a,b,h){
 return 0.5*(a+b)*h
}


// Cube

function cubeVolume(a){
 return a*a*a
}

function cubeSurfaceArea(a){
 return 6*a*a
}


// Cuboid

function cuboidVolume(l,w,h){
 return l*w*h
}

function cuboidSurfaceArea(l,w,h){
 return 2*(l*w + w*h + h*l)
}


// Cylinder

function cylinderVolume(r,h){
 return Math.PI * r*r * h
}

function cylinderSurfaceArea(r,h){
 return 2*Math.PI*r*(r+h)
}


// Cone

function coneVolume(r,h){
 return (1/3)*Math.PI*r*r*h
}

function coneSurfaceArea(r,l){
 return Math.PI*r*(r+l)
}


// Sphere

function sphereVolume(r){
 return (4/3)*Math.PI*r*r*r
}

function sphereSurfaceArea(r){
 return 4*Math.PI*r*r
}

module.exports = {
 circleArea,
 circleCircumference,
 circleDiameter,

 squareArea,
 squarePerimeter,
 squareDiagonal,

 rectangleArea,
 rectanglePerimeter,
 rectangleDiagonal,

 triangleArea,
 trianglePerimeter,
 triangleHeron,

 parallelogramArea,
 parallelogramPerimeter,

 trapeziumArea,

 cubeVolume,
 cubeSurfaceArea,

 cuboidVolume,
 cuboidSurfaceArea,

 cylinderVolume,
 cylinderSurfaceArea,

 coneVolume,
 coneSurfaceArea,

 sphereVolume,
 sphereSurfaceArea
}