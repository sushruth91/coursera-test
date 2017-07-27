// // create object
// var company = new Object();
// company.name="Facebook";

// company.ceo = new Object();
// company.ceo.lastName="Zuckerberg";
// company.ceo.favColor="blue";
// console.log(company);

// console.log("Company CEO name is : " + company.ceo.lastName);

// console.log(company["name"]); //bracket notation

// company["stock of company"]=110; //set

// console.log("Stock price of company is : "+ company["stock of company"]);

//better way of creating objects

var facebook = {
	name: "Facebook",
	ceo:{
		favColor: "Blue",
		firstName: "Mark",
		lastName: "Zuckerberg"
	},
	"stock of company": 110
};
console.log(facebook);

/*var school = {
	name: "ST.PAuls",
	subjects:{
	    sub1: "Maths",
		sub2: "Physics"
	},
	address: "JP NAGAR"
};
console.log(school);*/