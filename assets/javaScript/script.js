
// start of logic for game
var completter = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guessesleft = 10;
var guessedletters = [];
var wins = 1;
var losses = 1;

//computer picking the number:
completter = alphabet[Math.floor(Math.random() * alphabet.length)];
//logs computer picked letter
console.log(completter);

document.onkeyup = function(event) {
console.log(event);
//display guess on screen, add to existing guesses
guessedletters.push(event.key);
document.getElementById("lettersGuessed").innerHTML = guessedletters;
console.log(guessedletters);

//check to see if same as completter
if (event.key===completter){
	console.log("win");
	document.getElementById("wins").innerHTML = wins ++;
	alert("WHAT!? Inconceivable!");
	resetgame();
}

//subtract one from guesses left
else {
	guessesleft --;
		document.getElementById("guesses-left").innerHTML = guessesleft;
//when guess left gets to zero, games ends		
if (guessesleft === 0){
        console.log("loss");
        document.getElementById("losses").innerHTML = losses ++;
        alert("HAHA! You are out of Guesses!");
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


