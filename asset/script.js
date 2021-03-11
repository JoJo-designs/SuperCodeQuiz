//making sure javascript file is attacted to quiz.html
console.log("Here is the page. The java script is connected");


var timeBox = document.querySelector("#timeBox");
var questionContain = document.querySelector("#questionContainer");

var qestion = document.querySelector("#question");
var buttonClick = document.querySelector ("button");
var answerA = document.querySelector("#answerOne");
var answerB = document.querySelector("#answerTwo");
var answerC = document.querySelector("#answerThree");
var answerD = document.querySelector("#answerFour");

var score = 0;
var useName;
var timeInterval;


//funtion that runs the timer
function countDown() {
    var maxTime = 10;

  var timeInterval = setInterval(function () {
    timeBox.textContent = maxTime;
    maxTime --;

    if ( maxTime === -1){
      clearInterval(timeInterval);
      console.log("Game Over")
      window.location.href = "end.html"
    }
  }, 1000);
}

// function ends the game when a question is answered or at least it should.
function endGame() {
    window.location.href = "end.html"
    console.log("Game Over")
    clearInterval(timeInterval);
    
}

//buttonClick.addEventListener("onclick", function() {});

//Question one
function askQuestionOne() {
        qestion.textContent = "What is 'Something'?";
        answerA.textContent = "Everything";
        answerB.textContent = "Nothing";
        answerC.textContent = "Anything";
        answerD.textContent = "None of the above";
   buttonClick.addEventListener("click", function() { });
}

countDown();
askQuestionOne();
