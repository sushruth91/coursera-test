//function constructors

function Circle(radius){
this.radius=radius;



}

Circle.prototype.getArea = function(){
	return Math.PI * Math.pow(this.radius,2)
};

var myCircle = new Circle(10);
console.log(myCircle);

var otherCircle = new Circle(20);
console.log(otherCircle);

// this keyword

// function test(){
// 	console.log(this);
// 	this.myName="Sushruth";
// }

// test();
// console.log(window.myName);