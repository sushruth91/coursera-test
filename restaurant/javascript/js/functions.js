//FUNCTIONS ARE OBJECTS
// FUNCTIONS ARE First-CLass Data Types

function multiply(x,y){
	return x*y;
}
console.log(multiply(5,3));
multiply.version="v.0.0.12";
console.log(multiply.version);

//Function Factory

function makeMultiplier(multiplier){
	var myFunc = function(x){
		return multiplier*x;
	};
	return myFunc;
}
var multiplyby3 = makeMultiplier(3);
console.log(multiplyby3(30));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

//passing functions as arguments

function doOperation(x, operation){
	return operation(x);
	
}

var result = doOperation(5,multiplyby3);
console.log(result);

var result= doOperation(100,doubleAll)
console.log(result);