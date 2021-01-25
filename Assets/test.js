var timeEl = document.querySelector(".time");
const startButton = document.getElementById('start-btn');
const resultsContainer = document.getElementById('resultsContainer');
const submitButton = document.getElementById('submit');
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

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
        
        D: "Hypertools Marker Language"
        
      }, 
      correct: "A"

    },{

        question : "What does HTML stand for?",
        
        choices: {

        A: "<h6>",
        
        B: "<head>",
       
        C: "<h1>",
        
        D: "<heading>"
        
      }, 

      correct: "C"

    },{

        question : "What does HTML stand for?",
        
        choices: {

        A: "<dl>",
        
        B: "<ul>",
       
        C: "<list>",
        
        D: "<ol>"
        
      }, 

      correct: "D"


    }, {
       
        question : "What does HTML stand for?",
        
        choices: {

        A: "Colorful Style Sheets",
        
        B: "Cascading Style Sheets",
       
        C: "Computer Style Sheets",
        
        D: "Creative Style Sheets"
        
      }, 

      correct: "B"

    }
    
];
console.log(myQuestions[0].choices);

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
    // if(runningQuestion < myQuestions.length - 1) {

    // }
    // console.log('test');
    for (var i = 0; i > myQuestions.length; i++){
      console.log(myQuestions);
    }
    
    document.getElementById("question").innerHTML = "<p>"+ q.question +"</p>";
    console.log('question');
    // question.choices.forEach(element => {
    //   if (choices.correct) {
        
    //   }
    // });

  
    option1.innerHTML = q[0].choices[0];
    console.log(option1);
    option2.innerHTML = q.question.choices;
    option3.innerHTML = q.question.choices;
    option4.innerHTML = q.question.choices;
  
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