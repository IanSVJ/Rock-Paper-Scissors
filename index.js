let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

function checkWinner(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
       return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
      
}

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection)
   if(result == "Tie"){
     return "Tie! no one wins"
   }
   else if (result == "Player"){
     return `You win! ${playerSelection} beats ${computerSelection}`
   }
   else{
     return `You Lose! ${computerSelection} beats ${playerSelection}`
   }
}
function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
       let choice = prompt("Rock, Paper, or Scissors?");
     if(choice  == null){
       continue;
     }
      let lowerCase = choice.toLowerCase();
      if(options.includes(lowerCase)){
        validInput == true;
        return lowerCase;
      }
    }

}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
   for (let i = 0; i < 5; i++) {
     let playerSelection = getPlayerChoice();
     let computerSelection = getComputerChoice();
     console.log(playRound(playerSelection, computerSelection));
     if(checkWinner(playerSelection, computerSelection) == "Player"){
     scorePlayer++;
     }
     else if(checkWinner(playerSelection, computerSelection) == "Computer"){
     scoreComputer++;
     }

   }
   if(scorePlayer > scoreComputer){
    console.log("You won the game!")
   }
   else if(scorePlayer < scoreComputer){
   console.log("You lost the game!")
 }
 else{
    console.log("We have a tie!")
 } 
}
 game();