const getComputerChoice = () => {
    let x = Math.random();
    if (x < 0.33) {
        console.log("rock");
        return "Rock";
    } else if (x > 0.66) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

