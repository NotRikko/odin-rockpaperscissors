let result = ""

let playerSelection = "";
let playerRock = document.querySelector("#rock")
let playerPaper = document.querySelector("#paper")
let playerScissors = document.querySelector("#scissors")

playerRock.addEventListener("click",() => {
    playerSelection = "rock"
});
playerPaper.addEventListener("click", () => {
    playerSelection= "paper"
});
playerScissors.addEventListener("click",() => {
    playerSelection = "scissors"
});

playerRock.addEventListener("click", playRound);
playerPaper.addEventListener("click", playRound);
playerScissors.addEventListener("click", playRound);

playerRock.addEventListener ("click", displayScore);
playerPaper.addEventListener("click", displayScore);
playerScissors.addEventListener("click", displayScore);

let playerScore = 0;
let computerScore = 0;
const resultsSection = document.querySelector("#gameOver");
let playButton = document.querySelectorAll(".playbutton");

let gameOver = false;

function displayScore() {
    if (gameOver === true) {
        return;
    }
    else if (playerScore === 5 || computerScore === 5 ) {
       let finalResult = document.createElement('div');
       let playAgain = document.createElement('button');
        playAgain.addEventListener ("click", () => {
        playerScore =  0;
        computerScore = 0;
        playerScoreSection.textContent = 0;
        computerScoreSection.textContent = 0;
        finalResult.remove();
        playAgain.remove();
        gameOver = false;
       });
        if (playerScore === 5) {
            finalResult.textContent = "Player Game Win!";
            resultsSection.appendChild(finalResult)
            playAgain.textContent = "Play Again?"
            resultsSection.appendChild(playAgain);
            playButton.disabled = true;
            gameOver= true;
        }
        else {
        finalResult.textContent = "Computer Game Win!"  
        resultsSection.appendChild(finalResult)
        playAgain.textContent = "Play Again?"
        resultsSection.appendChild(playAgain);
        playButton.disabled = true;
        gameOver = true;
        }   
    }
    else return;
    }

let playerScoreSection = document.querySelector("#playerScore");
let computerScoreSection = document.querySelector("#computerScore");

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

let currentResult = document.querySelector("#currentResult")

function playRound () {
    const computerSelection = getComputerChoice();
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    else {
        if (computerSelection === playerSelection) {
            result= "Tie!";
            currentResult.textContent = result;
            playerScoreSection.textContent = playerScore;
            computerScoreSection.textContent = computerScore
            return console.log((result))
        }
        else if (
            computerSelection === "rock" && playerSelection === "paper" || 
            computerSelection === "paper" && playerSelection === "scissors"  || 
            computerSelection ==="scissors" && playerSelection === "rock"
            )
        {   playerScore += 1;
            playerScoreSection.textContent = playerScore;
            computerScoreSection.textContent = computerScore
            result= "Player won the round!";
            currentResult.textContent=result;
            return console.log(result)
        }
        else if (
            computerSelection === "rock" && playerSelection === "scissors" ||
            computerSelection === "paper" && playerSelection === "rock" ||
            computerSelection === "scissors" && playerSelection === "paper"
            ) {
                computerScore += 1;
                computerScoreSection.textContent = computerScore
                playerScoreSection.textContent = playerScore;
                result = "Computer won the round!" ;
                currentResult.textContent=result;
                return console.log(result)
            }
        }

}   





    







