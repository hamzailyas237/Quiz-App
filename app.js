

var quizQuestions = [
    {
        question: "Which built-in method combines the text of two strings and returns a new string ?",
        opt1: "append()",
        opt2: "attach()",
        opt3: "concat()",
        opt4: "None of the above",
        correct: "opt3"
    },
    {
        question: "What is the most used programming language in 2021 ?",
        opt1: "javaScript",
        opt2: "python",
        opt3: "java",
        opt4: "Ruby",
        correct: "opt2"
    },
    {
        question: "What does HTML stands for ?",
        opt1: "Hyper Trainer Marking Language",
        opt2: "Hyper Text Marketing Language",
        opt3: "Hyper Text Markup Language",
        opt4: "Hyper Text Markup Leveler",
        correct: "opt3"
    },
    {
        question: "What does CSS stands for ?",
        opt1: "Custom style sheet",
        opt2: "Cascading style sheet",
        opt3: "Custom styling sheet",
        opt4: "Cascading styling sheet",
        correct: "opt2"
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        opt1: "JavaScript variable names must begin with a letter or the underscore character",
        opt2: "JavaScript variable names are case sensitive",
        opt3: "Both of the above",
        opt4: "None of the above",
        correct: "opt3"
    },
    {
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        opt1: "slice()",
        opt2: "split()",
        opt3: "replace()",
        opt4: "search()",
        correct: "opt1"
    },
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        opt1: "slice()",
        opt2: "splice()",
        opt3: "shift()",
        opt4: "unshift()",
        correct: "opt2"
    },
    {
        question: "If you type the following code in the console window, what result will you get ? 3 > 2 > 1 === false;",
        opt1: "False",
        opt2: "Error",
        opt3: "NaN",
        opt4: "True",
        correct: "opt4"
    },
    {
        question: "JavaScript is a ___ side programming language.",
        opt1: "Server",
        opt2: "Client",
        opt3: "Both of the above",
        opt4: "None",
        correct: "opt3"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript ?",
        opt1: "min(x,y);",
        opt2: "min(xy);",
        opt3: "Math.min(xy)",
        opt4: "Math.min(x,y)",
        correct: "opt4"
    },
]


const quizMain = document.getElementById("quizMain")
const questionText = document.getElementById("questionText")
const opt1Text = document.getElementById("opt1Text")
const opt2Text = document.getElementById("opt2Text")
const opt3Text = document.getElementById("opt3Text")
const opt4Text = document.getElementById("opt4Text")
let secondsCounter = document.getElementById('secondsCounter')
let minutesCounter = document.getElementById('minutesCounter')
let marksCounter = document.getElementById('marksCounter')
let answerEls = document.getElementsByName('answer');


let currentIndex = 0;
let score = 0;


const quizLoader = () => {
    deselectRadioBtn()

    var currentQuestion = quizQuestions[currentIndex]
    // questionText.innerHTML = currentQuestion.question
    questionText.innerHTML = currentIndex + 1 + '. ' + currentQuestion.question
    opt1Text.innerHTML = currentQuestion.opt1
    opt2Text.innerHTML = currentQuestion.opt2
    opt3Text.innerHTML = currentQuestion.opt3
    opt4Text.innerHTML = currentQuestion.opt4
}
quizLoader()

const selectedAnswer = () => {

    let answer;

    answerEls.forEach(answerEl => {
        // console.log(answerEl.checked)
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


nextBtn.addEventListener('click', () => {

    let answer = selectedAnswer()
    console.log(answer)

    if (answer) {

        if (answer === quizQuestions[currentIndex].correct) {
            console.log('correct answer ==>', answer)
            score++
            marksCounter.innerHTML++
        }
        currentIndex++
        if (currentIndex < quizQuestions.length) {
            quizLoader()
        }
        else {
            alert('Quiz Finished')
            quizMain.innerHTML = `<h2> You scored ${score} / ${quizQuestions.length} </h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
    else {
        alert('Please select an option')
    }

})


function deselectRadioBtn() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

startQuizBtn.addEventListener('click', () => {
    quizMain.style.display = 'block'
    beforeStart.style.display = 'none'
    let interval = setInterval(() => {
        secondsCounter.innerHTML++;
        if (secondsCounter.innerHTML == '60') {
            minutesCounter.innerHTML++
            secondsCounter.innerHTML = '0';
        }
        if (minutesCounter.innerHTML === '3') {
            clearInterval(interval);
            minutesCounter.innerHTML = '0'
            alert('Quiz Time Finished')
            quizMain.innerHTML = `<h2> You scored ${score} / ${quizQuestions.length} </h2>
            <button onclick="location.reload()">Reload</button>`

        }
    }, 1000)
})

