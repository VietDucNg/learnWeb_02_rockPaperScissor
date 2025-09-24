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
    if (humanChoice == 'ROCK' && computerChoice == 'rock') return 'it is a tie!';
    else if (humanChoice == 'ROCK' && computerChoice == 'paper') {
        computerScore ++;
        return `You lose! Computer choices ${computerChoice}`;
    } 
    else if (humanChoice == 'ROCK' && computerChoice == 'scissors') {
        humanScore ++;
        return `You win! Computer choices ${computerChoice}`;
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'paper') return 'it is a tie!';
    else if (humanChoice == 'PAPER' && computerChoice == 'scissors') {
        computerScore ++;
        return `You lose! Computer choices ${computerChoice}`;
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'rock') {
        humanScore ++;     
        return `You win! Computer choices ${computerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'scissors') return 'it is a tie!';
    else if (humanChoice == 'SCISSORS' && computerChoice == 'rock') {
        computerScore ++;
        return `You lose! Computer choices ${computerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && computerChoice == 'paper') {
        humanScore ++;
        return `You win! Computer choices ${computerChoice}`;
    }
}

// launch the game on user selection click
const userSelect_btn = document.querySelectorAll('.userSelect');
userSelect_btn.forEach( btn => btn.addEventListener('click', function() {
    let result = playRound(getHumanChoice(btn), getComputerChoice());
    console.log(result);
    console.log(`Your'score: ${humanScore}\nComputer'score: ${computerScore}`);
}))











// play the game 5 rounds
// function playGame() {
//     for (let i=1; i<=5; i++) {
//         console.log(playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()));
//         console.log(`Your'score: ${humanScore}\nComputer'score: ${computerScore}`);
//     }
// }

// playGame();

