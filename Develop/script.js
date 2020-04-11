//var - boolean values for checkbox password options
var upper = document.getElementById('upper');
var numbers = document.getElementById('numbers');
var characters = document.getElementById('characters');
var length = document.getElementById('length');
var lenDisplay = document.getElementById('lenDisplay')
    //*note to self: use ".checked" for boolean values*
var value; //single value that is generated
var result = ""; //array containing the single values for the password


// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for generating values
var lclet = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];

var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specChar = ["!", "@", "#", "$", "%", "^", "&", "+", "=", "<", ">", "?", "/"];

//array containing the functions used to generate values for the passwords. used to randomize whether the next value is a letter, number, or symbol.
var funcs = [
  randNumL(),
  randNumU(),
  randNumN(),
  randNumS()
];
var using = [];

//functions

//generates random number between 0-25, and the number is used as an index value for a lowercase letter.
function randNumL() {
  result = Math.floor(Math.random()*(25-0+1))+0;
};

//generates random number between 0-25, and the number is used as an index value for a upper letter.
function randNumU() {
  result = Math.floor(Math.random()*(25-0+1))+0;
};

//generates random number between 0-25, and the number is used as an index value for a number letter.
function randNumN() {
  result = Math.floor(Math.random()*(9-0+1))+0;
};

//generates random number between 0-25, and the number is used as an index value for a symbol.
function randNumS() {
  result = Math.floor(Math.random()*(12-0+1))+0;
};

//generates a random number, allowing the program to randomly generate a lower, upper, number, or special character.
function randNumFuncs() {
  result = Math.floor(Math.random()*(3-0+1))+0;
};


function options() {

};

//generate the password
function generatePassword(length) {


};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};



// Add event listener to generate button

generateBtn.addEventListener("click", function() {
  options(); 
  generatePassword();  
  writePassword()
};




