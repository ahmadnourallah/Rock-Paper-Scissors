let humanScore = 0;
let computerScore = 0;

const announcementDisplay = document.querySelector(".announcement");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const computerChoiceBtn = document.querySelector(".computer-choice-btn");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    const choices = {0: "hand-rock-solid.svg", 1: "hand-paper-solid.svg", 2: "hand-scissors-solid.svg"};
    let choice = choices[randomNum];
    computerChoiceBtn.src = choice;

    return choice.split("-")[1];
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        announcementDisplay.textContent = "It's a tie!";
    
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        announcementDisplay.textContent = "You win!";
        humanScoreDisplay.textContent = `Human: ${++humanScore}`;

    } else {
        announcementDisplay.textContent = "You lose!";
        computerScoreDisplay.textContent = `Computer: ${++computerScore}`;
    }
}

// if (humanScore > computerScore) {
//     console.log("You win the game! Your score is " + humanScore + ".");      
// } else if (computerScore > humanScore) {
//     console.log("The computer wins the game! Its score is " + computerScore + ".");      
// } else {
//     console.log("It's a tie! No one wins!");
// }