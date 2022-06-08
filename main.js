const rockElem = document.getElementById("rock-pick");
const paperElem = document.getElementById("paper-pick");
const scissorsElem = document.getElementById("scissors-pick");
const gameArr = [rockElem, paperElem, scissorsElem];

Array.from(gameArr).forEach(elem => {
  elem.addEventListener('click', getPlayerPick);
  elem.addEventListener('click', game);
});

function getPlayerPick(e) {
  return e.target.alt;
}

function getComputerPick() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerPick = "";

  switch(randomNumber) {
    case 0:
      computerPick = "rock";
      break;

    case 1:
      computerPick = "paper";
      break;

    case 2:
      computerPick = "scissors";
      break;

    default:
      console.log("[ERROR]: Invalid number");
      break;
  }

  return computerPick;
}

function game(e) {
  let playerPick = getPlayerPick(e);
  let computerPick = getComputerPick();

  console.log("Player pick: " + playerPick);
  console.log("Computer pick: " + computerPick);

  if (playerPick == computerPick) {
    console.log("draw");
  }

  if (playerPick == "rock" && computerPick == "paper") {
    console.log("You lose");
  } else if (playerPick == "rock" && computerPick == "scissors") {
    console.log("You win");
  }

  if (playerPick == "paper" && computerPick == "scissors") {
    console.log("You lose");
  } else if (playerPick == "paper" && computerPick == "rock") {
    console.log("You win");
  }

  if (playerPick == "scissors" && computerPick == "rock") {
    console.log("You lose");
  } else if (playerPick == "scissors" && computerPick == "paper") {
    console.log("You win");
  }
}