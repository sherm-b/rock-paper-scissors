function getComputerChoice(compChoice){
    let value = Math.floor(Math.random() * 3) + 1;
    if (value === 1){
        compChoice = "rock"
    } else if (value === 2){
        compChoice = "paper"
    } else if (value === 3){
        compChoice = "scissors"
    }
    return compChoice

}

function playRound(playerSelection, compSelection){
    compSelection = getComputerChoice();
    playerPreLower = prompt("Rock, Paper, or Scissors??? Choose wisely!", "")
    playerSelection = playerPreLower.toLowerCase();
    
    if (compSelection === playerSelection){
        resultTie = "TIE! No winners, no losers. How very boring..."
    } else if (compSelection === "rock" && playerSelection === "scissors"){
        resultCompWin = "YOU LOSE! Rock beats scissors! Embarrassing!!!"
    } else if (compSelection === "rock" && playerSelection === "paper"){
        resultPlayerWin = "you know, paper really shouldn't beat rock... it doesn't make sense... but you win. who cares."
    } else if (compSelection === "scissors" && playerSelection === "paper"){
        resultCompWin = "YOU LOSE!!! Wrong choice, dumbass! Scissors beats paper! PATHETIC!!!"
    } else if (compSelection === "scissors" && playerSelection === "rock"){
        resultPlayerWin = "bruh... i guess you win... rock beats scissors but i dont even care..."
    } else if (compSelection === "paper" && playerSelection === "rock"){
        resultCompWin = "AAAAAH GOTTEEEM! LOSER! Paper beats rock!!! Obviously!!!"
    } else if (compSelection === "paper" && playerSelection === "scissors"){
        resultPlayerWin = "whatever. you win this round. scissors beat paper. good for you..."
    }

    return resultTie || resultCompWin || resultPlayerWin;

}
