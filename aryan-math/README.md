# aryan-math-toolkit

A comprehensive math library for basic to advanced calculations. Includes modules for Arithmetic, Calculus, Conic Sections, Geometry, Linear Algebra, Logarithms, Number Theory, Random, Rounding, Statistics, and Trigonometry!

## Installation

```bash
npm install aryan-math-toolkit
```

## Features
- **Arithmetic** – add, sub, mul, div, mod, power, sqrt, cbrt, abs, sign, fibonacci
- **Calculus** – derivative, integrate
- **Conic Sections** – circle, parabola, ellipse, hyperbola
- **Geometry** – Areas, Perimeters, Volumes, Surface Areas
- **Linear Algebra** – Vectors, Matrices, Determinants
- **Logarithms** – log, log10, log2, exp, expm1, log1p
- **Number Theory** – factorial, gcd, lcm, fibonacci, primeCheck, and more
- **Random** – random, randomInt, randomFloat, randomChoice, randomArray
- **Rounding** – round, floor, ceil, trunc, clamp, fix
- **Statistics (Basic)** – mean, median, mode, variance, std
- **Statistics (Advanced)** – skewness, kurtosis, covariance, correlation, zScore, linearRegression, percentile, quartile, iqr, tTest, chiSquare
- **Trigonometry** – sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh

---

## Usage Examples

```javascript
const math = require("aryan-math-toolkit");
```

---

## 🔢 Arithmetic

```javascript
math.add(5, 3)        // 8
math.sub(10, 4)       // 6
math.mul(6, 7)        // 42
math.div(20, 4)       // 5
math.mod(17, 5)       // 2
math.power(2, 10)     // 1024
math.sqrt(144)        // 12
math.cbrt(27)         // 3
math.abs(-99)         // 99
math.fibonacci(5)          // 120
math.sign(-5)         // -1  (positive → 1, zero → 0, negative → -1)
```

---

## 📐 Calculus

```javascript
// Derivative of x² at x = 3  →  ~6
const f = x => x * x;
math.derivative(f, 3);       // ≈ 6.0001

// Definite integral of x² from 0 to 3  →  9
math.integrate(f, 0, 3);     // ≈ 9.0
```

---

## 🔵 Conic Sections

```javascript
// Circle
math.circleEquation(3, 4, 5)       // 0  (point lies on circle of radius 5)
math.circleArea(5)                  // 78.539...
math.circleCircumference(5)         // 31.415...

// Parabola  y = 2x² + 3x + 1
math.parabola(2, 2, 3, 1)          // 15
math.parabolaVertex(2, 3, 1)       // { x: -0.75, y: -0.125 }

// Ellipse
math.ellipseEquation(3, 4, 5, 6)   // (3²/5²) + (4²/6²) ≈ 0.803
math.ellipseArea(5, 3)             // 47.123...

// Hyperbola
math.hyperbolaEquation(5, 3, 4, 3) // (5²/4²) - (3²/3²) ≈ 0.5625
```

---

## 📏 Geometry

```javascript
// Circle
math.circleArea(7)                  // 153.938...
math.circleCircumference(7)         // 43.982...
math.circleDiameter(7)              // 14

// Square
math.squareArea(5)                  // 25
math.squarePerimeter(5)             // 20
math.squareDiagonal(5)              // 7.071...

// Rectangle
math.rectangleArea(6, 4)           // 24
math.rectanglePerimeter(6, 4)      // 20
math.rectangleDiagonal(6, 4)       // 7.211...

// Triangle
math.triangleArea(8, 5)            // 20
math.trianglePerimeter(3, 4, 5)    // 12
math.triangleHeron(3, 4, 5)        // 6  (area using Heron's formula)

// Parallelogram
math.parallelogramArea(6, 4)       // 24
math.parallelogramPerimeter(6, 4)  // 20

// Trapezium
math.trapeziumArea(5, 3, 4)        // 16

// Cube
math.cubeVolume(3)                 // 27
math.cubeSurfaceArea(3)            // 54

// Cuboid
math.cuboidVolume(4, 3, 2)         // 24
math.cuboidSurfaceArea(4, 3, 2)    // 52

// Cylinder
math.cylinderVolume(3, 5)          // 141.371...
math.cylinderSurfaceArea(3, 5)     // 150.796...

// Cone
math.coneVolume(3, 5)              // 47.123...
math.coneSurfaceArea(3, 6)         // 84.823...  (r=3, slant=6)

// Sphere
math.sphereVolume(4)               // 268.082...
math.sphereSurfaceArea(4)          // 201.061...
```

---

