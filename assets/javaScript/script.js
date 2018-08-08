//sounds for the game
var win = new Audio('assets/sounds/no.mp3');
var lose = new Audio('assets/sounds/laugh.wav');
var push = new Audio('assets/sounds/push.mp3');
//variables used within the game
//empty variable for completter
var completter = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesleft = 10;
var guessedletters = [];
var wins = 1;
var losses = 1;
//creates buttons on screen
createLetterButtons();

// start of logic for game
//computer picking the random letter from alphabet array
completter = alphabet[Math.floor(Math.random() * alphabet.length)];
//logs computer picked letter
console.log(completter);
//keyboard event registering letter pressed on keyboard
document.onkeyup = function(event) {
//console log the key pressed
console.log(event);
//display guess on screen, add to existing guesses
guessedletters.push(event.key);
//adds guessed letter to screen
document.getElementById("lettersGuessed").innerHTML = guessedletters;
console.log(guessedletters);
//compare event.key with completter, if it is the same as the completter the following happens
if (event.key===completter){
	//simply says win in console
	console.log("win");
	//if user guesses letter correctly, 1 point (wins ++) is added to the wins div
	document.getElementById("wins").innerHTML = wins ++;
	//win sound is played from variable above
	win.play();
	//game is reset by the resetgame function (below)
	resetgame();
}

//if the "if" statement is not ture, we run the following "else"
else {
	//subtract 1 from the guessesleft variable set to 10 guesses above
	guessesleft --;
	//we get the "guesses-left" ID on our HTML and apply the above
		document.getElementById("guesses-left").innerHTML = guessesleft;
//when guess left gets to zero, games ends
//the following is checked, is guessesleft = 0?	if so, run the following	
if (guessesleft === 0){
	//console.log "loss"
		console.log("loss");
		//add 1 to the "losses" ID on our HTML
		document.getElementById("losses").innerHTML = losses ++;
		//play the lose sound var from above
		lose.play();
		//game is reset by the resetgame function (below)
         	resetgame();
         }
}

};

//function to reset game after win/loss
function resetgame(){
	completter = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(completter);
	guessesleft=10;
	guessedletters=[];
	document.getElementById("lettersGuessed").innerHTML = guessedletters;
	document.getElementById("guesses-left").innerHTML =  guessesleft;
}


$(document).ready(function() {
//Add click event to the letter buttons
$(".letter-button").on("click", function(){
  push.play();
  console.log(this);       
})
});



//creates the buttons on the screen
function createLetterButtons() {
    for (var i=0; i<alphabet.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("data-letter", alphabet[i]);
      letterBtn.text(alphabet[i]);
      $("#buttons").append(letterBtn);
    }
};



