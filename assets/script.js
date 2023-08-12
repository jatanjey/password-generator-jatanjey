var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Define character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  // Ask user for password criteria
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Check password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Check at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // Combine selected character sets
  var charSet = "";
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumeric) charSet += numericChars;
  if (includeSpecial) charSet += specialChars;

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);