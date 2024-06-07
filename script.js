let choice = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//     for (let i = 0; i < choice.length; i++){
//         return Math.floor(Math.random() * choice.length);
//         getComputerChoice.toString();
//     }

// }

// Write the logic to get the computer choice

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choice.length);

    return choice[randomIndex];
}

//console.log(getComputerChoice());


// Write the logic to get the human choice

function getHumanChoice() {
    choice = prompt("please enter your choice?");
    if (choice === "rock") {
        console.log("rock");
        return choice;
    } else if (choice === "paper") {
        console.log("paper");
        return choice;
    } else if (choice === "scissors") {
        console.log("scissors");
        return choice;
    } else {
        console.log("No Vaild Parameter!");
    }
}

// getHumanChoice();


// Declare the players score variables

let humanScore = 0;

let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
     
    if(humanSelection === computerSelection) {
        return `It's a Tie! You both picked ${humanSelection}`;
    } else if(humanSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! Rock beats Scissors`;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! Paper beats Rock`;
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! Scissors beats Paper`;
    } else {
        `You Lose! ${computerSelection} beats ${humanSelection}`;
    }

} 
// const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);