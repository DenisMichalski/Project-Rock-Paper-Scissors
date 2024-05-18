let choice = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    for (let i = 0; i < choice.length; i++){
        return Math.floor(Math.random() * choice.length);
    }
    
}
