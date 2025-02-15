//code for computer's choice
function getComputerChoice(){
    var choice = Math.floor(Math.random()*3);
    if (choice===0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
// code to get human choice
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice:\n0:Rock\n1:Paper\n2:Scissors\n");
    if (parseInt(humanChoice)===0){    
        return "Rock";
    }
    else if (parseInt(humanChoice) === 1){
        return "Paper";
    }
    else { 
        // if (parseInt(humanChoice) === 2)
        return "Scissors";
    }
}

function playGame(){
    let humanScore=0, computerScore=0;
    function playRound(humanChoice,computerChoice){
        if (humanChoice === computerChoice){
            console.log("It's a tie!");
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissors"){
            ////console.log("You win!");
            humanScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock"){
            //console.log("Computer wins!");
            computerScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock"){
            ////console.log("You win!");
            humanScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        else if (humanChoice === "Rock" && computerChoice === "Paper"){
            //console.log("Computer wins!");
            computerScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors"){
            //console.log("Computer wins!");
            computerScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            //////console.log("You win!");
            humanScore+=1;
            console.log("Your score is",humanScore);
            console.log("Computer's score is",computerScore);
        }
        return humanScore,computerScore;
    }
    let k = 4;
    while(k!==0){
        var c = playRound(getHumanChoice(),getComputerChoice());
        // console.log("\n");
        console.log(c);
        k--;
    } 
}
playGame();