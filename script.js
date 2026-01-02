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
    let hchoice = prompt(message,"R");
    return hchoice;
}

function getComputerChoice(){
    
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

