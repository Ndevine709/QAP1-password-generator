# QAP 1 - Password Generator
- The purpose of this application is to generate a password for the user with a default length of 8 characters and using all lowercase letters.
- The user can use flags such as --length <number> and --numbers to make changes to the password such as specifying a specific length of their password or using a flag to make the application generate the password with lowercase letters and numbers.

## How to use the program
1. Download the index.js file and package.json file from this repo to your local machine.
2. Open VSC (or your program of choice) and make your way to the directory that contains your newly downloaded index.js and package.json files.
3. Once you are in the correct directory, open a new CLI terminal (command line interface)
4. In your terminial, type node index.js --help to get specific info on how to run the program and what flags can be used

### Examples:
- If you run node index.js, the program will generate a password for you with a default length of 8 lowercase characters.
- If you run node index.js --length 10, the program will generate a 10 character lowercase password for you.
- If you run node index.js --number, the program will generate a default 8 character length password for you that contains both numbers and lowercase letters.
- If you run node index.js --length 10 --numbers, the program will generate a 10 character password containing both lowercase letters and numbers.

  ### Help message
  Below you will find the help message that will display when running node index.js --help:

  Usage:
        
  - This application will generate a simple randomly generated password for you. 
    The default length of your password is set to 8 characters.

  - But you can specify a specific length above 8 characters. 
    Your password length cannot be less than 8 characters and 
        you cannot input a non numerical value for the length.
        
  - To start this program, open your terminal and make sure you are in
    the correct directory with the "index.js" and "package.json" file.
        
  - from your terminal, run the command "node index.js --length <number>"
    replacing <number> with the amount of characters you want in your password
        
  - Example: "node index.js --length 10" will display a randomly generated password that is 10 characters in length.

    You may also include numbers within your password using the --numbers flag.

  - Example: "node index.js --numbers" will generate a default 8 character password with numbers included.

  - Example: "node index.js --length 10 --numbers" will generate a password with a length of 10 characters
    with numbers and lowercase letters.
        
        Flags:
        
        --help, --h, help        Displays this help message.

        --length <number>        Set how long you want the password to be, replace <number> with your desired amount.

        --numbers                Adding this flag will allow your password to contain random numbers.
