const quizData = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        a:"<js>",
        b:"<scripting>",
        c:"<javascript>",
        d:"<script>",
        correct:"d"
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        a:"X",
        b:"=",
        c:"-",
        d:"*",
        correct:"b"
    },
    {
        question:"How does a FOR loop start?",
        a:"for (i <= 5; i++)",
        b:"for i = 1 to 5",
        c:"for (i = 0; i <= 5; i++)",
        d:"for (i = 0; i <= 5)",
        correct:"c"
    },
    {
        question:"Which event occurs when the user clicks on an HTML element?",
        a:"onchange",
        b:"onclick",
        c:"onmouseclick",
        d:"onmouseover",
        correct:"b"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">AGAIN</button>`;
        }
    }
});