var scoreValue = document.querySelector("#placeForScore");
var userName = document.querySelector("#nameBox");
var highScore = document.querySelector("#highScoreBox");
var submitButton = document.querySelector("#submit");
var lastScore; 
var lastPlayer;

var score = localStorage.getItem("score");


submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("nameBox").innerHTML = localStorage.getItem("namebox");
    saveLastScore();
});

function saveLastScore() {
    localStorage.setItem("lastScore", score)
}

document.getElementById("nameBox").innerHTML = localStorage.getItem("namebox");

scoreValue.textContent = score;
highScore.textContent = lastScore;