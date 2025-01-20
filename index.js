// QAP1 - Password Generator
// Due Date: January 23rd, 2025
// Author: Noah Devine

// Setting up my arguements for the program
const process = require("process");
const arguements = process.argv.slice(2);

function generatePassword() {
  // Setting up valid characters, default length, and an empty password variable.
  const validChars = "abcdefghijklmnopqrstuvwxyz";
  let length = 8;
  let password = "";

  // Setting up the help arguement. If the user enters either of the options below, will call the displayHelp function w/message.
  if (
    arguements.includes("--help") ||
    arguements.includes("--h") ||
    arguements.includes("help")
  ) {
    displayHelp();
  }

  // Finding the length flag in the arguements array, making sure it has a value after it, parsing the value and running some validation.
  // If the parsed value makes it past validation, the default length value gets replaced with the value the user entered.
  // If nothing is passed for --length, application will use the default length of 8 characters.
  const indexOfLength = arguements.indexOf("--length");
  if (indexOfLength !== -1 && arguements[indexOfLength + 1]) {
    const parsedValue = parseInt(arguements[indexOfLength + 1], 10);
    if (parsedValue < 8 || isNaN(parsedValue)) {
      console.error(
        "Your password must be at least a length of 8, and must be a numerical value. Please type node index.js --help for more info."
      );
      process.exit(0);
    }
    length = parsedValue;
  }

  // For loop to generate a random password based on the default length of 8 or the arguement you passed.
  for (var i = 0, n = validChars.length; i < length; i++) {
    // Appending the random characters to the password variable.
    password += validChars.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Function for the help message. when the user passes --help, --h, or help, the application will call this function and display a helpful message to the user.
function displayHelp() {
  console.log(`
        Usage:
        
        This application will generate a simple randomly generated password for you. 
        The default length of your password is set to 8 characters 

        but you can specify a specific length above 8 characters. 
        Your password length cannot be less than 8 characters and 
        you cannot input a non numerical value for the length.
        
        To start this program, open your terminal and make sure you are in
        the correct directory with the "index.js" and "package.json" file.
        
        from your terminal, run the command "node index.js --length <number>"
        replacing <number> with the amount of characters you want in your password
        
        Example: "node index.js --length 10" will display a randomly generated password that is 10 characters in length.
        
        Flags:
        
        --help, --h, help        Displays this help message

        --length <number>        Set how long you want the password to be, replace <number> with your desired amount
        `);
  process.exit(0);
}

// Calling the generatePassword function and displaying your fresh new password.
let result = generatePassword();
console.log(`your password is: ${result}`);