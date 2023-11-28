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

// Delay variables in milliseconds
let playerChoiceDelay = 500;
let computerChoiceDelay = 3000;
let winnerResultDelay = 9000;

// Function to randomly select computer's choice
const computerSelect = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  displayComputerChoice.innerHTML = ""; // Clear existing content

  displayComputerChoice.appendChild(createIconElement(computerChoice));
  displayComputerChoice.appendChild(
    document.createTextNode(`Computer's choice is ${computerChoice} ...`)
  );
};

// Main game function
const playGame = () => {
  // Make the scoreboard visible
  document.getElementById("game-scoreboard").style.display = "flex";

  // Clear existing content and hide divs initially
  const textIconDivs = document.querySelectorAll(".text-icon");
  textIconDivs.forEach((div) => {
    div.innerHTML = "";
    div.style.opacity = 0;
  });

  // Show player's choice after a delay
  setTimeout(() => {
    displayPlayerChoice.innerHTML = ""; // Clear existing content

    displayPlayerChoice.appendChild(createIconElement(playerChoice));
    displayPlayerChoice.appendChild(
      document.createTextNode(`Your choice is ${playerChoice} ...`)
    );
    displayPlayerChoice.style.opacity = 1;
  }, playerChoiceDelay);

  // Show computer's choice after a longer delay
  setTimeout(() => {
    computerSelect();
    displayComputerChoice.style.opacity = 1;
  }, computerChoiceDelay);

  // Show the outcome after an even longer delay
  setTimeout(() => {
    checkWin();
    outcomeText.style.opacity = 1;
  }, winnerResultDelay);
};

// Function to create and return icon elements
function createIconElement(choice) {
  const icon = document.createElement("i");
  if (choice === "Rock") {
    icon.className = "fa-solid fa-block-brick";
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
    outcomeText.appendChild(createIconElement("Tie"));
    outcomeText.appendChild(document.createTextNode(" It's a tie!"));
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    outcomeText.appendChild(createIconElement("Loser"));
    outcomeText.appendChild(document.createTextNode(" You lose!"));
  } else {
    outcomeText.appendChild(createIconElement("Winner"));
    outcomeText.appendChild(document.createTextNode(" You win!!!!!!!!!!!!!"));
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
