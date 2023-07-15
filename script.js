const prompt = require('prompt-sync')();

function getPlayerChoice() {
    while(true) {
        let playerPick = prompt("Rock, Paper, or Scissors? ");
        let playerPickCheck = playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase();
        if (playerPickCheck == "Rock" || playerPickCheck == "Paper" || playerPickCheck == "Scissors") {
            return playerPickCheck;
        }
    }
}

function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "Rock";
    } else if (x > 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection} // Computer: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        return `It's a tie.`;
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${playerSelection} loses to ${computerSelection}`;
    }
}



const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));