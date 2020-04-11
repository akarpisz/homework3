//var - boolean values for checkbox password options
var generateBtn = document.querySelector("#generate");
var upper = document.getElementById('upper');
var numbers = document.getElementById('numbers');
var characters = document.getElementById('characters');
var lengthPass = document.getElementById('length');


    //math variables
var index; //random number from the function, the index of the character

var value; //single string value that is generated to be included in the password

var result = []; //array containing the single values for the password. if array, .push(), if string, .concat()

//arrays for generating values
var lclet = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//26
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
//26
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//10
var specChar = ["!", "@", "#", "$", "%", "^", "&", "+", "=", "<", ">", "?", "/"];
//13

//array containing the functions used to generate values for the passwords. used to randomize whether the next value is a letter, number, or symbol.
var funcs = [
  randNumL(),
  randNumU(),
  randNumN(),
  randNumS()
];
var using = [randNumL()];

//functions

function usingFuncs() {
  if (upper.checked) {
    using.push(randNumU());
  }; 

  if (numbers.checked) {
    using.push(randNumN());
  };

  if (characters.checked) {
    using.push(randNumS());
  };
}
//generates random number between 0-25, and the number is used as an index value for a lowercase letter.
function randNumL() {
  index = Math.floor(Math.random()*(25-0+1))+0;
  value = lclet[index];
  result.push(value);
};

//generates random number between 0-25, and the number is used as an index value for a upper letter.
function randNumU() {
  index = Math.floor(Math.random()*(25-0+1))+0;
  value = upperC[index];
  result.push(value);
};

//generates random number between 0-25, and the number is used as an index value for a number letter.
function randNumN() {
  index = Math.floor(Math.random()*(9-0+1))+0;
  value = nums[index];
  result.push(value);
};

//generates random number between 0-25, and the number is used as an index value for a symbol.
function randNumS() {
  index = Math.floor(Math.random()*(12-0+1))+0;
  value = specChar[index];
  result.push(value); 
};

//generates a random number, allowing the program to randomly generate a lower, upper, number, or special character.
function randFuncs(using) {
  index = Math.floor(Math.random()*(((using.length) - 1)-0+1))+0;
  using[index]();
};


//generate the password
function generatePassword(lengthPass) {
  for (var i = 0; i < lengthPass; i++) {

  }

};



// Write password to the #password input
function writePassword() {
  result = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result;
};



// Add event listener to generate button

generateBtn.addEventListener("click", function() {
  usingFuncs(); 
  generatePassword();  
  writePassword()
});


