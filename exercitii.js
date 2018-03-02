//1.Create a new object (a) with a string property and a numeric property using the literal approach
var caine = {
		name: "Rex",
		picioare: 4,
		latra: function(){
				this.scoateSunet = "Miau Miau"
		},
	//2.Add a new object (b) into the existing objectsee the cap object
		cap: {
			scoateSunet: " AWWW",
			urechi: 2,
			culoare: "Maro"
		}
}
//console.log(caine);
//console.log(caine.latra);

//3.Create an array and add the above object twice. Call the function from the object and print the array. Check the values and explain why both objects were modified
var array = [];

/*console.log(array.push(caine));
console.log(array.push(caine.latra()));
document.write(JSON.stringify(array));
console.log(array);*/

//4.Create a similar object by using function constructor

	function animal(name){
		this.name = name;
		this.age = Math.floor((Math.random() * 100) + 1);
		this.speed = 15;
		this.walk = function(speed){
			this.speed = speed;
		}
	}

	var caine = new animal("Rex");
	caine.speed = 20;
	caine.age = 4;
	caine.walk(1);

	//document.write(JSON.stringify(caine));

//5.Poulate the array with few instances of the object created with function constructor
 var arr = [];
  arr.push(caine);

  var caine = new animal("Lake");
  caine.speed = 3;
  caine.age = 5;
  caine.walk(4);
  arr.push(caine);
  console.log(arr);

//6.Sort the array depending by string property
var sortString = Object.assign([],arr);
	
	sortString.sort(function(a, b){
		return a.name.localeCompare(b.name);
	});
	console.log(sortString);
//7.Sort the array depending by numeric property

var sortByNumeric =Object.assign([],arr);

	sortByNumeric.sort(function(a, b){
		if(a.age > b.age){
			return 1;
		}
		if(a.age < b.age){
			return -1;
		}
		return 0;
	})
	console.log(sortByNumeric);

//8.Sort by numeric property and string property
	 
var sort = Object.assign([],arr);
	sort. sort(function(a, b){
		if(sortString > sortByNumeric){
			return 1;
		}if(sortString < sortByNumeric){
			return -1;
		}
		return 0;
	})
console.log(sort);

//9.Filter the array by numeric property smaller than 5
var filteredArray = sortByNumeric.filter(function(number){
	return number.age <=5;
});
console.log(filteredArray);
//10.Filter the array by numeric property smaller than 90 and string property contains 'ana'
// ?
var filteredArray2 = sort.filter(function(number, name){
	 return number < 90 && name === "Lake";
});
console.log(filteredArray2);

//11.Create a function which receive a boolean value and returns the oposite value. true --> false or false --> true
 function opositeValue(a){
	if (!a < 5){
		return " a este mai mare ca si 5";
	}else{
		return " a este mai mic ca si 5";
	}

}
console.log(opositeValue(1));
//12.Create a function which receive a numeric value (0 or 1) and returns the oposite value. 1 --> 0 or 0 --> 1
function numericValue(a){
		return a = 1 -a;
}
console.log(numericValue(1));
//13.Change the function constructor object to have the numeric property a default and random value between 1-100

/*facem un alt obiect si daca acolo unde este age nu ii dam noi o valoare, o sa primeasca una random de la 1 la 100
 var caine = new animal("Lake");
  caine.speed = 3;
  caine.age;
  caine.walk(4);
  arr.push(caine);
  console.log(arr);
 */

 //14.You have an array containing few values. remove the first elment from array
 var arr5 = ["Banana", 1, 7 , 9, "Fruits"];
//shift - remove first element from array;
 arr5.shift();
 console.log(arr5);
 //15.You have an array containing few objects. One of the properties are named 'age'. remove first element where age<5
 /*Array.prototype.removeIf = function(callback) {
 var i = this.length;
 while (i--) {                                     /////////trebuie rezolvata 
 if (callback(this[i], i)) {
 this.splice(i, 1);
 }
 }
};*/

