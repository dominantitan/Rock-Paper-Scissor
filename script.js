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
    let input = prompt(message,"R");
    let hChoice = input;
    if(hChoice.toLowerCase() == "rock"){
        hChoice = "R";
    }else if(hChoice.toLowerCase() == "paper"){
        hChoice = "P";
    }else if(hChoice.toLowerCase() == "scissors"){
        hChoice = "S";
    }
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


function playRound(humanChoice,computerChoice){
    //start
    //IF humanChoice is Rock and computerChoice is Rock It's a draw
    //IF humanChoice is Rock and computerChoice is Paper computer wins and increase computerScore
    //IF humanChoice is Rock and computerChoice is Scissor human wins and increase humanScore
    
    //IF humanChoice is Paper and computerChoice is Rock human wins and increase humanScore
    //IF humanChoice is Paper and computerChoice is Paper It's a draw
    //IF humanChoice is Paper and computerChoice is Scissor computer wins and increase computerScore
    
    //IF humanChoice is Scissor and computerChoice is Rock computer wins and increase computerScore
    //IF humanChoice is Scissor and computerChoice is Paper human wins and increase humanScore
    //IF humanChoice is Scissor and computerChoice is Scissor It's draw

    //end

    let winMsg = "You win this round";
    let loseMsg = "You lose this round";
    let drawMsg = "It's a draw";

    if(humanChoice == "R"){
        if(computerChoice == "R"){
            console.log(drawMsg);
        }else if(computerChoice == "P"){
            computerScore++;
            console.log(loseMsg + ",paper beats rock");
        }else if(computerChoice == "S"){
            humanScore++;
            console.log(winMsg + ",rock beats scissors");
        }
    }else if(humanChoice == "P"){
        if(computerChoice == "R"){
            humanScore++;
            console.log(winMsg + ",paper beats rock");
        }else if(computerChoice == "P"){
            console.log(drawMsg);
        }else if(computerChoice == "S"){
            computerScore++;
            console.log(loseMsg + ",scissors beats paper");
        }
    }else if(humanChoice == "S"){
        if(computerChoice == "R"){
            computerScore++;
            console.log(loseMsg + ",rock beats scissors");
        }else if(computerChoice == "P"){
            humanScore++;
            console.log(winMsg + ",scissors beat paper");
        }else if(computerChoice == "S"){
            console.log(drawMsg);
        }
    }
    
}

function playGame(){
    for(let i = 0;i < 5;i++){

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log("round " + i + ":" + humanChoice + "," + computerChoice);
    }

    if(humanScore > computerScore){
        console.log("You win!!, you saved the world");
    }else {
        console.log("You lose!!, Now ai will takeover the world");
    }
}

playGame();

