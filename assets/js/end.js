
document.addEventListener('DOMContentLoaded', () => {
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

if (finalScore) {
    finalScore.innerText = mostRecentScore;
}

if (username && saveScoreBtn) {
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });
}

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
}
});
