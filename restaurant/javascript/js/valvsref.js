//copy by value vs referrence

var a=7;
var b=a;
console.log("a: "+a);
console.log("b: "+b);

b=5;
console.log("Value after b change");
console.log("a: "+a);
console.log("b: "+b);

	var a={ x:7 };
	var b=a;

	console.log(a);
	console.log(b);

	b.x = 5;
	console.log("Value after b update:");
	console.log(a);
	console.log(b);

	//pass by reference vs pass by value

	function changePrimitive(primValue){
		console.log("Inside changePrimitive");
		console.log("before:");
		console.log(primValue);

		primValue=10;
		console.log("after:");
		console.log(primValue);

	}

	var value =7;
	changePrimitive(value);
	console.log("Outside changePrimitive , Orginal val");
	console.log(value);


	function changeObject(objValue){
		console.log("Inside changeObject");
		console.log("before:");
		console.log(objValue);

		objValue.x=9;
		console.log("after:");
		console.log(objValue);

	}

	var value ={x:7};
	changeObject(value);
	console.log("Outside changeObject, Org Val");
	console.log(value);
