const prompt = require('prompt-sync')();

const NUM_GAME = 5;

let tie = 0;
let win = 0;
let lose = 0;

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
        console.log(`It's a tie.`);
        return "tie";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    } else {
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`);
        return "lose";
    }
}

function totalScore(score) {
    if (score == "win") {
         win++
    } else if (score == "lose") {
         lose++
    } else {
         tie++
    }
    console.log(`Player Score: ${win} || Computer Score: ${lose} || Ties: ${tie}`);
}

function gameWinner() {
    if (win > lose && win >= tie) {
        console.log("Player Wins!");
        return;
    } else if (lose > win && lose >= tie) {
        console.log("Computer Wins!");
        return;
    }
    console.log("It's a tie! No one wins.");
    return;
}

function game() {
    for (let i = 0; i < NUM_GAME; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        let score = playRound(playerSelection, computerSelection);
        totalScore(score);
    }
    gameWinner();
}


game();