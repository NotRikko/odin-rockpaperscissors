/*
Player inputs a value from one of three 
    (rock, paper, scissors)
const playerChoice = ()
Computer retrieves a value from one of three
    (rock, paper, scissors)
*/
/*
Player input is compared to computer input
If player input > computer input
    Declare player win
    Player score increase by 1
*/

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}



let result = ""

let playerScore = 0
let computerScore = 0


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
playerScissors=addEventListener("click", playRound);

function playRound () {
    const computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {
        return result= "Tie!"
    }
    else if (
        computerSelection === "rock" && playerSelection === "paper" || 
        computerSelection === "paper" && playerSelection === "scissors"  || 
        computerSelection ==="scissors" && playerSelection === "rock"
        )
    {   playerScore += 1
        result= "Player Win!"
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
        ) {
            computerScore += 1
            result = "Computer Win!" 
        }
}   


const blank = document.getElementById("blank")



    







/*function game() {
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection,playerSelection))
}
*/
/*
function game() {
    let i = 0 
    let result = playRound();
    while (i<5) {
        playRound(playerSelection,computerSelection);
            if (playRound() === 1) {
            console.log("Tie!")
            }
            else if (playRound() === 2) {
            console.log("Player Win!")
            }
            else console.log("Computer Win!")
        i++;
    }
}


/*
If Player input < Computer input 
    Declare computer win
    Computer score increase by 1
Repeat game 5 times
After 5 loops end game
    If player score> computer score
        Declare Player Victory
    If player score < computer score
        Declare Computer Victory
*/
