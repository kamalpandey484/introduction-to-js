(function palindrome() {
  'use strict';

  var userInput = prompt("Enter Value for palindrome: ");
  var userInputLowerCase  = userInput.toLowerCase();
  var userArray = userInputLowerCase.split("");
  var reverseArray = userArray.reverse("");
  var userReverse = reverseArray.join("");
	  if(userInputLowerCase == userReverse){
	  	alert("This value is palindrome!");
	  }else{
	  	  	alert("This value is not palindrome!");
	  }
}());
