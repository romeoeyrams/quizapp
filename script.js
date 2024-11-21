const quizData = [
    {
        question: "1. What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b",
    },
    {
        question: "2. Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "J.K. Rowling",
        d: "Stephen King",
        correct: "a",
    },
    {
        question: "3. Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Jupiter",
        correct: "b",
    },
    {
        question: "4. Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Pablo Picasso",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        correct: "a",
    },
    {
        question: "5. What is the chemical symbol for water?",
        a: "Wt",
        b: "H2O",
        c: "Co",
        d: "Ho",
        correct: "b",
    },
    {
        question: "6. Who discovered penicillin?",
        a: "Alexander Fleming",
        b: "Marie Curie",
        c: "Isaac Newton",
        d: "Albert Einstein",
        correct: "a",
    },
    {
        question: "7. What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "8. Who is known as the father of modern physics?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    {
        question: "9. What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Nauru",
        correct: "b",
    },
    {
        question: "10. What is the currency of Japan?",
        a: "Yuan",
        b: "Euro",
        c: "Dollar",
        d: "Yen",
        correct: "d",
    },
];


// variables declaration
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const prevnav = document.getElementById("prev");
const nextnav = document.getElementById("next");

let currentQuiz = 0;
let score = 0;


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
console.log(loadQuiz);

loadQuiz();

function deselectAnswers(){
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected(){
    let answer;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (!answer){
        alert("Please select an answer");
        return;
    }

    if (answer === quizData[currentQuiz].correct){
        score++;
    }

    // if (answer === quizData[currentQuiz].correct){
    //     alert("Correct answer");
    // } else {
    //     alert("Wrong answer");
    // }
     currentQuiz++;

    if (currentQuiz < quizData.length){
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        <h2>${score < 5 ? "More room for improvement<br>You've Failed<br> &#128533;" :  "Congratulations<br>You've Passed<br> &#128079;"}</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
});

// prevnav.addEventListener("click", () => {
//     console.log("prev button clicked");
// });

// nextnav.addEventListener("click", () => {
//     console.log("next button clicked");
// });