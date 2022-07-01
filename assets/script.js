var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "/[!@#$%^&*()_+\-=\[\]{};"
var allChars = [];


  var confirmLength = function(item) {
    if (item<8){
      passwordLength = window.prompt("Must be greater than 8")
      confirmLength(passwordLength);
      // do for all parameters 
    }
  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
let password = ""
let passwordLength = window.prompt("Password must be between 8 and 128 Characters")
confirmLength(passwordLength);
let lowercase = window.confirm("do you want lowercase?");
  console.log(lowercase);
  if (lowerChars){
    allChars.concat(lowerChars);
  }
let uppercase = window.confirm("do you want uppercase?");
  console.log(uppercase);
  if (upperChars){
    allChars.concat(upperChars);
  }
let numbers = window.confirm("do you want numbers?");
  console.log(numbers);
  if (numberChars){
    allChars.concat(numberChars);
  }
let specialCharacters = window.confirm("do you want special characters?");
  console.log(specialCharacters);
  if (specialChars){
    allChars.concat(specialChars);
  }

  // do for loop here add random letters to password string
  // how to take a random value from an array 
  // this index from the array 
  return password
}








  
  // list of numbers, special characters, uppercase and lowercase
    // array 
    // combine arrays into one array (look at math link 
    // Random choose characters 
    // create a string set equal to password var
    // array method to check if something is in an array (array.length?)
  


  // create a string set equal to password var
    // array method to check if something is in an array (array.length?)
  
  
  
  
  
 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






      // console.log(pwdLength);
  
  
  // function to validate user answers 
  // if and equality operators 
    // if(numbers){
      // else then(letters)
    // }
  
  // list of numbers, special characters, uppercase and lowercase
    // array 
    // combine arrays into one array (look at math link 
    // Random choose characters 
    // create a string set equal to password var
    // array method to check if something is in an array (array.length?)
  
  
    // generate random password 
  // return that password 
  
  
  
// return password;


// }

