var timeEl = document.querySelector(".time");
const startButton = document.getElementById('start-btn');
const resultsContainer = document.getElementById('resultsContainer');
const submitButton = document.getElementById('submit');
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

var secondsLeft = 60;

var timerCount;

var score = 0;

let myQuestions = [

    {

        question : "What does HTML stand for?",

        choiceA : "Hypertext Markup Language",

        choiceB : "Home Tool Markup Language",

        choiceC : "Hyperlinks and Text Markup Language",

        choiceD : "Hypertools Marker Language",

        correct : "A"

    },{

        question : "Which of these elements is used for the largest heading",

        choiceA : "<h6>",

        choiceB : "<head>",

        choiceC : "<h1>",

        choiceD : "<heading>", 

        correct : "C"

    },{

        question : "How can you make a numbered list?",

        choiceA : "<dl>",

        choiceB : "<ul>",

        choiceC : "<list>",

        choiceD :  "<ol>",

        correct : "D"

    }, {
        question: "What does CSS stand for?",

        choiceA : "Colorful Style Sheets",

        choiceB : "Cascading Style Sheets",

        choiceC : "Computer Style Sheets",

        choiceD : "Creative Style Sheets",

        correct : "B"

    }

];

let lastQuestion = myQuestions.length - 1;
let runningQuestion = myQuestions[0]
console.log(runningQuestion);
console.log(runningQuestion.question);
// // Starting point, button will be pressed to start quiz
// // inlcude submit button 
// // startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', startQuiz);


function startQuiz(){
    console.log('begin');
     startButton.style.display = "none";
     questionContainerElement.style.display = "block";
     // shuffledQuestions = myQuestions.sort(() => Math.random())
     setTime();
     renderQuestion();
   
   }

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        prompt("Game Over");
  
        // Calls function to create and append image
        
      }
  
    }, 1000);
  }

  // for loop 

  //function to load set of questions 

function renderQuestion(){

  console.log(myQuestions[runningQuestion].question);
    let q = myQuestions[runningQuestion];
    //grab div id of question
    document.getElementById('question').innerHTML = "<p>" + myQuestions[runningQuestion] + "</p>";
  
    console.log('test');
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    

}

  function checkAnswer(answer){
    if( answer == myQuestions[runningQuestion].correct){
      // answer is correct
      score = score +10;
      //move to next question
      
    //   answerIsCorrect();
    }else{
      // answer is wrong
      // countdown 10 seconds
    //   answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }else{
      // end the quiz and show the score
      clearInterval();
      
    }
    }