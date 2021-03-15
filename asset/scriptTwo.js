//setting veruables
var perams = {
    playName: [],
}

var highScore = document.querySelector("#highScoreBox");
var nameValue = document.querySelector("#highScoreName");
var scoreValue = document.querySelector("#placeForScore");
var userName = document.querySelector("#nameBox").value;
var submitButton = document.querySelector("#submit");

var lastScore; //save The last score that has played
var playName = document.getElementById("nameBox").value  

var score = localStorage.getItem("score");
var lastScore = localStorage.getItem("lastScore");
var lastPlayer = localStorage.getItem("Name");

//listens to the button to be clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log({
        lastScore,
        playName: document.getElementById("nameBox").value
      });
      perams.playName.push(document.getElementById("nameBox").value);
      console.log(perams.playName)
      localStorage.setItem("Name", perams.playName)
    saveLastScore();
    });

// Saves the users pervious score as a sepreate score. 
function saveLastScore() {
    localStorage.setItem("lastScore", score);  
// The last score will change when the user clicks thet submit button
} 

// fill in the content for the areas that need to be filled in
highScore.textContent = lastScore; 
nameValue.textContent = perams.playName;
scoreValue.textContent = score;

// need to collect the name from the user and set it to local storage
// under the name lastPlayer

