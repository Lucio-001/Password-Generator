// Assignment code here
var digits =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "D", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "+", "_"]

var confirmLength = "";
var confirmDigits;
var confirmLowerCase;
var confirmUpperCase;
var confirmSymbols;


function generatePassword() {
  var confirmLength = (prompt("Length of password 8 to 128 characters"));
  
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Please enter a valid answer between 8 and 128");
    return generatePassword()
  }

  
  var confirmDigits = confirm("Click ok if you would like (Numbers) in your password.");
  var confirmLowerCase = confirm("Click ok if you would like (Lowercase Letters) in your password.");
  var confirmUpperCase = confirm("Click ok if you would like (Uppercase Letters) in your password.");
  var confirmSymbols = confirm("Click ok if you would like (Special Characters) in your password.");

  while (confirmDigits === false && confirmLowerCase === false, confirmUpperCase === false && confirmSymbols === false) {
    alert("you must chose at least one parameter");
    return generatePassword()
  }
  
  var parameters = []
  if (confirmDigits) {
    parameters = parameters.concat(digits)
  }
  if (confirmLowerCase) {
    parameters = parameters.concat(lowercase)
  }
  if (confirmUpperCase) {
    parameters = parameters.concat(uppercase)
  }
  if (confirmSymbols) {
    parameters = parameters.concat(symbols)
  }

  var builtPassword = ""

  for (var i = 0; i <confirmLength; i++) {
    builtPassword = builtPassword + parameters [Math.floor(Math.random() * parameters)];
  }

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
