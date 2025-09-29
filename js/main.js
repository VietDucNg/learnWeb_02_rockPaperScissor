const userScoreDiv = document.querySelector('.userScore');
const comScoreDiv = document.querySelector('.comScore');
const resultInfoDiv = document.querySelector('.resultInfo');
const resultMessDiv = document.querySelector('.resultMess');
const winnerPrompt = document.querySelector('.winnerPrompt');
const winnerPromptContent = document.querySelector('.winnerPromptContent');
const winnerMess = document.querySelector('.winnerMess');
const userSelect_btn = document.querySelectorAll('.userSelect');
const playAgainBtn = document.querySelector('.playAgainBtn');
const userChoiceIcon = document.querySelector('.userChoiceIcon');
const comChoiceIcon = document.querySelector('.comChoiceIcon');

function getComputerChoice() {
    let num = Math.random().toFixed(2);
    if (num >= 0 && num < 0.33) return 'rock';
    else if (num >= 0.33 && num <= 0.66) return 'paper';
    else return 'scissors'
}

function getHumanChoice(btn) {
    if (btn.classList.contains('rockBtn')) return 'ROCK';
    else if (btn.classList.contains('paperBtn')) return 'PAPER';
    else if (btn.classList.contains('scissorsBtn')) return 'SCISSORS';
}

// game logic for 1 round
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'ROCK' && computerChoice == 'rock') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
    else if (humanChoice == 'ROCK' && computerChoice == 'paper') {
        computerScore ++;
        return ['You lose!',`Rock is beaten by ${computerChoice}`]
    } 
    else if (humanChoice == 'ROCK' && computerChoice == 'scissors') {
        humanScore ++;
        return ['You win!',`Rock beats ${computerChoice}`]
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'paper') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
    else if (humanChoice == 'PAPER' && computerChoice == 'scissors') {
        computerScore ++;
        return ['You lose!',`Paper is beaten by ${computerChoice}`]
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'rock') {
        humanScore ++;
        return ['You win!',`Paper beats ${computerChoice}`]
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'scissors') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
    else if (humanChoice == 'SCISSORS' && computerChoice == 'rock') {
        computerScore ++;
        return ['You lose!',`Scissors is beaten by ${computerChoice}`]
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'paper') {
        humanScore ++;
        return ['You win!',`Scissors beats ${computerChoice}`]
    }
}

function getChoiceIcon (choice) {
    if (choice.toUpperCase() === 'ROCK') return '👊';
    else if (choice.toUpperCase() === 'PAPER') return '🖐';
    else return '✌';
} 

function resetGame() {
    resultInfoDiv.textContent = 'Pick your fighter and challenge the computer!';
    resultMessDiv.textContent = 'Score 5 points first to win the game';
    userScoreDiv.textContent = 0;
    comScoreDiv.textContent = 0;
    humanScore = 0;
    computerScore = 0;
}

function callWinnerPrompt() {
    winnerPrompt.classList.remove('hidden');
    winnerMess.textContent = (computerScore === 5) ? 'You lost! 😓' : 'You won! 🎉';

    // reset game on playAgainBtn click
    playAgainBtn.addEventListener('click', function() {
        winnerPrompt.classList.add('hidden');
        resetGame();
    });

    // hide winnerPrompt if user click on background
    winnerPrompt.addEventListener('click', function(e) {
        if (!winnerPromptContent.contains(e.target)) winnerPrompt.classList.add('hidden');
    },{capture:true})
}

// launch the game on user selection click
userSelect_btn.forEach( btn => btn.addEventListener('click', function() {
    // prompt winner message if someone reach 5 points
    if (humanScore === 5 || computerScore === 5) callWinnerPrompt();
    else {
        let tmp_comChoice = getComputerChoice();
        userChoiceIcon.textContent = getChoiceIcon(getHumanChoice(btn));
        comChoiceIcon.textContent = getChoiceIcon(tmp_comChoice);

        let result = playRound(getHumanChoice(btn),tmp_comChoice);

        // display message and score
        resultInfoDiv.textContent = result[0];
        resultMessDiv.textContent = result[1];
        userScoreDiv.textContent = humanScore;
        comScoreDiv.textContent = computerScore;

        // prompt winner message if someone reach 5 points
        if (humanScore === 5 || computerScore === 5) callWinnerPrompt();
    }
}))


