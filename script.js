const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const choices = ["rock", "paper", "scissors"];



function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice == "Scissors" || computerChoice == "Rock" &&
        playerChoice == "Rock" || computerChoice == "Paper" &&
        playerChoice == "Paper" || computerChoice == "Scissors") {
        result = "You lost";
    } else if (playerChoice == "Rock" || computerChoice == "Scissors" &&
        playerChoice == "Paper" || computerChoice == "Rock" &&
        playerChoice == "Scissors" || computerChoice == "Paper") {
        result = "You win!!!"
    }
    else {
        result = "It's a tie";
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}

