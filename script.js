const choices = ["rock", "paper", "scissors"];

// Function to get the computer's choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: Rock, Paper, or Scissors?");
    while (!humanChoice || !choices.includes(humanChoice.toLowerCase())) {
        if (!humanChoice) {
            console.log("Game cancelled.");
            return null;
        }
        humanChoice = prompt("Invalid choice! Please enter Rock, Paper, or Scissors:");
    }
    return humanChoice.toLowerCase();
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
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
            message: `You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}` 
        };
    } else {
        return { 
            result: "lose", 
            message: `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}` 
        };
    }
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === null) return; // Exit the game if the user cancels

        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult.message);

        if (roundResult.result === "win") {
            humanScore++;
        } else if (roundResult.result === "lose") {
            computerScore++;
        }

        console.log(`Round ${i + 1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
