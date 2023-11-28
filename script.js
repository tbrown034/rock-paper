// Selectors
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const displayComputerChoice = document.getElementById(
  "display-computer-choice"
);
const displayPlayerChoice = document.getElementById("display-player-choice");
const outcomeText = document.getElementById("outcome-text");

// Game variables
let playerChoice = "";
let computerChoice = "";

// Function to randomly select computer's choice
const computerSelect = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  displayComputerChoice.textContent = `Computer's choice is ${computerChoice}`;
  displayComputerChoice.appendChild(createIconElement(computerChoice));
};

// Main game function
const playGame = () => {
  displayPlayerChoice.textContent = `Your choice is ${playerChoice}`;
  displayPlayerChoice.appendChild(createIconElement(playerChoice));
  computerSelect();
  checkWin();
};

// Function to create and return icon elements
function createIconElement(choice) {
  const icon = document.createElement("i");

  if (choice === "Rock") {
    icon.className = "fa-solid fa-hand-back-fist";
  } else if (choice === "Paper") {
    icon.className = "fa-solid fa-scroll";
  } else if (choice === "Scissors") {
    icon.className = "fa-solid fa-scissors";
  } else if (choice === "Winner") {
    icon.className = "fa-solid fa-trophy";
  } else if (choice === "Loser") {
    icon.className = "fa-solid fa-face-disappointed";
  } else if (choice === "Tie") {
    icon.className = "fa-solid fa-handshake";
  }

  return icon;
}

// Function to check the game's outcome
const checkWin = () => {
  outcomeText.innerHTML = ""; // Clear existing content

  if (computerChoice === playerChoice) {
    outcomeText.appendChild(document.createTextNode("It's a tie! "));
    outcomeText.appendChild(createIconElement("Tie"));
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    outcomeText.appendChild(
      document.createTextNode("You lose!!! Computer Wins ")
    );
    outcomeText.appendChild(createIconElement("Loser"));
  } else {
    outcomeText.appendChild(document.createTextNode("You win!!! "));
    outcomeText.appendChild(createIconElement("Winner"));
  }
};

// Helper functions for player's choice
const selectRock = () => {
  playerChoice = "Rock";
  playGame();
};
const selectPaper = () => {
  playerChoice = "Paper";
  playGame();
};
const selectScissors = () => {
  playerChoice = "Scissors";
  playGame();
};

// Event listeners for buttons
rockButton.addEventListener("click", selectRock);
paperButton.addEventListener("click", selectPaper);
scissorsButton.addEventListener("click", selectScissors);
