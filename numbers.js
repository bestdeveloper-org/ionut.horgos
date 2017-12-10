//isFinite() -The isFinite() function determines whether a number is a finite, legal number.

var a = 5, b=5.4, c="Ionut" ;
console.log(isFinite(a));//true
console.log(isFinite(b));//true

//Number.isInteger() - Number.isInteger() method determines whether a value an integer.
console.log(Number.isInteger(a));//true
console.log(Number.isInteger(b));//false

//isNaN() function determines whether a value is an illegal number (Not-a-Number).
console.log(isNaN(a));//false-pentru ca el este un numar
console.log(isNaN(c));//true- nu este un numar, este un string

//Number.isSafeInteger() method determines whether a value is a safe integer.
console.log(Number.isSafeInteger(a));//true
console.log(Number.isSafeInteger(b));//false