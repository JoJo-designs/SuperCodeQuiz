//making sure javascript file is attacted to quiz.html
console.log("Here is the page. The java script is connected");

//
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
var questions = ["What is 'Something'?", "What is 'Nothing'?", "This is a question?"];
var functionArray = [];
var nextQuestion;
functionArray.push(askQuestionOne);

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

// function ends the quiz when the last question is answerd.
function endGame() {
    window.location.href = "end.html"
    console.log("Game Over")
    clearInterval(timeInterval);
    localStorage.setItem("score", score)
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

// for loop will change the functions hopefully
function nextQuestion() {
  for (var i=0; i< functionArray.length; i++) {
    functionArray[i] ();
  }return
};


//Questions this area will ask the questions.
  function askQuestionOne() {
  qestion.textContent = questions[0];
  answerA.textContent = "Everything";
  answerB.textContent = "Nothing";
  answerC.textContent = "Anything";
  answerD.textContent = "None of the above";
  functionArray[0] = (askQuestionTwo);
  console.log(functionArray)
};

 function askQuestionTwo() {
  qestion.textContent = questions[1];
  answerA.textContent = "Everythin";
  answerB.textContent = "Nothin";
  answerC.textContent = "Anythin";
  answerD.textContent = "None of the abov";
  functionArray[0] = (askQuestionThree);
  console.log(functionArray)
};

 function askQuestionThree() {
  qestion.textContent = questions[2];
  answerA.textContent = "Everythi";
  answerB.textContent = "Nothi";
  answerC.textContent = "Anythi";
  answerD.textContent = "None of the abo";
  functionArray[0] = (askQuestionFour);
};

function askQuestionFour() {
  qestion.textContent = questions[0];
  answerA.textContent = "Everyth";
  answerB.textContent = "Noth";
  answerC.textContent = "Anyth";
  answerD.textContent = "None of the ab";
  functionArray[0] = (endGame);
};

// This will check the answers of the questions
function checkQuestion() {
        if (element.textContent === "Anything" || element.textContent === "Everythin" ) {
            score = score + 10
            console.log ("correct")
            console.log (score)
            nextQuestion();
       } else  {
            console.log ("incorrect")
            console.log (score)
            nextQuestion();
}};


countDown();
askQuestionOne()

