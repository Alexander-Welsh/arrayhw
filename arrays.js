var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

var findGreat = numbers.reduce(function(a,b){
	if (a>b){
		return a;
	} else {
		return b;
	}
});

var findString = strings.reduce(function(a,b){
	if(a.length >b.length){
		return a;
	} else{
		return b;
	}
});

var findEven = numbers.filter(function(value){
	return value%2===0;
})

var findOdd = numbers.filter(function(value){
	return value%2!==0;
})


for (var i=0;i<strings.length; i++){
	if(strings[i].indexOf("is") != -1){
		console.log(strings[i])	;
	}
}


var findIS = strings.filter(function(value){
	if(value.indexOf("is") != -1){
		return true
	
	}else{
		return false
	}
})
var newArray = numbers.concat(strings);

var findJS = instructors.filter(function(value){

		if(value.teaches === "JavaScript"){
			return true;
		}else{
			return false;
		}


});

var byName = findJS.slice(0);
byName.sort(function(a,b) {
    var x = a.firstname.toLowerCase();
    var y = b.firstname.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log(byName);


