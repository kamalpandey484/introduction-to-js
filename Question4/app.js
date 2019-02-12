(
function copyObjectData(){
	var myDetails = {
		name: prompt("Enter your name:"),
		age: prompt("Enter your age:"),
		location: prompt("Enter your location:"),
		college: prompt("Enter your college:"),
		course: prompt("Enter your course:"),
	}

	console.log("Original object details: ", myDetails);

	var copyObject = Object.assign({},myDetails);
	console.log("New Object Value: ",copyObject);

}());