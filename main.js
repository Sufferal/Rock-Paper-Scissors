const scoreElem = document.querySelector("#score");
const resultElem = document.querySelector("#result");

const rockElem = document.querySelector("#rock-pick");
const paperElem = document.querySelector("#paper-pick");
const scissorsElem = document.querySelector("#scissors-pick");
const gameArr = [rockElem, paperElem, scissorsElem];

const computerImgElem = document.querySelector("#computer-img");

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
      computerImgElem.src = "./img/rock.png";
      computerImgElem.alt = "rock";
      break;
      
    case 1:
      computerPick = "paper";
      computerImgElem.src = "./img/paper.png";
      computerImgElem.alt = "paper";
      break;
        
    case 2:
      computerPick = "scissors";
      computerImgElem.src = "./img/scissors.png";
      computerImgElem.alt = "scissors";
      break;

    default:
      console.log("[ERROR]: Invalid number");
      break;
  }

  return computerPick;
}

let playerScore = computerScore = 0;
function playerDraw() {
  resultElem.innerHTML = `Result: 
  <span class="result result-draw">
    Draw
  </span>`;
}

function getScoreStyle() {
  if(playerScore == computerScore) {
    return "draw";
  } else if (playerScore > computerScore) {
    return "winner";
  } else if (playerScore < computerScore) {
    return "loser";
  } 
}

function playerWin() {
  playerScore++;

  let scoreStyle = getScoreStyle();

  scoreElem.innerHTML = `Score: 
  <span class="score score-${scoreStyle}">
    ${playerScore} - ${computerScore}
  </span>`;

  resultElem.innerHTML = `Result: 
  <span class="result result-winner">
    You won
  </span>`;
}

function playerLose() {
  computerScore++;

  let scoreStyle = getScoreStyle();
  
  scoreElem.innerHTML = `Score: 
  <span class="score score-${scoreStyle}">
    ${playerScore} - ${computerScore}
  </span>`;
  
  resultElem.innerHTML = `Result: 
  <span class="result result-loser">
    You lost
  </span>`;
}

function game(e) {
  let playerPick = getPlayerPick(e);
  let computerPick = getComputerPick();

  console.log("Player pick: " + playerPick);
  console.log("Computer pick: " + computerPick);

  if (playerPick == computerPick) {
    console.log("draw");
    playerDraw();
  }

  if (playerPick == "rock" && computerPick == "paper") {
    console.log("You lose");
    playerLose();
  } else if (playerPick == "rock" && computerPick == "scissors") {
    console.log("You win");
    playerWin();
  }
  
  if (playerPick == "paper" && computerPick == "scissors") {
    console.log("You lose");
    playerLose();
  } else if (playerPick == "paper" && computerPick == "rock") {
    console.log("You win");
    playerWin();
  }
  
  if (playerPick == "scissors" && computerPick == "rock") {
    console.log("You lose");
    playerLose();
  } else if (playerPick == "scissors" && computerPick == "paper") {
    console.log("You win");
    playerWin();
  }
}