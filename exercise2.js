function max(a,b){
	if (a > b){
		return a;
	}else if(b > a){
		return b;
	}else{
		return "same same";
	}
}

function maxOfThree(a,b,c){
	if(a > b && a > c){
		return a
	}else if(b>a && b > c){
		return b
	}else if(c >a && c >b){
		return c
	}else{
		return "the greatest number is not unique"
	}
}

function isVowel(a){
	if(a === "a" || a==="e" || a==="i" || a==="o" || a==="u"){
		return true;
	}else{
		return false;
	}
}

function rovarspraket(phrase){
	var x = phrase.split("");
	var empty = []
	x.forEach(function(value){
		if(isVowel(value)|| value ===" "){
			empty += (value);
		}else{
			empty += (value + "o" + value);
		}
	});
 	return empty;
 	
}

console.log(rovarspraket("this is fun"))

function reverse(param){
	return param.split("").reverse().join("");
}