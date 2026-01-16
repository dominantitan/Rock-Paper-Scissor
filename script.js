
const div = document.querySelector("div");

let humanScore = 0;
let computerScore = 0;



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



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    let computerChoice = getComputerChoice();
    if(button.id === "rock"){
        const humanChoice = "R";
        buttonAction(button,humanChoice,computerChoice);
    }else if(button.id === "scissors"){
        const humanChoice = "S";
        buttonAction(button,humanChoice,computerChoice);
    }else if(button.id === "paper"){
        const humanChoice = "P";        buttonAction(button,humanChoice,computerChoice);
    }
})

function buttonAction(button,humanChoice,computerChoice){
    button.addEventListener('click',() => {
            playRound(humanChoice,computerChoice);
            computerChoice = getComputerChoice();
        });
}



