const getComputerChoice = () => {
    let x = Math.random();
    if (x < 0.33) {
        return "Rock";
    } else if (x > 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const playRound = (playerSelection, computerSelection) => {
    console.log(`Player: ${playerSelection} // Computer: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        return `It's a tie.`;
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
                (playerSelection == "Paper" && computerSelection == "Rock") || 
                (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `Player wins!`;
    } else {
        return `Computer wins!`;
    }
}



const computerSelection = getComputerChoice();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));