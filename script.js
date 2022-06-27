// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // your Code goes here 

  // Pseudocode


  // prompt  = length (8-128 characters)
    // let pwdLength = prompt("how many characters?");
    // console.log(pwdlength)
  
  // confirm - lowercase confirm, uppercase, numberic, special characters
    // let numbers = confirm("do you want numbers?)
    // console.log(numbers);
  // create var to hold answer to prompt/confirm 
  
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
  
  
  
  return password;


}
 

