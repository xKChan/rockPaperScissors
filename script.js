// const prompt = require('prompt-sync')();

const NUM_GAME = 5;

let tie = 0;
let win = 0;
let lose = 0;


const btns = document.querySelectorAll("button");
const gameScore = document.querySelector('.gameScore');


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.value;
        let computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        totalScore(score);
        gameWinner();
    });
});

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
    // Clears game screen 
    while(gameScore.firstChild) {
        gameScore.removeChild(gameScore.lastChild);
    }

    const gamePicks = document.createElement('h2');
    gamePicks.textContent = `Player: ${playerSelection} // Computer: ${computerSelection}`;
    gameScore.appendChild(gamePicks);

    if (playerSelection == computerSelection) {
        const gameTie = document.createElement('p');
        gameTie.textContent = `It's a tie.`;
        gameScore.appendChild(gameTie);
        return "tie";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        const gameWin = document.createElement('p');
        gameWin.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        gameScore.appendChild(gameWin);
        return "win";
    } else {
        const gameLose = document.createElement('p');
        gameLose.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        gameScore.appendChild(gameLose);
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
    const scoreTotal = document.createElement('p');
    scoreTotal.textContent = `Player Score: ${win} || Computer Score: ${lose} || Ties: ${tie}`;
    gameScore.appendChild(scoreTotal);
}

function gameWinner() {
    if (win === 5 || lose === 5) {
        while (gameScore.firstChild) {
            gameScore.removeChild(gameScore.lastChild);
        }

        if (win === 5) {
            alert(`Player Wins! The score was ${win} to ${lose} .. New Game?`);
        } else if (lose === 5) {
            alert(`Player Loses! The score was ${win} to ${lose} .. New Game?`);
        }
    }
}