//16.Call an external function used to get the paginated items: page(number) withn items per page

function pagination( array, pageSize, pageNumber){
	--pageNumber;
	return array.splice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}
document.write([1,2,"Pagina 3"," Pagina 4 are mere", 5,6,7,8]);

//17.Define a matrix (2 dimensional array) on n/m and populate the matrix with random values. print the matrix to console
var array5 = [
		[numar(), numar() ],
		[numar(), numar() ]
	];
	function numar(){
		var a = (Math.floor(Math.random() * 5 | 0 ) + 5) 
		return a;
	}
	console.log(array5);

//18.Define a binarry tree and populate the tree
/*function Node(val){
 this.value = val;
 this.left = null;
 this.right = null;
}

Node.prototype.insert = function(val){

}*/

//19.Having an array of numbers, create a function to return the sum of numbers from array. use for
/*var array = [1,4,5,2,3];
var a = 0;
	for(var i in array){
		a += array[i];
	}
console.log(a);*/

//20.Having an array of numbers, create a function to return the sum of numbers from array. Use while

var arr=[1,2,3,4,5];
function total(arr){
	if(!Array.isArray(arr))return;
	let totalNumber = 0, i =-1;
	while(++i < arr.length){
		totalNumber += arr[1];
	}
	return totalNumber;

}
console.log(total(arr));

//28.Having an array of numbers, create a function to return the minimum value from array

var arr = [30,2,4,5,7,200];
function minim(){
	var min = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < min){
			min = arr[i];  
		}
	}
	return min;
}
console.log(minim());

//29.return only the distinct numbers from an array
var a = [1,1,1,2,2,2,3,3,3,4,4,4,];
function onlyUnique(index, value, sort){
	return sort.indexOf(index) === value;
}
var calculate = a.filter(onlyUnique);
console.log(calculate);

//30.Having an array of numbers, return an object containg the number of aparition for every number. E.g.: [1,1] => {1:2} 

var arr=["a","a","a",1,1,1,1,1,"b","b","b"];
var count = {};
arr.forEach(function(i){
	count[i] = (count[i] || 0)+1;
});
console.log(count);




/*//use forEach, map, filter, reduce, some, every   in array

/*var arr = [1,2,3,4];
//forEach
arr.forEach(function(index, indexof){
	console.log(index, indexof);
})
//map - fiecare element din sir sa fie adunat cu 2
var doubeld = arr.map(function(item){
	return item + 2;
})
console.log(doubeld);
//filter - selecteaza numerele pare din array
var parNumber = arr.filter(function(par){
	return par % 2 === 0;
})
console.log(parNumber);*/



//reduce - calculezi un sir de la stanga la dreapta
// prima varianta 
/*arr1=[1,2,3].reduce(function (sirul, cateUnItem) {
		return sirul + cateUnItem;
},0);
console.log(arr1);
// a 2a varianta 
var sir = [1,2,3];
function aduna(primul, alDoilea){
	return primul * alDoilea;
}
total = sir.reduce(aduna);
console.log(total);

//some -  vede daca este adevarata conditia care o pui in sir, daca ai in sir un element mai mic ca si 2 este adevarata
// negativeNumbers
var arr2 = [1,2,3,4,-1,-2,3,].some(function(item){
	return item < 2;
}) ;
console.log(arr2);

//every -pozitiv number
var arr2 = [1,2,3,4,5,6].every(function(item){
	return item >= 1;
});
console.log(arr2);


// find - gaseste ce vrei tu din array si il returneaza

var arr2 = [{id:"Ionela"}, {id:"Ionut"},{id:"Adi"}];

var gaseste = arr2.find(function (item) {
	return item.id === "Adi";
});
console.log(gaseste);
*/





//////////////tema rezolvare problema cu expresii regulare, debug 35   ./// regex101.com 
