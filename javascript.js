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



let result =""

function playRound (playerChoice) {
    const computerSelection = getComputerChoice();
    const playerSelection = playerChoice.toLowerCase();
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

let playerScore = 0
let computerScore = 0

let completedGames = 0
let totalGames = 5
function game () {
    for (let i = 0; i<totalGames; i++ ) {
        let playerChoice = prompt("Choose your attack");
        playRound(playerChoice);
        window.alert(result+"Player Score:"+playerScore+"Computer Score:"+computerScore);
        completedGames += 1;
        if (completedGames === totalGames) {
            
            if (playerScore > computerScore) {
            return window.alert("Player Win!"), blank.textContent=("Player Win!")
            }
            else if (playerScore < computerScore) {
            return window.alert("Computer Win!"), blank.textContent=("Computer Win!")
            }
            else return window.alert("It's a tie!"), blank.textContent=("Tie!")
        }
    }
}
game();


    







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
