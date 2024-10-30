const questions = [
    {
        question: 'Burna boy is an artiste from which of these countries?',
        answers: [
            {text: 'Nigeria', correct: true},
            {text: 'Burkina Faso', correct: false},
            {text: 'Uganda', correct: false},
            {text: 'Ghana', correct: false}
        ]
    },
    {
        question: 'The most richest indian actor is?',
        answers: [
            {text: 'Salman Khan', correct: false},
            {text: 'Sunny Deol', correct: false},
            {text: 'Ranbir Kapoor', correct: false},
            {text: 'Shahrukh Khan', correct: true}
        ]
    },
    {
        question: 'Which of these teams in england has won the most FA cups?',
        answers: [
            {text: 'Chelsea', correct: false},
            {text: 'Burnley', correct: false},
            {text: 'Everton', correct: false},
            {text: 'Arsenal', correct: true}
        ]
    },
    {
        question: 'Which of these is a continent?',
        answers: [
            {text: 'Africa', correct: true},
            {text: 'USA', correct: false},
            {text: 'France', correct: false},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which of these is a country in Europe?',
        answers: [
            {text: 'Africa', correct: false},
            {text: 'USA', correct: false},
            {text: 'France', correct: true},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which of these is a country in Asia?',
        answers: [
            {text: 'Russia', correct: false},
            {text: 'USA', correct: false},
            {text: 'France', correct: false},
            {text: 'China', correct: true}
        ]
    },
    {
        question: 'Which of these is a country in africa?',
        answers: [
            {text: 'Mali', correct: true},
            {text: 'USA', correct: false},
            {text: 'France', correct: false},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which of these is a country in Arabia?',
        answers: [
            {text: 'Qatar', correct: true},
            {text: 'USA', correct: false},
            {text: 'England', correct: false},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which of these is a continent?',
        answers: [
            {text: 'Australia', correct: true},
            {text: 'USA', correct: false},
            {text: 'France', correct: false},
            {text: 'China', correct: false}
        ]
    },
    {
        question: 'Which of these is considered a black continent?',
        answers: [
            {text: 'Africa', correct: true},
            {text: 'USA', correct: false},
            {text: 'France', correct: false},
            {text: 'China', correct: false}
        ]
    },
];


let questElt = document.getElementById('questions');
let answerBtns = document.getElementById('answer-buttons');
let nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let total = 100;
let questionsgot = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    total = 100;
    questionsgot = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions();
};

function showQuestions() {
    resetQuiz();
    let currentQuest = questions[currentQuestionIndex];
    let QuestNo = currentQuestionIndex + 1;
    questElt.innerHTML = QuestNo + '. ' + currentQuest.question;

    currentQuest.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAns);
    });
};

function resetQuiz() {
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
};

function selectAns(e) {
    const selectbtns = e.target;
    const isCorrect = selectbtns.dataset.correct =='true';
    if(isCorrect){
        selectbtns.classList.add('correct');
        questionsgot++;
        score += 10;
    }
    else {
        selectbtns.classList.add('incorrect');
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct == 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextBtn.style.display = 'block';
};

function showScores(){
    resetQuiz();
    if(score == 0 && score <= 50){
        questElt.innerHTML = `You got ${questionsgot} out of ${questions.length} questions and scored ${score}% out of ${total}.
        This is a disappointing result. Please do better 😣`;
    }
    else if (score > 50 && score <= 70){
        questElt.innerHTML = `You got ${questionsgot} out of ${questions.length} questions and scored ${score}% out of ${total}.
        This is very good but you can do beter 😊`;
    }
    else if (score == 100){
        questElt.innerHTML = `You got ${questionsgot} out of ${questions.length} questions and scored ${score}% out of ${total}.
         This is Excellent! WOOOOOOHOOOOOOOOO!😁👌🎉🎉🎉`;
    }

    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display ='block';
};


function handleNextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScores();
    }
};


nextBtn.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    }
    else{
        startQuiz();
    }
    nextBtn.style.backgroundColor = 'green';
});

startQuiz();