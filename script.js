/*start
ask user for choice(with option scissor paper or rock)
take the choice of computer
compare the choice 
declare the winner for that round
give 1 point to winner for winning
store the score of human and computer
play 5 rounds
declare the winner for the game
end

*/

let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    const message = "Give your Choice 'R' for Rock , 'P' for Paper and 'S' for Scissors";
    let hChoice = prompt(message,"R");
    return hChoice;
}

function getComputerChoice(){
    //start
    //Get random number between 0 and 100
    let randomNumber = Math.floor(Math.random()*100);
    let cChoice = "R";
    //if number is between 0 and 33  return Rock
    if(randomNumber < 34){
        cChoice = "R";
    }else if(randomNumber < 67){
    //if number is between 34 and 66 return Paper
        cChoice = "P";
    }else{
    //if number is between 67 and 100 return Scissors
        cChoice = "S";
    }
    return cChoice;
    //end
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice,computerChoice){

}

function playGame(){
    for(let i = 0;i < 5;i++){
        playRound();
    }
}

