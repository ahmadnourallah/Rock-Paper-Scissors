let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors only:");
    if (humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
    }
    return getHumanChoice();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

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

    while (round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }           

    if (humanScore > computerScore) {
        console.log("You win the game! Your score is " + humanScore + ".");      
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game! Its score is " + computerScore + ".");      
    } else {
        console.log("It's a tie! No one wins!");
    }
}

playGame();