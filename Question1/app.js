(function interest() {
  'use strict';
	var amount = prompt("Enter Amount: ");
	if (amount!=null) {
	var interestRate = prompt("Enter Rate of interest: ");
		if (interestRate!=null) {	
		var yearNumber = prompt("Enter Number of years: ");
		 	if(yearNumber!=null){
		 	var SimpleInterest = amount*interestRate*yearNumber;
		 	alert("Simple interest is: "+SimpleInterest);
			console.log(SimpleInterest);
	}}}
}());
