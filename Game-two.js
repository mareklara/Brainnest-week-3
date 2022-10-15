const prompt = require('prompt-sync')();

let choices = ["rock", "paper", "scissors"];

function declareWinner(userInput, computerInput, message){
    if(userInput === computerInput){
        message += "It's a tie";
    }else if(computerInput > userInput){
        if(computerInput == 0 && userInput == 2){
            message += "Computer Wins";
        }else{
            message += "Player Wins";
        }
    } else{
        if(computerInput == 2 && userInput == 0){
            message += "Player Wins";
        } else{
            message += "Computer Wins";
        }
    }  
    return message;       
}

for(let i = 0; i < 5; i++){
    const userInput = prompt("Choose rock, paper or scissors: ").toLocaleLowerCase();

    let computerInput = choices[Math.floor(Math.random() * 3)];
    console.log('Computer Chose:' + computerInput);

    let message = "Player " + userInput + " vs Computer " + computerInput + " ";

    if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        console.log('Player Chose:' + userInput);
    } else{
        console.log("Try rock, paper or scissors.");
    }
    
    let declaration = declareWinner(userInput, computerInput, message);
    console.log(declaration);
    console.log();
}




    
        



