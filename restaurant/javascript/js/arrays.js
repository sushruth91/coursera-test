// var array = new Array();
// array[0] = "Sushruth";
// array[1] = 20;
// array[2] = function(name){
// 	console.log("Hello " + name)
// };
// array[3] = {
// 	course: "HTML CSS and JS"
// };

// console.log(array);
// console.log(array[0]);
// console.log(array[2]("Santa"));

// Short hand for Arrays 

// var array =[];
// array = ["Sushruth", "John", "Snow"];
// //console.log(array);

// for(var i=0; i< array.length; i++){
// 	console.log("Hello "+array[i]);
// }

// different type of arrays 

var myObj = {
	name: "Sushruth",
	course: "HTML,CSS & JS",
	platform: "Coursera"
};

for (var prop in myObj)
{
	console.log(prop + ":" + myObj[prop]);
}

var names2 = ["Sushruth", "John", "Snow"];
for(var name in names2)
{
	console.log("Hello " + names2[name]);
}