//IIFE

(function (window){

	var johnGreeter = {};
	johnGreeter.name = "John Snow";
	var greeting = "Hi";
	johnGreeter.sayHi = function(){
		console.log(greeting +johnGreeter.name);
	};
	window.johnGreeter=johnGreeter;

})(window);

