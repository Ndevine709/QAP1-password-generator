// QAP1 - Password Generator
// Due Date: January 23rd, 2025
// Author: Noah Devine

const process = require("process");
const arguements = process.argv.slice(2);

function generatePassword() {
  // Setting up valid characters, default length, and an empty password variable.
  let validChars = "abcdefghijklmnopqrstuvwxyz";
  let length = 8;
  let password = "";

  if (
    arguements.includes("--help") ||
    arguements.includes("--h") ||
    arguements.includes("help")
  ) {
    displayHelp();
  }

  if (arguements.includes("--numbers")) {
    validChars += "0123456789";
  }

  // Finding the length flag, making sure it has a value after it, parsing the value and running some validations.
  // If the parsed value makes it past validation, the default length value gets replaced with the value the user entered.
  // If nothing is passed for --length, application will use the default length of 8 characters.
  const indexOfLength = arguements.indexOf("--length");
  if (indexOfLength !== -1 && arguements[indexOfLength + 1]) {
    const parsedValue = parseInt(arguements[indexOfLength + 1], 10);
    if (parsedValue < 8 || isNaN(parsedValue)) {
      console.error(
        "Your password must be at least a length of 8, and must be a numerical value. Please type node index.js --help for usage info."
      );
      process.exit(0);
    }
    length = parsedValue;
  }

  // For loop to generate a random password based on the default length of 8 or the --length flag you passed.
  for (var i = 0, n = validChars.length; i < length; i++) {
    // Appending the random characters to the password variable.
    password += validChars.charAt(Math.floor(Math.random() * n));
  }

  // below if statement will check and see if --numbers was passed as a flag and if the password (rare chance) does not contain any numbers,
  // it will remove the final character of the password and replace it with a random number to.
  if (arguements.includes("--numbers") && !/\d/.test(password)) {
    let numbers = "0123456789";
    const randomNumber = numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
    password = password.substring(0, password.length - 1) + randomNumber;
  }
  return password;
}

// Function for the help message. when the user passes --help, --h, or help, the application will call this function and display a helpful message to the user.
function displayHelp() {
  console.log(`
        Usage:
        
        This application will generate a simple randomly generated password for you. 
        The default length of your password is set to 8 characters.

        But you can specify a specific length above 8 characters. 
        Your password length cannot be less than 8 characters and 
        you cannot input a non numerical value for the length.
        
        To start this program, open your terminal and make sure you are in
        the correct directory with the "index.js" and "package.json" file.
        
        from your terminal, run the command "node index.js --length <number>"
        replacing <number> with the amount of characters you want in your password
        
        Example: "node index.js --length 10" will display a randomly generated password that is 10 characters in length.

        You may also include numbers within your password using the --numbers flag.

        Example: "node index.js --numbers" will generate a default 8 character password with numbers included.

        Example: "node index.js --length 10 --numbers" will generate a password with a length of 10 characters
        with numbers and lowercase letters.
        
        Flags:
        
        --help, --h, help        Displays this help message.

        --length <number>        Set how long you want the password to be, replace <number> with your desired amount.

        --numbers                Adding this flag will allow your password to contain random numbers.
        `);
  process.exit(0);
}

// Calling the generatePassword function and displaying your fresh new password.
let result = generatePassword();
console.log("");
console.log(`Your password is: ${result}`);
console.log("");
