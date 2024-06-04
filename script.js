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
// console.log(getComputerChoice());


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

getHumanChoice();


// Declare the players score variables

