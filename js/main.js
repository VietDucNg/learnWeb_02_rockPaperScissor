// the user play the game against computer

// function to randomly return computer choice of rock or paper or scissor
function getComputerChoice() {
    let num = Math.random().toFixed(2);
    if (num >= 0 && num < 0.33) return 'rock';
    else if (num >= 0.33 && num <= 0.66) return 'paper';
    else return 'scissors'
}

// function to get user choice
function getHumanChoice() {
    let humanChoice = prompt("what's your choice?").toUpperCase();
    return humanChoice;
}

// keep track the score
let humanScore = 0;
let computerScore = 0;

// game logic for 1 round
function playRound(humanChoice, ComputerChoice) {
    if (humanChoice == 'ROCK' && ComputerChoice == 'rock') return 'it is a tie!';
    else if (humanChoice == 'ROCK' && ComputerChoice == 'paper') {
        computerScore ++;
        return `You lose! Computer choices ${ComputerChoice}`;
    } 
    else if (humanChoice == 'ROCK' && ComputerChoice == 'scissors') {
        humanScore ++;
        return `You win! Computer choices ${ComputerChoice}`;
    }
    else if (humanChoice == 'PAPER' && ComputerChoice == 'paper') return 'it is a tie!';
    else if (humanChoice == 'PAPER' && ComputerChoice == 'scissors') {
        computerScore ++;
        return `You lose! Computer choices ${ComputerChoice}`;
    }
    else if (humanChoice == 'PAPER' && ComputerChoice == 'rock') {
        humanScore ++;     
        return `You win! Computer choices ${ComputerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && ComputerChoice == 'scissors') return 'it is a tie!';
    else if (humanChoice == 'SCISSORS' && ComputerChoice == 'rock') {
        computerScore ++;
        return `You lose! Computer choices ${ComputerChoice}`;
    }
    else if (humanChoice == 'SCISSORS' && ComputerChoice == 'paper') {
        humanScore ++;
        return `You win! Computer choices ${ComputerChoice}`;
    }
}

// play the game 5 rounds
function playGame() {
    for (let i=1; i<=5; i++) {
        console.log(playRound(humanChoice=getHumanChoice(), ComputerChoice=getComputerChoice()));
        console.log(`Your'score: ${humanScore}\nComputer'score: ${computerScore}`);
    }
}

playGame();

