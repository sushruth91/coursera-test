// Object literals and this

var literalCircle = {
	radius: 10,
	getArea: function() {
		var self= this;// to overcome this reference to global object
		console.log(this);
var increasedRadius = function(){
	self.radius=20;// set on global object since its a function inside a function

};
    increasedRadius();
	console.log(this.radius);

		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());