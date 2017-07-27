//IIFE

(function () {

	var sushruthGreeter = {};
	sushruthGreeter.name = "Sushruth";
	var greeting ="Hello";
	sushruthGreeter.sayHello = function(){
		console.log(greeting + sushruthGreeter.name);
	};
	window.sushruthGreeter=sushruthGreeter;

})(window);




