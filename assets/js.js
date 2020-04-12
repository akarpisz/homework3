//Variables
var generateBtn = document.querySelector("#generate");
var lowerCheckBox = document.getElementById('lower');
var upperCheckBox = document.getElementById('upper');
var numbersCheckBox = document.getElementById('numbers');
var charactersCheckBox = document.getElementById('characters');
var lengthPass = document.getElementById('length').value

//new password charcters array
var newPass = [];

//array for possible characters
var using= [];
var len;
//var index;

//arrays of values for the new password
var lowerCLet = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specChar = ["!", "@", "#", "$", "%", "^", "&", "+", "=", "<", ">", "?", "/"];



//add possible characters to the "using" array
function possibleCharacters() {
    if (lowerCheckBox.checked) {
         using = using.concat(lowerCLet);
    };

    if (upperCheckBox.checked) {
        using = using.concat(upperCLet);
    };

    if (numbersCheckBox.checked) {
        using = using.concat(numbers);
    };

    if (charactersCheckBox.checked) {
        using = using.concat(specChar); 
    };

    len = using.length - 1
};


  //generate the password //Math.round
function generatePassword() {
    for (var i = 0; i < lengthPass; i++) { 
        var index = Math.floor(Math.random()*(((len - 0)+1))+0);
        var newvalue = using[index];
        newPass.push(newvalue);
    };
  
  };

// Write password to the #password input
function writePassword() {
    //newPass = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPass.join("");
  };

// Add event listener to generate button

generateBtn.addEventListener("click", function() {
    possibleCharacters();
    generatePassword();  
    writePassword();
    newPass = [];
  });
