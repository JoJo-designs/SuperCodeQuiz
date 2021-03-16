# SuperCodeQuiz
Building a quiz about code. 

The goal of this project is to build a quiz with codeing related questions. The quiz will contain a few questions that are mulitpile choose. The quiz will be timed and the return a score based on the number of correct answers given. The use will be able to save thier names and score so after playing another game the name an previous score will still appear.

find the repository here: https://github.com/JoJo-designs/SuperCodeQuiz
Live version here: https://jojo-designs.github.io/SuperCodeQuiz/.

No starter files were provided.


What I started with so far.
3 html files one for the landing page and the second that the quiz will live one
the quiz file has places for the timer the question and 4 possiable answers. The
last page is where the user will see their score and input a name. 

So far I have the frist page linked to the quiz. On the quiz page a timer works and
when time runs out it send the user to a the last page. I have a function that will 
also take users to the end page when they answerd all the questions

My next step is to make a single question work and when it is answerd the user is
sent to the end page. I need to make the an event listener that will make know which 
button was clicked and be able to know if it is correct or incorrect

I have made four questions work and when the last question is anwesed the user is sent to an end page and the score is saved. the use can input their name and click a button. the score will be saved as last score but at the moment the name doesn't save. when I get the name to save I think I can start to make it look pretty.


Afterwards

Like most project this one had it's own issues. However when I compare this to the project before it this one was a little easier. I would guess it was becauase I am now more familliar with the technologies that are being used. The issues came from the javascript and I ran into two major issues. The fisrt was getting the event listener to work for the buttons. Around the same time I needed the if statment to select the right value. I went to class office hours and the issue was resloved. I was able to continue until I needed to save the inputed players name in localstorage. Again I reached out for help and after some confusion and work I was able to make it work. After I had it functioning I realized that even when the submit button was click the name wouldn't update until the page was refreshed. I wanted the high score values to update when the submit button was click so I tired a few thing to make it work. In the end I create another function that would update the high scores. I tired to work step by step for this project and I didn't use much CSS until I had everything working. I only make 4 questions but I think I may be able to add additional questions pretty easily. The pages are reponsive to the screen size but it could be a little cleaner. 

Screen shots 
![The landing page](/image/img1.png?raw=true "Landing Page")
![The frist question](/image/img2.png?raw=true "Question")
![The score page](/image/img3.png?raw=true "final score")
![ran out of time page ](/image/img4.png?raw=true "ran out of time")