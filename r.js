const choices = ["rock", "paper", "scissors"];

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win the game!";
    } else {
        return "Computer wins the game!";
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById("m1");
    resultElement.innerHTML = `
        You chose <strong>${playerChoice}</strong>.<br>
        Computer chose <strong>${computerChoice}</strong>.<br>
        Result: <strong>${result}</strong>
    `;
}
