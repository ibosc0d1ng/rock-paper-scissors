const images = Array.from(document.querySelectorAll('.card-image'));
const scorePlayer = document.querySelector('.player-score')
const scoreComputer = document.querySelector('.computer-score')
const selectionPlayer = document.querySelector('.player-selection')
const selectionComputer = document.querySelector('.computer-selection')
const message = document.querySelector('.message');


let playerScore = 0;
let computerScore = 0;


    images.forEach((image) => 
        image.addEventListener('click', () => {
            if (playerScore >= 5 || computerScore >= 5) {
                return;
              }
            game(image.dataset.image);
        })
    );


function getComputerChoice() {
    let computerNumber = random(3)
    let computerGuess = ''

    switch(computerNumber) {
        case 1:
            computerGuess='Rock'
            break;
        case 2:
            computerGuess='Paper'
            break;
        case 3:
            computerGuess='Scissors'
            break;
        default:
        break;
    }
    return computerGuess;
}


function playRound(playerSelection, computerSelection){
    let log =''

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock'){
            log = "It's a Tie!";
        } else if (computerSelection === 'Paper') {
            log = 'You Lost! Paper beats Rock';
        } else {
            log = 'You Won! Rock beats Scissors';
        }

    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissors'){
            log = 'You Lost! Scissors beats Paper';
        } else if (computerSelection === 'Rock') {
            log = 'You Won! Paper beats Rock';
        } else {
            log = "It's a Tie!";
        }

    } else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock'){
            log = 'You Lost! Rock beats Scissors';
        } else if (computerSelection === 'Paper'){
            log = 'You Won! Scissors beats Paper';
        } else {
            log = "It's a Tie!";
        }
    }
    
return log;
}

function createParaWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}


function game(playerSelect){

    let computerSelection = getComputerChoice();
    let playerSelection = capitalize(playerSelect);
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.search('You Won') > -1){
        playerScore++;
    } else if (roundResult.search('You Lost') > -1){
        computerScore++;
    }



scorePlayer.textContent = playerScore;
scoreComputer.textContent = computerScore;

selectionPlayer.appendChild(createParaWithText(playerSelection));
selectionComputer.appendChild(createParaWithText(computerSelection));

if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over. You Win!';
  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lose!';
  }

}


function random(number) {
    return Math.floor(Math.random() * number + 1);
    }
    
function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
    }