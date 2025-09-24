// the user play the game against computer

// function to randomly return computer choice of rock or paper or scissor
function getComputerChoice() {
    let num = Math.random().toFixed(2);
    if (num >= 0 && num < 0.33) return 'rock';
    else if (num >= 0.33 && num <= 0.66) return 'paper';
    else return 'scissors'
}

// function to get user choice
function getHumanChoice(btn) {
    if (btn.classList.contains('rock_btn')) return 'ROCK';
    else if (btn.classList.contains('paper_btn')) return 'PAPER';
    else if (btn.classList.contains('scissors_btn')) return 'SCISSORS';
}

// game logic for 1 round
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'ROCK' && computerChoice == 'rock') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
        // return `It is a tie! \nComputer also choices ${computerChoice}`;
    else if (humanChoice == 'ROCK' && computerChoice == 'paper') {
        computerScore ++;
        return ['You lose!',`Rock is beaten by ${computerChoice}`]
        // return `You lose! Rock is beaten by ${computerChoice}`;
    } 
    else if (humanChoice == 'ROCK' && computerChoice == 'scissors') {
        humanScore ++;
        return ['You win!',`Rock beats ${computerChoice}`]
        // return `You win! \nRock beats ${computerChoice}`;
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'paper') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
        // return `It is a tie! \nComputer also choices ${computerChoice}`;
    else if (humanChoice == 'PAPER' && computerChoice == 'scissors') {
        computerScore ++;
        return ['You lose!',`Paper is beaten by ${computerChoice}`]
        // return `You lose! \nPaper is beaten by ${computerChoice}`;
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'rock') {
        humanScore ++;
        return ['You win!',`Paper beats ${computerChoice}`]
        // return `You win! \nPaper beats ${computerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'scissors') 
        return ['It is a tie!',`Computer also choices ${computerChoice}`]
        // return `It is a tie! \nComputer also choices ${computerChoice}`;
    else if (humanChoice == 'SCISSORS' && computerChoice == 'rock') {
        computerScore ++;
        return ['You lose!',`Scissors is beaten by ${computerChoice}`]
        // return `You lose! \nScissors is beaten by ${computerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'paper') {
        humanScore ++;
        return ['You win!',`Scissors beats ${computerChoice}`]
        // return `You win! \nScissors beats ${computerChoice}`;
    }
}

// function to reset the game
function resetGame() {
    resultInfoDiv.textContent = 'Choose your weapon and challenge the computer!';
    resultMessDiv.textContent = 'The one score 5 points first wins the game';
    userScoreDiv.textContent = 0;
    comScoreDiv.textContent = 0;
    humanScore = 0;
    computerScore = 0;
}

// launch the game on user selection click
const userScoreDiv = document.querySelector('.userScore');
const comScoreDiv = document.querySelector('.comScore');
const resultInfoDiv = document.querySelector('.resultInfo');
const resultMessDiv = document.querySelector('.resultMess');

const userSelect_btn = document.querySelectorAll('.userSelect');
userSelect_btn.forEach( btn => btn.addEventListener('click', function() {
    let result = playRound(getHumanChoice(btn), getComputerChoice());

    // display message and score
    resultInfoDiv.textContent = result[0];
    resultMessDiv.textContent = result[1];
    userScoreDiv.textContent = humanScore;
    comScoreDiv.textContent = computerScore;

    // reset game if someone reach 5 points
    if (humanScore === 5 || computerScore === 5) resetGame();
}))





// play the game 5 rounds
// function playGame() {
//     for (let i=1; i<=5; i++) {
//         console.log(playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()));
//         console.log(`Your'score: ${humanScore}\nComputer'score: ${computerScore}`);
//     }
// }

// playGame();

