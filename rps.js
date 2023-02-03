
      let win = 0;
      let lose = 0;
      let tie = 0;  

      function getComputerChoice() {
        let pick = Math.random();
        if (pick >= 0.66) {
          return 'Rock';
        }
        else if (pick <= 0.33) {
          return 'Paper';
        }
        else {
          return 'Scissors';
        }
      }

      function playRound(playerSelection) {
        let computerSelection = getComputerChoice();

        computerPick.textContent = 'Computer Picked: ' + computerSelection;
        
        playerPick.textContent = 'Player Picked: ' + playerSelection;



        displayPicks.appendChild(computerPick);
        displayPicks.appendChild(playerPick);



          if (win < 5 && lose < 5) { 
           if (playerSelection === computerSelection) {
            tie = tie + 1
            winner.textContent = "It's a TIE!";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);
          }

          else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            lose = lose + 1
            winner.textContent = "You LOSE! Rock loses to Paper";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);

          }
          else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            win = win + 1
            winner.textContent = "You WIN! Rock beats Scissors";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);
          }
          else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            win = win + 1
            winner.textContent = "You WIN! Paper beats Rock";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);
          }
          else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            lose = lose + 1
            winner.textContent = "You LOSE! Paper loses to Scissors";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);

          }
          else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            win = win + 1
            winner.textContent = "You WIN! Scissors beats Paper";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);
          }
          else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            lose = lose + 1
            winner.textContent = "You LOSE! Scissors loses to Rock";
            displayPicks.appendChild(winner);
            score.textContent = `Player - ${win} // Computer - ${lose}`
            displayPicks.appendChild(score);
          }
        }
        else {
          gameWinner();
        }
      }

      function gameWinner() {
        if (win > lose) {
          alert(`You WIN! The score: Player - ${win} // Computer - ${lose}`);
        }
        else if (lose > win) {
          alert(`You LOSE! The score: Player - ${win} // Computer - ${lose}`);
        }
      }

      const rockBtn = document.querySelector('#rockBtn');
      rockBtn.addEventListener('click', () =>  {
        playerSelection = 'Rock'; 
        console.log(playRound(playerSelection));
      }); 

      const paperBtn = document.querySelector('#paperBtn');
      paperBtn.addEventListener('click', () =>  {
        playerSelection = 'Paper'; 
        console.log(playRound(playerSelection));
      }); 

      const scissorsBtn = document.querySelector('#scissorsBtn');
      scissorsBtn.addEventListener('click', () =>  {
        playerSelection = 'Scissors'; 
        console.log(playRound(playerSelection));
      }); 
      
      const displayPicks = document.querySelector('#results')
      const score = document.createElement('div');
      const computerPick = document.createElement('div');
      const winner = document.createElement('div');
      winner.classList.add('winner');
      const playerPick = document.createElement('div');
      const winnerOfGame = document.createElement('div');
