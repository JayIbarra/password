//* * * *~ START OF PASSWORD CRITERIA ~* * * * //
  
// This is the start of the prompt for password character criteria
 var specialCharacters = ["!", "?", "#", "$", "%", "&", "*", "+", "@"];

 // Length of password greater than 8 characters and less than 128
 var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  // List of characters A-Z for password. Upper.
  var upperCasedCharacters = ["A", "B", "C", "D" ,"E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // List of characters A-Z for password. Lower.
  var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// * * * *~ END OF PASSWORD CRITERIA SECTION ~* * * * //
// * * * *~ START OF PROMPTS SECTION ~* * * * //


// Beginning of prompts. Prompt for password options
function getPasswordOptions() {

  // Prompt to ask for character count for the password
  var length = parseInt(
    prompt("How many characters would you like to have for your password?")
  );

  // Conditional statement alert a number length is not provided
  if (Number.isNaN(length)) {
  alert("Your password must include a number length!"); 
  return null;
  }

  // Conditional statement alert for if not a number length. Short.
  if (length < 8) {
  alert("Your password will be too short! Please select up to 8 characters."); 
  return null;
  }

  // Conditional statement alert for if not a number length. Long.
  if (length > 128) {
  alert("Your password will be too long! Please select less than 129 character."); 
  return null;
  }

  // Storing the password criteria 
  var hasSpecialCharacters = confirm("Select OK to accept including the password criteria of special characters.");

  // Storing number criteria
  var hasNumericCharacters = confirm("Select OK to accept including the password criteria of numerical characters.");

  // Storing lowercased character criteria
  var hasLowerCasedCharacters = confirm("Select OK to accept including the password criteria of lowercased characters.");

  // Storing uppercased character criteria
  var hasUpperCasedCharacters = confirm("Select OK to accept including the password criteria of uppercased characters.");

  // Conditional statement for password 
  if
    (hasSpecialCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false)
    
    {
    alert("You have to select one character for the password criteria.");
    return null;
    }

// * * * *~ END OF PROMPTS SECTION ~* * * * //
// * * * *~ START OF STORAGE ARRAYS SECTION ~* * * * //

// Storing the data
var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  }; 

return passwordOptions; 
}

// Random integer element
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr(randIndex);

  return randElement;
}

// Generate password
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  // Storing the special characters options
  var possibleCharacters = [];

  // Garanteeing that there will be a variety of special characters used
  var guaranteedCharacters = [];

  // If there's not an option, exit the password generator
  if (options) return null;

  // Conditional statement = special characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacter.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement - numbers
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(NumericCharacters);
    guaranteedCharacters.push(getRandom(NumericCharacters));
  }

  // Conditional statement - lowercased
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Conditional statement - uppercased
  if (options.hasUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // Password length options
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }
  
  // Use one of a character
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Generate password
  return result.join('');
}

// * * * *~ CLASS CODE SECTION ~* * * * //

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);