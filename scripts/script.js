let computerChoice = '';
let playerWins = 0;
let cpWins = 0;
let buttons = document.querySelectorAll('.click');
let winner = document.querySelector('.results');
let retry = document.querySelector('#retry');

function computerPlay (){
    let randomNumber = Math.random();
    if(randomNumber <= .333){
      return 'Rock';
    }else if (randomNumber > .333 && randomNumber <= .666){
      return 'Paper';
    } return 'Scissors'
}
  
function keepCPScore (){
  let cpScoreboard = document.querySelector('#cpWins')

  cpScoreboard.textContent = `Computer Wins: ${cpWins}`;
}

function keepPlayerScore (){
  let playerScoreboard = document.querySelector('#playerWins')

  playerScoreboard.textContent = `Player Wins: ${playerWins}`;
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
      keepPlayerScore();
      winner.innerHTML = `You Win! ${playerChoice} beats ${computerInput}!`;
      console.log(winner)
      return winner
  } else 
        cpWins= ++cpWins;
        keepCPScore();
        winner.innerHTML = `You Lose! ${computerInput} beats ${playerChoice}!`;
  console.log(winner)
  return winner
}

function declareWinner (){
  buttons.disabled = true;
  if (playerWins > cpWins){
    winner.innerHTML = "Congrats! You beat the Computer!";
  } else winner.innerHTML = "The Computer Wins! Don't give up and try again!"
  
}
retry.addEventListener('click', function(e){
  playerWins = 0;
  cpWins = 0; 
  keepCPScore();
  keepPlayerScore();
  winner.innerHTML = "Play a round!"
  retry.setAttribute('hidden','true');
})
document.querySelector('.buttons').addEventListener('click', function(e){ 
  let playerInput = e.toElement.textContent;
  
  if (playerWins === 5 || cpWins === 5){
    declareWinner();
    retry.removeAttribute('hidden');
    return
  }
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

