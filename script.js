let choice = ["rock", "paper", "scissors"];


// 1. Write the logic to get the computer choice

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choice.length);

    return choice[randomIndex];
}

// 2. Write the logic to get the human choice

function getHumanChoice() {
    let humanChoice = prompt(
        "Please enter your choice: Rock, Paper, or Scissors?"
    ).toLowerCase();
    while (!choice.includes(humanChoice)) {
        humanChoice = prompt(
            "Invalid choice! Please enter Rock, Paper, or Scissors:"
        ).toLowerCase();
    }
    return humanChoice;
}

// 3. Declare the players score variables

let humanScore = 0;

let computerScore = 0;

// 4. Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return {
            result: "tie",
            message: `It's a Tie! You both picked ${humanChoice}`,
        };
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return {
            result: "Win",
            message: `You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
                } beats ${computerChoice}`,
        };
    } else {
        computerScore++;
        return {
            result: "lose",
            message: `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                } beats ${humanChoice}`,
        };
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);
console.log(result.message)
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
