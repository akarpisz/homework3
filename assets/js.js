//Welcome
alert("Welcome!");
alert("We'll now begin.");

//Variables Declared

    //Asks for a length of the new password -integer
var length = prompt("How long should your new password be?");

    //confirms the user wants capital letters included
var capLetters = confirm("Include capital letters?");

    //confirms whether or not the password will contain special characters - boolean
var specChar = confirm("Include special characters? (!@#$%^&:/?<> etc.)");

    //confirms whether or not the password will contain numbers
var nums = confirm("Include numbers?");
    //var randNum = math.random

    //Creates a random number to choose a function to run (to create a capital letter, number, or symbol)
var randNumFuncs;

    //Result of calculating the character, based on the random number
var result = [];

//Arrays containing possible characters for the password
var values = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "+", "=", "<", ">", "?", "/"];
/*
0-25 = letters
26-51 = Capital
52-61 = numbers
62-74 = symbols
*/
//functions
    //produces random number(s)
function randNumL() {
    result = Math.floor(Math.random()*(25-0+1))+0;
};

function randNumC() {
    result = Math.floor(Math.random()*(51-26+1))+26;
};

function randNumN() {
    result = Math.floor(Math.random()*(61-52+1))+52;
};

function randNumS() {
    result = Math.floor(Math.random()*(74-62+1))+62;
};

function randNumFuncs() {
    result = Math.floor(Math.random()*(3-0+1))+0;
}

var funcs = 
[
    randNumL(),
    randNumC(),
    randNumN(),
    randNumS()
];

function gen(length) {
    if (specChar && nums && capLetters) {
        while result.length < length {


        }
    } else if ()


};



//if statements to determine which loops will run






