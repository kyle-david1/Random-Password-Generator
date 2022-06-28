




// function userPreferences() {
//   var pwdLength = parseInt(prompt("how many characters?"))
//   console.log(pwdLength);
//   }
//  if (pwdLength >8 && pwdLength <128){
//     alert("must be at least 8 characters");
//  }
 



  
  // var userOptions = {
  //   wantsUpper: uppercase
  // }
  // console.log(userOptions)
  // return userOptions;
















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  let lowercase = window.confirm("do you want lowercase?");
    console.log(lowercase);
  let uppercase = window.confirm("do you want uppercase?");
    console.log(uppercase);
  let numbers = window.confirm("do you want numbers?");
    console.log(numbers);
  let specialCharacters = window.confirm("do you want special characters?");
    console.log(specialCharacters);
  
  
  
  
  
  
  
  
  
  
  userPreferences()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
  // your Code goes here 

  // Pseudocode


  prompt  = length(8 < 128) 
    let pwdLength = prompt("how many characters?");
    console.log(pwdlength)

      // console.log(pwdLength);
  
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
  
  
  
// return password;


// }
 

