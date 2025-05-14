// Get buttons and score display elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

// Options for the game
const choices = ["rock", "paper", "scissors"];

// Function to get computer's move randomly
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

// Function to handle the game logic
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    if (winner === "user") {
        userScore++;
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else if (winner === "computer") {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    } else {
        resultText.textContent = "It's a draw!";
    }

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

// Event listeners
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
