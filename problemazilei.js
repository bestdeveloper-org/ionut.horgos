//sa se foloseasca Math.random function pentru a genera n numere intr-un anumit interval min si max;
// ex generateNRandomNumbers(n, min, max); ex: generateNRandomNumbers(3,4,8) ==> [4,8,4] sau [5,7,4] ...

//1.
/* function random (n, min, max){
	 	var arr = [];

	 	function randomNumber(min, max){	
	 		return Math.floor(Math.random() * (max - min)+min);
	 	}
	 	for (var i=0; i<n; i++){
	 		var a = randomNumber(min,max);
	 		arr.push(a);
	 	}
	 	console.log(arr);
	}
	random(3,10,22);*/


//2.Problema zilei: se dau 2 siruri. Sa se returneze intersectia lor. Ex [2,4,5] si [4] rezulta [4] adica cifrele care sunt in comun
var arr1 = [11,5,2,7,3,4,6];
var arr2 =[11,7,8,9,3,10,11,5];

function sortareInSir(arr, lin){
	var found = arr.find(function(element){
		return element === lin;
	})
	return found;
}
function sortareSir(arr1,arr2){
	var result = [];
	for(var i = 0; i < arr1.length; i++){
		var found = sortareInSir(arr2,arr1[i]);
		if(found){
			result.push(found);
		}
	}
	console.log(result);
	return result;
}
sortareSir(arr1,arr2);
//3.Problema zilei: Generati un guid. Se gaseste pe net usor functia.
function idGuid() {
	function generate(){
    	return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
	}
	return (generate()+generate()+"-" + generate()+"-" + generate()+generate());
} 
 console.log(idGuid());

//4. Problema zilei. Sa se populeze o matrice de n linii si m coloane cu numere random intre 1 si 100

function randomNumber(min, max){	
	 		return Math.floor((Math.random() * 100) + 1);
	 	}
function matrixCalculate(){
	var matrix =[];
		for(var i=0; i<9; i++) {
		    matrix[i] = [];

		    for(var j=0; j<9; j++) {
		        matrix[i][j] = randomNumber();
		    }

		}
		return (matrix);
}
console.log(matrixCalculate());
//5.Exercitiu pt maine ar fi sa se creeze un array cu suma elementelor din matrice de pe fiecare linie

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}
var arr = [1, 2, 3, 4, 5];


modifyArray(arr, function() {
  console.log("array has been modified", arr);
});





//6.Problema zilei: afisati numarul maxim dintr-un sir folosind sintaxa while
var arr = [1,23,4,5,2,4,6];
var largest = 0;
var i = 0;

while(i < arr.length){
	if(arr[i] > largest){
		largest = arr[i];
	}
	i++;
}
console.log(largest);

//7.Problema zile: Sa se returneze un array de n numere pornind de la un numar start cu pasul pas . Ex: passArray(start,pas,n), passArray(3,5,4) ==> [3,8,13,18]

var calculate = function passArrays(start, pas, n){
					var arr = [];
					for(var i = 0; i < pas * n; i++){
						if( i % pas === start ){
							arr.push(i);
						}else{
							arr.push();
						}
					}
					return arr;
				}
console.log(calculate(2,4,5));

//8 problema scrisa in while


/*var calculate2 = function passArray(start,pas,n){ 
	var arr = [];
	var i = 0;
	while(arr.length < n){
		 	if(start != n){
		 		arr.push(pas
		 			);
		 	}
 		i++;
	 }
	 return arr;
}
console.log(calculate2(2,3,4));
*/
//9.problema zilei: sa se returneze un array cu proprietatile unui obiect; 
//hint de cautare pe google: enumerate object properties. ex: var obiect = {a:1,b:2} ==> ['a','b']
/*
function run(){
	 var x = 0; 
	 function firstParameter(){ 
		 var a = setTimeout(function(){
						var object = {
							a:1,
							b:2
						}
						object = Object.keys(object);
						 console.log(object);
						var data = new Date(); 
						console.log(data);
					},1000); 
		} 			
	var intervalID = setInterval(function () {
				firstParameter(); // Your logic here
		   if (++x === 5) {
		       window.clearInterval(intervalID);
		   }
		}, 1000);

}
run();*/

//10.problema zilei: avand un sir de numere reprezentand intervale de executie,  sa se afiseze in consola numarul corespunzator. ex: [1,3,1] 
// se va afisa dupa 1 sec (in consola ) 1, apoi dupa 3 secunde se afiseaza 3 si apoi dupa inca o secunda se afiseaza 1


var inputArray =[1,2,3];
var timeOutChain = (function(arr) {

	if(!arr){
		return;
	}
	var isRunning = false;
 var counter = 0;
 var timerID = null;
 function createTimer(index){
 	
 }
 function callback(){
 	console.log(counter);
		console.log(new Date());
 if (++counter === arr.length) {
 window.clearTimeout(timerID);
 counter = 0;
 isRunning = false;
 return null;
 }
 return setTimeout(callback,arr[counter]*1000);
 };

 return function(workingArray) {
 	arr = workingArray || inputArray;
 	if(isRunning){
 		console.log('is already running!');
 		return;
 	}
 	isRunning = true;
 timerID = setTimeout(callback,arr[0]*1000);
 }
})(inputArray);

