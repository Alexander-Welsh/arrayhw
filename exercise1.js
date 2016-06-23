function sum(a,b){
	return a + b;
}

function avg(a,b,c){
	return (a+b+c)/3
}

function getLength(str){
	return str.length;
}

function greaterThan(a,b){
	if(b>a){
		return true;
	}else{
		return false;
	}
}

function greet(name){
	return "Hello, "+ name + "!";
}
function madlib(a,b,c,d){
	return a + b + c + "likes cheese" + d;
}


// function reverse(param){
// 	return param.split("").reverse().join("");
// }
// console.log(reverse('alex'));

// // var arr = [1,2,3,4,5,6,7]

// //REDUCE
// var newVal = arr.reduce(function(a,b){
// 	//return a+b
// 	return {sum: a.sum +b};},
// 	{sum: 0});
// console.log(newVal);



// arr.forEach(function(value){
// 	console.log(value);
// });

// console.log(arr.reverse());


// var newArr = arr.filter(function(value){
// 	if (value.length >= 5){
// 		return true;
// 	}else{
// 		return false;
// 	}

// });

// console.log(newArr);

// var newArray = arr.map(function(value){
// 	return {name: value}

// })
// console.log(newArray);