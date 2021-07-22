let computerChoice = '';
let playerWins = 0;
let cpWins = 0;
    
function computerPlay (){
    let randomNumber = Math.random();
    if(randomNumber <= .333){
      return 'Rock';
    }else if (randomNumber > .333 && randomNumber <= .666){
      return 'Paper';
    } return 'Scissors'
}
function rPS(playerInput, computerInput){
  computerInput = computerPlay().toLowerCase();
  let playerChoice = playerInput.toLowerCase();
  let winner = '';
   if(playerChoice == computerInput){
      winner = "Tie! Go again!"
    console.log(winner);
    return winner
   } else if ((playerChoice == "rock" && computerInput == "scissors") ||
            (playerChoice == "paper" && computerInput == "rock") ||
            (playerChoice == "scissors" && computerInput == "paper")){
      playerWins= ++playerWins;
      winner = `You Win! ${playerChoice} beats ${computerInput}!`;
      console.log(winner)
      return winner
  } else 
        cpWins= ++cpWins
  ;
        winner = `You Lose! ${computerInput} beats ${playerChoice}!`;
  console.log(winner)
  return winner
}
function game(){
    
    while(playerWins < 3 || cpWins < 3){
        let roundChoice = window.prompt("Rock, Paper, or Scissors?", "rock")
        rPS(roundChoice)
      console.log(playerWins);
console.log(cpWins);
    }
    
  }


game()

