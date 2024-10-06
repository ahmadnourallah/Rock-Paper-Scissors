let humanScore = 0;
let computerScore = 0;
let round = 1;

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
    if (humanChoice === "rock") {
        if (computerChoice === "rock") { console.log("It's a tie!"); }
        else if (computerChoice === "paper") { console.log("You lose! Paper beats rock"); ++computerScore; }       
        else if (computerChoice === "scissors") { console.log("You win! Rock beats scissors"); ++humanScore; }

    } else if (humanChoice === "paper") {
        if (computerChoice === "paper") { console.log("It's a tie!"); }
        else if (computerChoice === "scissors") { console.log("You lose! Scissors beat paper"); ++computerScore; }       
        else if (computerChoice === "rock") { console.log("You win! Paper beats rock"); ++humanScore; }

    } else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") { console.log("It's a tie!"); }
        else if (computerChoice === "rock") { console.log("You lose! Rock beats scissors"); ++computerScore; }       
        else if (computerChoice === "paper") { console.log("You win! Scissors beat paper"); ++humanScore; }
    }
}

// if (humanScore > computerScore) {
//     console.log("You win the game! Your score is " + humanScore + ".");      
// } else if (computerScore > humanScore) {
//     console.log("The computer wins the game! Its score is " + computerScore + ".");      
// } else {
//     console.log("It's a tie! No one wins!");
// }