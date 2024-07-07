// Array of choices
const choices = ["rock", "paper", "scissors"];

// Initial scores
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = determineRoundResult(humanChoice, computerChoice);
    displayResult(roundResult);
    updateScore(roundResult.result);
    checkEndGame();
}

// Function to determine the result of a round
function determineRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return { result: "tie", message: `It's a Tie! You both picked ${humanChoice}` };
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return { 
            result: "win", 
            message: `You Win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}` 
        };
    } else {
        return { 
            result: "lose", 
            message: `You Lose! ${computerChoice} beats ${capitalizeFirstLetter(humanChoice)}` 
        };
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to display the result on the page
function displayResult(roundResult) {
    const resultsDisplay = document.getElementById('results');
    resultsDisplay.textContent = roundResult.message;
}

// Function to update the score and display it
function updateScore(result) {
    const scoreDisplay = document.getElementById('score');
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

// Function to check if the game should end
function checkEndGame() {
    if (humanScore === 5) {
        announceWinner("You");
        resetGame();
    } else if (computerScore === 5) {
        announceWinner("Computer");
        resetGame();
    }
}

// Function to announce the winner
function announceWinner(winner) {
    const resultsDisplay = document.getElementById('results');
    resultsDisplay.textContent = `${winner} wins the game!`;

    // Optionally, you can reset the scores here if needed
    // humanScore = 0;
    // computerScore = 0;
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
