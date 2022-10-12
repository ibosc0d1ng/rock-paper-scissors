function random(number) {
    return Math.floor(Math.random() * number + 1);
    }
    
function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
    }

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

function getPlayerSelection(){
    let playerSelection = prompt('Rock, Paper or Scissors ?');
    playerSelection = capitalize(playerSelection);
    return playerSelection;
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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(
    `Player: ${playerSelection} vs Computer: ${computerSelection}` )
    
    console.log(roundResult);

    if (roundResult.search('You Won') > -1){
        playerScore++;
    } else if (roundResult.search('You Lost') > -1){
        computerScore++;
    }
}

    console.log('Final Results')
    console.log(
        `Player Score: ${playerScore} & Computer Score: ${computerScore}`
    );

    if (playerScore < computerScore){
        console.log('You Lost!')
    } else if (playerScore > computerScore){
        console.log("You Won!")
    } else {
        console.log("It's a Tie!")
    }

}

console.log(game());
