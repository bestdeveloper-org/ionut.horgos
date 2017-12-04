/*String functions*/
var str ="Primul string meu string";
	//charAt() - arata litera de pe pozitia 1;
	var ret = str.charAt(1);
	console.log(ret);

	//charCodeAt - arata codul de la litera care este pe pozitia 0
	var res = str.charCodeAt(0);
	console.log(res);

	//concat() - concateneaza 2 variabile, adica le impreuneaza
	var str2 = " reusit";
	var str3 = str.concat(str2);
	console.log(str3);

	//endsWith() 

	var n = str.endsWith(" string");
	console.log(n); //true

	//fromCharCode -Convert a Unicode number into a character:

	//includes() - searchvalue 	Required. The string to search for

	var a = str.includes(' Primul');
	console.log(a);

	//indexOf()- searchvalue 	Required. The string to search for
	var b = str.indexOf("m");
	var c = str.lastIndexOf("string");
	console.log(b);
	console.log(c);

	//localeCompare -1: daca ii str1 si +1 daca este str2 si 0 daca au acelasi continut
	var str1 = "cf";
	var str2 = "cf";
		var n = str1.localeCompare(str2);
		console.log(n);

	//length
	var a = str.length;
	console.log(a);

	//split - are 2 parametri split("",3);
	var str = "How are you doing today?";
	var res = str.split(" ",2);
	 console.log(res);