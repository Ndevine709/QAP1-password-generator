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

