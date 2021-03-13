//making sure javascript file is attacted to quiz.html
console.log("Here is the page. The java script is connected");


var timeBox = document.querySelector("#timeBox");
var questionContain = document.querySelector("#questionContainer");

var qestion = document.querySelector("#question");
var buttonClick = document.querySelector("button");
var answerA = document.querySelector("#answerOne");
var answerB = document.querySelector("#answerTwo");
var answerC = document.querySelector("#answerThree");
var answerD = document.querySelector("#answerFour");

var score = 0;
var useName;
var timeInterval;
var element;
var questions = ["What is 'Something'?", "What is 'Nothing'?"];
var qestionOne = ["Everything", "Nothing", "Anything", "None of the above"]



//funtion that runs the timer
function countDown() {
    var maxTime = 100;

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

//add eventlistener to all the buttons

questionContain.addEventListener("click", function(event) {
    element = event.target;
    if (element.matches("button")){
        console.log(element.textContent)
        console.log(element) 
    }
    checkQuestion ();
});

//Question one I need to make a event listener work.
function askQuestionOne() {
  qestion.textContent = "What is 'Something'?";
  answerA.textContent = "Everything";
  answerB.textContent = "Nothing";
  answerC.textContent = "Anything";
  answerD.textContent = "None of the above";
};

function askQuestionTwo() {
  qestion.textContent = "What is 'Nothing'?";
  answerA.textContent = "Everything";
  answerB.textContent = "Nothing";
  answerC.textContent = "Anything";
  answerD.textContent = "None of the above";
};

function checkQuestions() {
  
}

//function checkQuestion() {
        //if (element.textContent === "Anything") {
            //score = score + 10
           // console.log ("correct")
           // console.log (score)
            //askQuestionTwo(); 
       //} else {
           // console.log ("incorrect")
           // console.log (score)
           // askQuestionTwo(); 
//}};

countDown();
askQuestionOne()

