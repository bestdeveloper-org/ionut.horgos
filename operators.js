/*Numeric operators*/
var a = 4 ,b = 5;
console.log(a+b);
console.log(b-a);
console.log(b*a);
console.log(b%a);

/*Assignment Operators*/

var a = " ionut ", b = 10 , c = 20 ;
console.log(a += c);
console.log(b *= c);
console.log(c %= b);

/*Comparation Operators*/

var a = 10, b = 20;
console.log(a === b); //false ; trebuie sa fie egala si valoarea si tipul
console.log(a == b); //false ; trebuie sa fie egala valoarea

var a = 10, b = 10;
console.log(a === b); //true
console.log(a == b); //true

/*Ternary operator*/
var c = (a > 5) ? " YES " : " No"; // ternary operator
console.log(c); // true

var ionut = 19, bani = 2000;
var mergeLaPary = (ionut >= 18 && bani >= 1000)? " Merge la party ca are si varsta adecvata si bani " : " Nu are varsta corespunzatoare";
console.log(mergeLaPary);

/*JavaScript logical operator*/

var a = 2, b = 15, c = 200;
var d = (a >=2 && b >= 15); // true
console.log(d);

var d = (a > 2 && b > 15);	// false
console.log(d);

var d = (a >= 2 && b > 15);	// false
console.log(d);

var d = (a >= 2 && b >= 15 || a > 2 && b > 15);
console.log(d);// Este true deoarece o conditie este true

var c = ((a <= 1 && b <= 14) || (a < 1 && b > 15));
console.log(c); // false pentru ca nici o conditie nu este adevarata