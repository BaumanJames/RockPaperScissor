let computerChoice = '';
let playerWins = 0;
let cpWins = 0;
let buttons = document.querySelectorAll('.click');
let winner = document.querySelector('.results');
function computerPlay (){
    let randomNumber = Math.random();
    if(randomNumber <= .333){
      return 'Rock';
    }else if (randomNumber > .333 && randomNumber <= .666){
      return 'Paper';
    } return 'Scissors'
}
  
function rPS(playerPH, computerInput){
  computerInput = computerPlay().toLowerCase();
  let playerChoice = playerPH.toLowerCase();

   if(playerChoice == computerInput){
      winner.innerHTML = "Tie! Go again!"
    console.log(winner);
    return winner
   } else if ((playerChoice == "rock" && computerInput == "scissors") ||
            (playerChoice == "paper" && computerInput == "rock") ||
            (playerChoice == "scissors" && computerInput == "paper")){
      playerWins= ++playerWins;
      winner.innerHTML = `You Win! ${playerChoice} beats ${computerInput}!`;
      console.log(winner)
      return winner
  } else 
        cpWins= ++cpWins
  ;
        winner.innerHTML = `You Lose! ${computerInput} beats ${playerChoice}!`;
  console.log(winner)
  return winner
}
console.log(winner)
document.querySelector('.buttons').addEventListener('click', function(e){ 
  let playerInput = e.toElement.textContent;
  (rPS(playerInput))
  
});
/*function game(){
    
    while(playerWins < 3 || cpWins < 3){
        let roundChoice = window.prompt("Rock, Paper, or Scissors?", "rock")
        rPS(roundChoice)
      console.log(playerWins);
console.log(cpWins);
    }
    
  }


game()
*/

