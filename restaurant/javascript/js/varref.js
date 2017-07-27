var message = "In Global";
console.log("global:message="+message);

var a = function (){
	var message ="Inside a"
    console.log("a:message="+message);
    function b() {
	console.log("b:message="+message);
}
    b();
}


a();