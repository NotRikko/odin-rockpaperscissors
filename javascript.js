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





function playRound (playerChoice) {
    const computerSelection = getComputerChoice();
    const playerSelection = playerChoice;
    if (computerSelection === playerSelection) {
        return "Tie!"
    }
    else if (
        computerSelection === "rock" && playerSelection === "paper" || 
        computerSelection === "paper" && playerSelection === "scissors"  || 
        computerSelection ==="scissors" && playerSelection === "rock"
        )
    {
        return "Player Win!"
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
        ) {
            return "Computer Win!"
        }
}   

let playerChoice = prompt("Choose your attack");
let result = playRound(playerChoice);
function game () {
    for (let i = 0; i<5; i++ ) {
        let playerChoice = prompt("Choose your attack");
        let result = playRound(playerChoice);
        playRound(playerChoice);
        console.log(playRound(playerChoice));
        window.alert(result) 
        if ""
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
