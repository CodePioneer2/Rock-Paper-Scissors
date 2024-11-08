const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let playerChoice;
  do {
    playerChoice = prompt('Choose: Rock, Paper or Scissors').toLowerCase();
  } while (!choices.includes(playerChoice));
  return playerChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let result = '';
    switch (true) {
      case computerChoice === humanChoice:
        result = `It's tie
        You both selected ${computerChoice}
        Score: ${humanScore} - ${computerScore}`;
        break;
      case humanChoice === 'rock' && computerChoice === 'scissors':
      case humanChoice === 'paper' && computerChoice === 'rock':
      case humanChoice === 'scissors' && computerChoice === 'paper':
        humanScore++;
        result = `You win! 
        You selected ${humanChoice} and computer selected ${computerChoice}.
        Score: ${humanScore} - ${computerScore}`;
        break;
      default:
        computerScore++;
        result = `You lose!
        You selected ${humanChoice} and computer selected ${computerChoice}.
        Score: ${humanScore} - ${computerScore}`;
        break;
    }
    return result;
  }

  while (humanScore < 5 && computerScore < 5) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
}
