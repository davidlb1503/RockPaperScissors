//global variables
let humanScore=0, computerScore=0;

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
function playGame(){
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
    if(humanScore<5 && computerScore<5){
        const selection = document.querySelector("div");
        selection.addEventListener("click",function(e){
            const option = e.target;
            switch(option.id){
                case 'rock': playRound("Rock",getComputerChoice()); 
                            wins();
                            break;
                case 'paper': playRound("Paper",getComputerChoice()); 
                            wins();
                            break;
                case 'scissors': playRound("Scissors",getComputerChoice()); 
                            wins();
                            break;
            };
        });
    }
}
function wins(){
    if (humanScore===5 || computerScore===5){
        if (humanScore>computerScore){
            alert("You won!");
        }  
        else {
            alert("Computer wins!")
        }         
    }
}
const k = playGame();