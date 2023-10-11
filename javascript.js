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
function displayScore() {
    if (playerScore === 5 || computerScore === 5 ) {
       let finalResult = document.createElement('div');
       let playAgain = document.createElement('button');
       playAgain.addEventListener ("click", () => {
        playerScore =  0;
        computerScore = 0;
        playerScoreSection.textContent = 0;
        computerScoreSection.textContent = 0;
        finalResult.remove();
        playAgain.remove();
       });
        if (playerScore === 5) {
            finalResult.textContent = "Player Win!";
            resultsSection.appendChild(finalResult)
            playAgain.textContent = "Play Again?"
            resultsSection.appendChild(playAgain);

        }
        else {
        finalResult.textContent = "Computer Win!"  
        resultsSection.appendChild(finalResult)
        playAgain.textContent = "Play Again?"
        resultsSection.appendChild(playAgain);
        }
        
    }
    }

let playerScoreSection = document.querySelector("#playerScore");
let computerScoreSection = document.querySelector("#computerScore");

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}



function playRound () {
    const computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
        result= "Tie!";
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
        result= "Player Win!";
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
            result = "Computer Win!" ;
            return console.log(result)
        }
}   





    







