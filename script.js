// Assignment Code
var generateBtn = document.querySelector("#generate");
// variable for 8 character string
var length = 8;
// variable letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// variable numbers to be used
var numbers = '0123456789';
// variable special characters to use
var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';



// making questions to add character and how many between 8 & 128
function generatePassword() {
   
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  
    if (!enter) {
        alert("This needs a value");
    }


function writePassword(password) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
