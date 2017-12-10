/*Array = un sir*/

//First array
var familyNames = new Array("Ionela","Ionut","Dumitru","Mother");

document.getElementById("firstArray").innerHTML = familyNames;// asa legam cu html, prin id sau clase

//Length
var numberFamily = new Array("Ionela","Ionut","Dumitru","Mother");
document.getElementById("secondArray").innerHTML = numberFamily.length;


//prototype - facem o functie si o legam cu prototype, iar noi putem refolosi functia respectiva la orice alt sir 
//concat - concatenare
var horgos = " Salut ce faci ";
var relu = " Relu?";
var b = horgos.concat(relu);
document.getElementById("firstId").innerHTML = b;

//copyWithin() - are 2 parametri, copiaza din sir

//every()

var numbers = [ 20,22,17,30];

function suntmajor(){
	return ani >= 18;
}
function myFunction() {
	document.getElementById("function1").innerHTML = numbers.every(suntmajor);
}

/*...*/