// Assignment Code
var generateBtn = document.querySelector("#generate");
// variable for 8 character string
var length = 8;
// variable numbers to be used
var numbers = '0123456789';



function generatePassword() {
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
