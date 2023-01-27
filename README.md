# rock-paper-scissors
Created Rock, Paper, Scissors game.  
First was able to create a function that randomized a pick for the computer.  Used Math.random to generate a random number, and depending on the number it resulted in a pick for the Computer being either Rock, Paper, or Scissors.

The next function that was created was to determine a pick for the player.  A prompt window pops up asking the user what they want as their choice.  The answer is not case sensitive so the user can type 'ROcK or rOCK. or any other variation and itll still come up with the proper answer so the two variables can be compared. 

After creating the two main functions for the game, the next function created was one that initiated a one round game of rock paper scissors.  This function took the results of the first two functions (computerPick and PlayerPick) and compares the two returned values.  This function then determines the winner of the round and displays a message with the user either winning or losing.

After the one round game was created, the next step was to create a function that allows the game to run for 5 rounds.  Each round will calculate the winner and display a counter of the amount of wins for either the player or the computer.  After the 5 rounds are complete, the winner will be annouced as well as a total score for each the player and the computer. 

