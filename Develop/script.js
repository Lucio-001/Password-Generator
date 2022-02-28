// Assignment code here

var digits =  "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFDHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()+_";

var confirmLength = "";
var confirmDigits;
var confirmLowerCase;
var confirmUpperCase;
var confirmSymbols;


function generatePassword() {
  var confirmLength = (prompt("Length of password 8 to 128 characters"));
  
  while(confirmLength <= 8 || confirmLength >= 128 || isNaN(confirmLength)) {
    alert("Please enter a valid answer between 8 and 128");
    return generatePassword();
  }
  
  var parameters = "";

  var confirmDigits = confirm("Click ok if you would like (Numbers) in your password.");
  if ( confirmDigits ) {
    parameters = parameters.concat(digits);
  }
  var confirmLowerCase = confirm("Click ok if you would like (Lowercase Letters) in your password.");
  if ( confirmLowerCase ) {
    parameters = parameters.concat(lowercase);
  }
  var confirmUpperCase = confirm("Click ok if you would like (Uppercase Letters) in your password.");
  if ( confirmUpperCase ) {
    parameters = parameters.concat(uppercase);
  }
  var confirmSymbols = confirm("Click ok if you would like (Special Characters) in your password.");
  if ( confirmSymbols ) {
    parameters = parameters.concat(symbols);
  }

  while (confirmDigits === false && confirmLowerCase === false && confirmUpperCase === false && confirmSymbols === false) {
    alert("you must chose at least one parameter");
    return generatePassword();
  }

  var builtPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    var random = Math.floor(Math.random() * parameters.length)
    var result = parameters[random];
    var builtPassword = builtPassword.concat(result);
    
    console.log(result)
  }

  return (builtPassword);

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
