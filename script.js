const timer = document.querySelector(".timer");
const starterPage = document.querySelector(".starterPage");
const startBtn = document.querySelector(".startBtn");
const quizPage = document.querySelector(".quizPage");
const question = document.querySelector(".question");
const list = document.querySelector(".list");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const endPage = document.querySelector(".endPage");
const score = document.querySelector(".score");
const initialsInput = document.querySelector(".initialsInput");
const submitBtn = document.querySelector(".submitBtn");

let scoreValue = 0;
let time = 60;
let quizIndex = 0;

const quizArr = [
    {
        question: "Which tag is used in HTML to link a JavaScript file??",
        choices: ["A. main", "B. link", "C. script", "D. head"],
        correctChoice: "C. script"
    },
    {
        question: "What does a variable look like in JavaScript?",
        choices: ["A. function()", "B. var", "C. variable", "D. type"],
        correctChoice: "B. var"
    },
    //     {
    // question: "",
    // choices: ["", "", "", ""],
    // correctChoice: ""
    //     },
    //     {
    // question: "",
    // choices: ["", "", "", ""],
    // correctChoice: ""
    //     }, 
    //     {
    // question: "",
    // choices: ["", "", "", ""],
    // correctChoice: ""
    //     }
]

quizPage.style.display = "none"
endPage.style.display = "none"

startBtn.addEventListener("click", function () {
    starterPage.style.display = "none"
    quizPage.style.display = "block"
    showQuestions(quizIndex)
    setInterval(function() {
        if(time <= 0) {
            quizOver()
            timer.innerHTML = "Times up!"
            clearInterval()
        } else {
            time--
            timer.innerHTML = "Time left: " + time
        }
    }, 1000)
})

function showQuestions(quizIndex) {
    question.innerHTML = "";
    question.innerHTML = quizArr[quizIndex].question
    btn1.innerHTML = ""
    btn1.innerHTML = quizArr[quizIndex].choices[0]
    btn2.innerHTML = ""
    btn2.innerHTML = quizArr[quizIndex].choices[1]
    btn3.innerHTML = ""
    btn3.innerHTML = quizArr[quizIndex].choices[2]
    btn4.innerHTML = ""
    btn4.innerHTML = quizArr[quizIndex].choices[3]
}

btn1.addEventListener("click", function () {
    var choosen = btn1.innerHTML;
    if (choosen === quizArr[quizIndex].correctChoice) {
        scoreValue = scoreValue + 20;
    } else {
        time = time - 10
    }
    quizIndex++
    if (quizIndex >= quizArr.length) {
        quizOver()
        quizIndex = 0
    }
    showQuestions(quizIndex)
})
btn2.addEventListener("click", function () {
    var choosen = btn2.innerHTML;
    if (choosen === quizArr[quizIndex].correctChoice) {
        scoreValue = scoreValue + 20;
    } else {
        time = time - 10
    }
    quizIndex++
    if (quizIndex >= quizArr.length) {
        quizOver()
        quizIndex = 0
    }
    showQuestions(quizIndex)
})
btn3.addEventListener("click", function () {
    var choosen = btn3.innerHTML;
    if (choosen === quizArr[quizIndex].correctChoice) {
        scoreValue = scoreValue + 20;
    } else {
        time = time - 10
    }
    quizIndex++
    if (quizIndex >= quizArr.length) {
        quizOver()
        quizIndex = 0
    }
    showQuestions(quizIndex)
})
btn4.addEventListener("click", function () {
    var choosen = btn4.innerHTML;
    if (choosen === quizArr[quizIndex].correctChoice) {
        scoreValue = scoreValue + 20;
    } else {
        time = time - 10
    }
    quizIndex++
    if (quizIndex >= quizArr.length) {
        quizOver()
        quizIndex = 0
    }
    showQuestions(quizIndex)
})

function quizOver() {
    quizPage.style.display = "none"
    endPage.style.display = "block"
    score.innerHTML = "You got a score of: " + scoreValue
}

submitBtn.addEventListener("click", function() {
    var initials = initialsInput.value
    var data = {
        initials,
        scoreValue
    }
    localStorage.setItem("score", JSON.stringify(data))
})

