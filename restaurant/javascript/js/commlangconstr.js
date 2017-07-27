//**String concatenation
var string = "Hello";
//string += " World"; //also leagal
 string= string + " World";
console.log(string + "!");


//** Regular Math operations
console.log((5+4)/3);
console.log(undefined/4);//NaN -- not a number error
function test1(a)
{
	console.log(a/5);
} 
test1(); //NaN


// ** Equality

var x=4, y=4;
if (x==y)
{
	console.log("x=4 is eual to y=4");
}

var x="4";

if (x==y)
{
	console.log("x=4 is eual to y=4");
}

//** Strict Equality

if (x===y)
{
	console.log("strict x=4 is equal to y=4");
}
else 
{
	console.log("strict x=4 is not equal to y=4");
}

//** if statement ( what all is considered false)
if (false || null || undefined || "" || 0 || NaN )
{
 console.log("This like won't even execute");

}
else
{
	console.log("All false");
}

//** if statement ( what all is considered true)
if (true && "hello" && 1 && -1 && "false" )
{
 console.log("All true");

}

//**for loop

var sum=0

for (var i = 0; i < 10; i++) {
	console.log(i);
	sum=sum+i;
}
console.log("The sum of 0 thriugh 9 is "+ sum)
