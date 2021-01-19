var timeEl = document.querySelector(".time");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
let shuffledQuestions, currentQuestionIndex

var secondsLeft = 100;
//const answerContainer = answerContainers[questionNumber];
//const selector = `input[name=question${questionNumber}]:checked`;
//const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//list of questions
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: [
        { text: "Angular", correct: true },
        { text: "Angular", correct: false},
        { text: "Angular", correct: false },
        { text: "Angular", correct: false }
      
    ]
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
        { text: "Angular", correct: true },
        { text: "Angular", correct: false},
        { text: "Angular", correct: false },
        { text: "Angular", correct: false }
      
    ]
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: [
        { text: "Angular", correct: true },
        { text: "Angular", correct: false},
        { text: "Angular", correct: false },
        { text: "Angular", correct: false }
      
    ]
      
    }
  ];

// Starting point, button will be pressed to start quiz
// inlcude submit button 
// startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', startQuiz);

function startQuiz(){
  console.log('begin');
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  shuffledQuestions = myQuestions.sort(() => Math.random())
  currentQuestionIndex = 0
  setNextQuestion()
 
   
  
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      
    }

  }, 1000);
}
setTime();


function setNextQuestion(){
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach( answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
})
}



submitButton.addEventListener('click', showResults);
function showResults(){}

// display quiz right away
//buildQuiz();

// start button


// on submit, show results



//GIVEN I am taking a code quiz


// WHEN I click the start button
//button to start the quiz, which triggers the timer to start as well
// will need start button and timer


// THEN a timer starts and I am presented with a question
// first question populates when timer starts
// list of questions
// if statements for answers




// WHEN I answer a question
// list of questions
// if statements for answers

//if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    //numCorrect++;
   // else{
        // color the answers red
        //answerContainers[questionNumber].style.color = 'red';


// THEN I am presented with another question
// if answer is correct, then populate next question
// if false, resets question

// WHEN I answer a question incorrectly
//if false, resets question


// THEN time is subtracted from the clock
// every incorrect answer subtracts 5 seconds from timer
// if incorrect, subtract 5


// WHEN all questions are answered or the timer reaches 0


// THEN the game is over


// WHEN the game is over
// when game ends, display window for initials and score 


// THEN I can save my initials and my score
// window prompt for initials and score
// question to play again
