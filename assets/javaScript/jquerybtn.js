
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sounds/push.mp3");

$(document).ready(function() {

createLetterButtons();

});

function createLetterButtons() {

    for (var i=0; i<letters.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("data-letter", letters[i]);
      letterBtn.text(letters[i]);
      $("#buttons").append(letterBtn);

    }

    //Add click event to the letter buttons
    $(".letter-button").on("click", function(){

      audioElement.play();
      console.log(letterBtn);

      
     
                    
  })
};