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
    } else if (enter < 8 || enter > 128) {


        enter = parseInt(prompt());

    } else {

        confirmNumber = confirm("Numbers?");
        confirmCharacter = confirm("Characters?");
        confirmUppercase = confirm("Uppercase letters?");
        confirmLowercase = confirm("Lowercase letters?");
    };


    // if and else statements
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }

    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }

    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    };

}














// function writePassword(password) {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
