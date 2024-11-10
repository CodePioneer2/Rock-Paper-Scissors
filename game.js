const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.value, getComputerChoice());
  });
});
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

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = '';
  resultDiv.innerHTML = '';
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

  if (computerScore === 5) {
    result += '<br><hr>Computer wins the game! Play again?';
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    result += '<br><hr>Human wins the game! Play again?';
    computerScore = 0;
    humanScore = 0;
  }
  resultDiv.innerHTML = result;
}
