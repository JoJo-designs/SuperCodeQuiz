//making sure javascript file is attacted to quiz.html
console.log("Here is the page. The java script is connected");

//
var timeBox = document.querySelector("#timeBox");
var questionContain = document.querySelector("#questionContainer");

var qestion = document.querySelector("#question");
var buttonClick = document.querySelector("button");
var additional = document.querySelector("#stuffHere");
var answerA = document.querySelector("#answerOne");
var answerB = document.querySelector("#answerTwo");
var answerC = document.querySelector("#answerThree");
var answerD = document.querySelector("#answerFour");

var score = 0;
var useName;
var timeInterval;
var element;
var questions = ["Q.1: What does this function do?", "Q.2: Which statement is true?", "Q.3: What is the name of the first page of every Website on the internet?", "Q:4 What information is needed to make an '<img>' tag work"];
var functionArray = [];
var nextQuestion;
functionArray.push(askQuestionOne);



//funtion that runs the timer
function countDown() {
    var maxTime = 60;

  var timeInterval = setInterval(function () {
    timeBox.textContent = maxTime;
    maxTime --;

    if ( maxTime === -1){
      clearInterval(timeInterval);
      console.log("Game Over")
      window.location.href = "incomplete.html"
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
  answerA.textContent = "Randomly picks from an array called arrayOfCharacters.";
  answerB.textContent = "creates and returns a variable called item.";
  answerC.textContent = "Two of these are right";
  answerD.textContent = "Does it work?";
  functionArray[0] = (askQuestionTwo);
  console.log(functionArray)
};

 function askQuestionTwo() {
  qestion.textContent = questions[1];
  additional.textContent = "";
  answerA.textContent = "HTML stands for Hyper-text Makeup language.";
  answerB.textContent = "CSS stands for Cascading Style sheet.";
  answerC.textContent = "Java Script is the hardest programming language to learn.";
  answerD.textContent = "None of the above.";
  functionArray[0] = (askQuestionThree);
  console.log(functionArray)
};

 function askQuestionThree() {
  qestion.textContent = questions[2];
  answerA.textContent = "website.html";
  answerB.textContent = "inbex.html";
  answerC.textContent = "page_1.html";
  answerD.textContent = "index.html";
  functionArray[0] = (askQuestionFour);
};

function askQuestionFour() {
  qestion.textContent = questions[3];
  answerA.textContent = "alt=''";
  answerB.textContent = "href=''";
  answerC.textContent = "src=''";
  answerD.textContent = "1 and 3";
  functionArray[0] = (endGame);
};

// This will check the answers of the questions
function checkQuestion() {
        if (element.textContent === "Two of these are right" || 
        element.textContent === "CSS stands for Cascading Style sheet." || 
        element.textContent === "index.html" ||
        element.textContent === "1 and 3") {
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

