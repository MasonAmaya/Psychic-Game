var alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'o','p',"q","r","t","u","v","w","x","y","z"]

var wins = 0;
var loses = 0;
var guessesLeft = 100;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)]; //this is talking to the var on line 1 var alphabetLetters array and randomly picking 1 of the letters

document.onkeyup = function(event){  //The onkeyup event handler of a document object executes some JavaScript code or function when a key is released over the document object
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
if(guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0){ //The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
guessesSoFar[guessesSoFar.length]=userGuess;
guessesLeft--;
}
}






