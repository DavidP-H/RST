// these are the questions and I am declaring the variable "score"
const questionOne = '1. The memory of a computer is often referred to by what acronym?'
const questionTwo = '2. CPU stands for what?'
const questionTwoA = 'A. Core Processing Unit'
const questionTwoB = 'B. Central Processing Unit'
const questionThree = '3. Power Supplies are measured primarily in what units?'
const questionThreeA = 'A. Watts'
const questionThreeB = 'B. Volts'
const questionFour = '4. The chip inside a graphics card is called what acronym?'
const questionFive = '5. The three most common motherboard sizes are?'
const questionFiveA = 'A. f-ATX, z-ATX, z-YT'
const questionFiveB = 'B. e-ATX, c-ATX, u-ITX'
const questionFiveC = 'C. ATX, m-ATX, mini-ITX'
const questionFiveD = 'D. e-UTX, j-PHT, n-IUY'
const questionSix = '6. What are the advantages of custom water cooling?'
const questionSixA = 'A. Reliability'
const questionSixB = 'B. Low maintenance'
const questionSixC = 'C. None'
const questionSixD = 'Lower Temperatures'
const questionSeven = '7. SSD stands for what?'
const questionSevenA = 'A. Solid-State Drive'
const questionSevenB = 'B. Semi-Soft Drive'
const showQuiz = document.getElementById('quiz')
let score

// Event listeners for the two buttons
document.getElementById('start').addEventListener('click', quizQuestions)
document.getElementById('check-answer').addEventListener('click', quizAnswers)

// one function that calls for all the questions to be put into place
function quizQuestions () {
  // the if and else do the same thing because otherwise the user would have to click the button twice for the quiz to show.
  if (showQuiz.style.display === 'none') {
    showQuiz.style.display = 'block'
  } else {
    showQuiz.style.display = 'block'
  }
  document.getElementById('question1').innerHTML = questionOne
  document.getElementById('question2').innerHTML = questionTwo
  document.getElementById('question2a').innerHTML = questionTwoA
  document.getElementById('question2b').innerHTML = questionTwoB
  document.getElementById('question3').innerHTML = questionThree
  document.getElementById('question3a').innerHTML = questionThreeA
  document.getElementById('question3b').innerHTML = questionThreeB
  document.getElementById('question4').innerHTML = questionFour
  document.getElementById('question5').innerHTML = questionFive
  document.getElementById('question5a').innerHTML = questionFiveA
  document.getElementById('question5b').innerHTML = questionFiveB
  document.getElementById('question5c').innerHTML = questionFiveC
  document.getElementById('question5d').innerHTML = questionFiveD
  document.getElementById('question6').innerHTML = questionSix
  document.getElementById('question6a').innerHTML = questionSixA
  document.getElementById('question6b').innerHTML = questionSixB
  document.getElementById('question6c').innerHTML = questionSixC
  document.getElementById('question6d').innerHTML = questionSixD
  document.getElementById('question7').innerHTML = questionSeven
  document.getElementById('question7a').innerHTML = questionSevenA
  document.getElementById('question7b').innerHTML = questionSevenB
}

// one function that calls all the answer functions to be added up and then shows the score
function quizAnswers () {
  score = 0
  quizAnswer1()
  quizAnswer2()
  quizAnswer3()
  quizAnswer4()
  quizAnswer5()
  quizAnswer6()
  quizAnswer7()
  document.getElementById('result').innerHTML = score
}
// these functions check to see if the answer matches with what is written, (in the function below it checks for RAM or ram) then adds to the variable 'score' if correct.
function quizAnswer1 () {
  const a1 = document.getElementById('answer1').value
  if (a1 === 'RAM' || a1 === 'ram') {
    score++
  }
}

function quizAnswer2 () {
  const a2 = document.getElementById('answer2').value
  if (a2 === 'B' || a2 === 'b') {
    score++
  }
}

function quizAnswer3 () {
  const a3 = document.getElementById('answer3').value
  if (a3 === 'A' || a3 === 'a') {
    score++
  }
}

function quizAnswer4 () {
  const a4 = document.getElementById('answer4').value
  if (a4 === 'GPU' || a4 === 'gpu') {
    score++
  }
}

function quizAnswer5 () {
  const a5 = document.getElementById('answer5').value
  if (a5 === 'C' || a5 === 'c') {
    score++
  }
}

function quizAnswer6 () {
  const a6 = document.getElementById('answer6').value
  if (a6 === 'D' || a6 === 'd') {
    score++
  }
}

function quizAnswer7 () {
  const a7 = document.getElementById('answer7').value
  if (a7 === 'A' || a7 === 'a') {
    score++
  }
}
