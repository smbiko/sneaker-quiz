
/*----  GAME -----*/
/*----- created using tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY ----*/


const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What year did Nike release the iconic Air Jordan 1 sneaker?',
        choice1: '1985',
        choice2: '1990',
        choice3: '2000',
        choice4: '2010',
        answer: 1,
    },
    {
        question: 'Which brand collaborated with Kanye West to create the Yeezy sneaker line?',
        choice1: 'Adidas',
        choice2: 'Nike',
        choice3: 'Reebok',
        choice4: 'Puma',
        answer: 1,
    },
    {
        question: 'Who is the designer behind the famous Nike Dunk sneaker?',
        choice1: 'Tinker Hatfield',
        choice2: 'Virgil Abloh',
        choice3: 'Hiroshi Fujiwara',
        choice4: 'Peter Moore',
        answer: 4,
    },
    {
        question: 'What does "OG" stand for in sneaker culture?',
        choice1: 'Original Gangster',
        choice2: 'Original Grade',
        choice3: 'Original Generation',
        choice4: 'Original Release',
        answer: 4,
    },
    {
        question: 'Which sneaker brand is known for its collaboration with streetwear brand Supreme?',
        choice1: 'Vans',
        choice2: 'Converse',
        choice3: 'Puma',
        choice4: 'Nike',
        answer: 2,
    },
    {
        question: 'What is the nickname of the Nike Air Max sneaker with visible air cushioning?',
        choice1: 'Air Force 1',
        choice2: 'Air Max 90',
        choice3: 'Air Jordan 1',
        choice4: 'Air Presto',
        answer: 2,
    },
    {
        question: 'Which NBA player signed a lifetime deal with Nike for his signature sneaker line?',
        choice1: 'Michael Jordan',
        choice2: 'Kobe Bryant',
        choice3: 'LeBron James',
        choice4: 'Suede',
        answer: 3,
    },
    {
        question: 'Which sneaker brand is famous for its collaboration with skateboarding icon Tony Hawk?',
        choice1: 'Vans',
        choice2: 'Adidas',
        choice3: 'New Balance',
        choice4: ' Asics',
        answer: 1,
    },
    {
        question: 'What was the first sneaker to feature Nikes groundbreaking Flyknit technology?',
        choice1: 'Nike Air Max',
        choice2: 'Nike Roshe Run',
        choice3: 'Nike Free',
        choice4: 'Nike Flyknit Racer',
        answer: 4,
    },
    {
        question: 'What material is the Adidas UltraBoost primarily made of?',
        choice1: 'Leather',
        choice2: 'Mesh',
        choice3: 'Canvas',
        choice4: 'Suede',
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.href = '/sneaker-quiz/end.html'
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()