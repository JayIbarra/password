 //*~ PASSWORD CRITERIA ~* //
  
 // This is the start of the prompt for password criteria
 var passwordCriteria = [Select '!', '?', '#', '$', '%', '&', '*', '+', '@'];

 // Length of password needs to be 8 characters, but less than 128
 var numberCriteria = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

// Include list of characters A-Z for password
var characterCriteria = ["A, B, C, D ,E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];

// Confirm if you do want to have upper,lower, and/or special character or do not 

// *~ END OF PASSWORD CRITERIA SECTION ~* //
// *~ PROMPTS SECTION ~* //


// Prompt for password options
function passwordOptions() {

  // Prompt to ask for character count 
  var length = parseInt(
    prompt("How many characters would you like to have for your password?");
  );

// Conditional statement for number length
if (Number.isNaN(length))


// Conditional statement for password 
if (
  (userTurn === 'lowercase' && computerTurn == 'valid') ||
  (userTurn === 'uppercase' && computerTurn == 'valid') ||
  (userTurn === 'numeric' && computerTurn == 'valid') ||
  (userTurn === 'special characters' && computerTurn == 'valid')
){

// *~ END OF PROMPTS SECTION ~* //
// *~ CLASS CODE SECTION ~* //

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

// *~ END OF CLASS CODE SECTION ~* //



 

   passwordValid++;
   alert("Here is your password " + passwordValid)

   else {
     alert("Please enter ")
   }
 )