## 🧮 Linear Algebra

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];

// Vectors
math.vectorAdd(a, b)           // [5, 7, 9]
math.vectorSub(a, b)           // [-3, -3, -3]
math.dotProduct(a, b)          // 32
math.vectorMagnitude(a)        // 3.741...
math.vectorNormalize(a)        // [0.267, 0.534, 0.801]

// Matrices
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

math.matrixAdd(A, B)           // [[6,8],[10,12]]
math.matrixSub(A, B)           // [[-4,-4],[-4,-4]]
math.matrixMul(A, B)           // [[19,22],[43,50]]
math.matrixTranspose(A)        // [[1,3],[2,4]]
math.matrixDeterminant2(A)     // -2  (1×4 − 2×3)
```

---

## 📊 Logarithms

```javascript
math.log(Math.E)    // 1      (natural log)
math.log10(1000)    // 3
math.log2(8)        // 3
math.exp(1)         // 2.718... (e^1)
math.expm1(1)       // 1.718... (e^1 - 1)
math.log1p(0)       // 0      (ln(1 + 0))
```

---

## 🔢 Number Theory

```javascript
math.factorial(5)        // 120
math.gcd(48, 18)         // 6
math.lcm(4, 6)           // 12
math.isEven(8)           // true
math.isOdd(7)            // true
math.digitSum(1234)      // 10
math.fibonacci(8)        // 21
math.primeCheck(17)      // true
math.primeCheck(18)      // false
```

---

## 🎲 Random

```javascript
math.random()                        // 0.0 – 1.0 (random float)
math.randomInt(1, 100)               // Random integer between 1 and 100
math.randomFloat(1.5, 9.5)           // Random float between 1.5 and 9.5
math.randomChoice(["a", "b", "c"])   // Random element from array
math.randomArray(5)                  // Array of 5 random floats [0,1)
```

---

## 🔁 Rounding

```javascript
math.round(4.6)           // 5
math.floor(4.9)           // 4
math.ceil(4.1)            // 5
math.trunc(4.9)           // 4  (cuts decimal, no rounding)
math.clamp(15, 0, 10)     // 10 (clamps value between min and max)
math.fix("3.99abc")       // 3  (parses integer from string)
```

---

## 📈 Statistics – Basic

```javascript
const data = [4, 8, 6, 5, 3, 7, 8];

math.mean(data)       // 5.857...
math.median(data)     // 6
math.mode(data)       // 8  (most frequent)
math.variance(data)   // 2.693...
math.std(data)        // 1.641...
```

---

## 📉 Statistics – Advanced

```javascript
const x = [1, 2, 3, 4, 5];
const y = [2, 4, 5, 4, 5];
const data = [2, 4, 4, 4, 5, 5, 7, 9];

math.skewness(data)               // measure of asymmetry
math.kurtosis(data)               // measure of tail heaviness

math.covariance(x, y)             // 2.0
math.correlation(x, y)            // ~0.871 (Pearson r)

math.zScore(9, data)              // ~2.0 (how many stds from mean)

math.linearRegression(x, y)
// { slope: 0.7, intercept: 1.5 }

math.normalPDF(0)                 // 0.3989... (standard normal)
math.normalPDF(0, 0, 1)           // same as above

math.percentile(data, 75)         // 5.75 (75th percentile)
math.quartile(data, 1)            // 4    (Q1)
math.quartile(data, 2)            // 4.5  (Q2 / median)
math.quartile(data, 3)            // 5.75 (Q3)
math.iqr(data)                    // 1.75 (Q3 - Q1)

// One-sample t-test (test if mean differs from mu=4)
math.tTest(data, 4)               // t-statistic

// Chi-square test
const observed = [10, 20, 30];
const expected = [15, 20, 25];
math.chiSquare(observed, expected) // 2.666...
```

---

## 📐 Trigonometry

> All angles are in **radians**.

```javascript
const PI = Math.PI;

math.sin(PI / 2)     // 1
math.cos(0)          // 1
math.tan(PI / 4)     // ~1

math.asin(1)         // PI/2 ≈ 1.5707...
math.acos(1)         // 0
math.atan(1)         // PI/4 ≈ 0.7853...

// Hyperbolic
math.sinh(1)         // 1.1752...
math.cosh(0)         // 1
math.tanh(1)         // 0.7615...

// Inverse Hyperbolic
math.asinh(1)        // 0.8813...
math.acosh(1)        // 0
math.atanh(0.5)      // 0.5493...
```

---

## Author
Aryan ([@Aryancsgupta](https://github.com/Aryancsgupta))
