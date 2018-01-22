var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       var wins = 0;
       var losses = 0;
       var guessesLeft = 9;
       var guessesSoFar = [];
       var userGuess = null;
       var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

       document.onkeyup = function(event){
           var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
           if(guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
               guessesSoFar[guessesSoFar.length]=userGuess;
               guessesLeft--;
           }
           if(letterToBeGuessed == userGuess){
               wins++;
               guessesLeft = 9;
               guessesSoFar = [];
               letterToBeGuessed = alphabetLetters[Math.floor(Math.random() *alphabetLetters.length)];
           }
           if (guessesLeft == 0) {
           losses++;
           guessesLeft = 9;
           guessesSoFar = [];
           letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
           }

           
       $("#wins").html(wins);
       $("#losses").html(losses);
       $("#guessesLeft").html(guessesLeft);
       $("#guessesSoFar").html(guessesSoFar);
}