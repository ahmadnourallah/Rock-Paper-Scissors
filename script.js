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

function reloadGame() {
    humanScore = computerScore = 0;

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    computerChoiceBtn.src = "question-solid.svg";
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

document.querySelector(".human-choice").addEventListener("click", event => {
    if (event.target.dataset.choice) {
        playRound(event.target.dataset.choice, getComputerChoice());
    }

    if (humanScore === 5) {
        announcementDisplay.textContent = "YOU WIN! Choose a hand to restart the game.";
        reloadGame();

    } else if (computerScore === 5) {
        announcementDisplay.textContent = "COMPUTER WINS! Choose a hand to restart the game.";
        reloadGame();
    }
});