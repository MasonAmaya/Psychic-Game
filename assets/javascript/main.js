var alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'o','p',"q","r","t","u","v","w","x","y","z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)]; //this is talking to the var on line 1 var alphabetLetters array and randomly picking 1 of the letters

document.onkeyup = function(event){  //The onkeyup event handler of a document object executes some JavaScript code or function when a key is released over the document object
var userGuess = event.key.toLowerCase();//makes the input to lower case to match the array
if(guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0){ //The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.//check same letter be used twice //pulls from the alphebet array
guessesSoFar[guessesSoFar.length]=userGuess;
guessesLeft--;
}

if(letterToBeGuessed === userGuess){
    wins++; //this adds 1 to the score every time you win
    guessesLeft = 9;//guesses starting at 9 left
    guessesSoFar =[];//this resets the arrray to play again
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random()*alphabetLetters)];//needing to have this random or else its the same letter g will be g
}

}
if(guessesLeft === 0){
    losses++; 
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random()*alphabetLetters)];//
    alert("You Lose");
}
$("#wins").html(wins);
$("#losses").html(losses);
$("#guessesLeft").html(guessesLeft);
$("#guessesSoFar").html(guessesSoFar);//jquery for less typing//#is ID//("#var name").html(this is your html);








