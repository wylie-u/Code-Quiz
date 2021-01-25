var timeEl = document.querySelector(".time");
const startButton = document.getElementById('start-btn');
const resultsContainer = document.getElementById('resultsContainer');
const submitButtonElement = document.getElementById('submit');
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
var highScoresElement = document.getElementById('highscores');

const ptag = document.getElementById('paragraph');

var secondsLeft = 60;

var timerCount;

var score = 0;

let myQuestions = [

    {

        question : "What does HTML stand for?",
        
        choices: {
        
        A: "Hypertext Markup Language",
        
        B: "Home Tool Markup Language",
       
        C: "Hyperlinks and Text Markup Language",
        
        D: "Hypertools Marker Language",

        correctAnswer: "A"

        }

    },{

        question : "Which of these elements is used for the largest heading?",

        choices: {
        
          A: "<h6>",
          
          B: "<head>",
         
          C: "<h1>",
          
          D: "<heading>",
  
          correctAnswer: "C"
  
          }
        
    },{

        question : "How can you make a numbered list?",
        
        choices: {
        
        A: "<dl>",
        
        B: "<ul>",
       
        C: "<list>",
        
        D: "<ol>",

        correctAnswer: "D"

        }

    }, {
        question: "What does CSS stand for?",
        
        choices: {

        A: "Colorful Style Sheets",

        B: "Cascading Style Sheets",

        C: "Computer Style Sheets",

        D: "Creative Style Sheets",

        correctAnswer: "B"

      },

      

    }
    
];

// console.log(correctAnswer);


const lastQuestion = myQuestions.length - 1;
 // add 1 everytime an answer is selected, update
let runningQuestion = 0;
 console.log(runningQuestion);
// // Starting point, button will be pressed to start quiz
// // inlcude submit button 
// // startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', startQuiz);

// on click, add something where if quesiton is right, goes to the next question, if wrong, stays
//start button to start quiz, should also show the first questio
function startQuiz(){
    console.log('begin');
     startButton.style.display = "none";
     questionContainerElement.style.display = "block";
    ptag.style.display = "none";
     
     // shuffledQuestions = myQuestions.sort(() => Math.random())
     highScoresElement.setAttribute("style", "display:block;")
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

  // for loop?? 

  //function to load set of questions 

  function renderQuestion(){
    let q = myQuestions[runningQuestion];
    const correctAnswer = []
    
    for (var i = 0; i < myQuestions.length; i++){
      console.log(myQuestions[runningQuestion].choices.A);
      option1.textContent = myQuestions[runningQuestion].choices.A;
      option2.textContent = myQuestions[runningQuestion].choices.B;
      option3.textContent = myQuestions[runningQuestion].choices.C;
      option4.textContent = myQuestions[runningQuestion].choices.D;
      console.log('test');
    }
   
    document.getElementById("question").innerHTML = "<p>"+ q.question +"</p>";
    question.innerHTML = "<p>"+ q.question +"</p>";
    // option1.innerHTML = myQuestions[runningQuestion].choices.A;
    // option2.innerHTML = myQuestions[runningQuestion].choices.B;
    // option3.innerHTML = myQuestions[runningQuestion].choices.C;
    // option4.innerHTML = myQuestions[runningQuestion].choices.D;
    
  // for each question...
  

      // add this question and its answers to the output
    
  // finally combine our output list into one string of HTML and put it on the page
  
}

  function checkAnswer(answer){
    if( answer === myQuestions[runningQuestion].choices.correctAnswer){
      // answer is correct
      score = score +10;
      
     
      console.log('test');
      //move to next question
      
    //   answerIsCorrect();
    }else{
        secondsLeft -= 10;
      console.log('wrong');
    //   answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }else{
      // end the quiz and show the score
      clearInterval();
      console.log();
      highScores()
      
      
    }
  }

  function highScores(){
    score = score;
    window.location.href = "final.html"

  }