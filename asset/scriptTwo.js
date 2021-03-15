//setting veriables
var perams = {
    playName: [],
}

var highScore = document.querySelector("#highScoreBox");
var nameValue = document.querySelector("#nameValue");
var scoreValue = document.querySelector("#placeForScore");
var userName = document.querySelector("#nameBox").value;
var submitButton = document.querySelector("#submit");
var playButton = document.querySelector("#playAgain");

var lastScore; //save The last score that has played

var score = localStorage.getItem("score");
var lastScore = localStorage.getItem("lastScore");

//listens to the button to be clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    console.log({
        lastScore,
        playName: document.getElementById("nameBox").value
      });

      perams.playName[0] = (document.getElementById("nameBox").value);
      console.log(perams.playName)
    
      localStorage.setItem("Name", JSON.stringify(perams.playName)) 
      console.log( JSON.parse(namesFromStorage));
      saveLastScore();
      replaceValues();
   });

// Saves the users pervious score as a sepreate score. 
function saveLastScore() {
    localStorage.setItem("lastScore", score);  
} 

function replaceValues() {
    var namesFromStorage = localStorage.getItem("Name");
    nameValue.innerText = JSON.parse(namesFromStorage); // makes the name appear under the last score
    var lastScore = localStorage.getItem("lastScore");
    highScore.innerText = lastScore; //change score to present score hopefully
}

// fill in the content for the areas that need to be filled in the namevalue is not working
highScore.textContent = lastScore; // score from the last play
var namesFromStorage = localStorage.getItem("Name");
nameValue.innerText = JSON.parse(namesFromStorage); // makes the name appear under the last score
scoreValue.textContent = score;


//play agian button
playButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "quiz.html"
   });