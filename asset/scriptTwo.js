//setting veruables 
var scoreValue = document.querySelector("#placeForScore");
var userName = document.querySelector("#nameBox").value;
var highScore = document.querySelector("#highScoreBox");
var submitButton = document.querySelector("#submit");
var lastScore; 
var lastPlayer; // save the name the last user.

var score = localStorage.getItem("score");
var lastScore = localStorage.getItem("lastScore");


//listens to the button to be clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("nameBox").innerHTML = localStorage.getItem("namebox");
    saveLastScore();
});


// Saves the users perivose score as a sepreate score. 
function saveLastScore() {
    localStorage.setItem("lastScore", score)
}

// fill in the content for the areas that need to be filled in
highScore.textContent = lastScore; // display the last user name beside the last score
scoreValue.textContent = score;

// need to collect the name from the user and set it to local storage