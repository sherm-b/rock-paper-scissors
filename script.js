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

    let compWin = 0
    let playerWin = 0
    let tie = 0
    
    if (compSelection === playerSelection){
        tie += 1
        result = "TIE! No winners, no losers. How very boring..."
    } else if (compSelection === "rock" && playerSelection === "scissors"){
        compWin += 1;
        result = "YOU LOSE! Rock beats scissors! Embarrassing!!!"
    } else if (compSelection === "rock" && playerSelection === "paper"){
        playerWin += 1
        result = "you know, paper really shouldn't beat rock... it doesn't make sense... but you win. who cares."
    } else if (compSelection === "scissors" && playerSelection === "paper"){
        compWin += 1
        result = "YOU LOSE!!! Wrong choice, dumbass! Scissors beats paper! PATHETIC!!!"
    } else if (compSelection === "scissors" && playerSelection === "rock"){
        playerWin +=1
        result = "bruh... i guess you win... rock beats scissors but i dont even care..."
    } else if (compSelection === "paper" && playerSelection === "rock"){
        compWin +=1
        result = "AAAAAH GOTTEEEM! LOSER! Paper beats rock!!! Obviously!!!"
    } else if (compSelection === "paper" && playerSelection === "scissors"){
        playerWin +=1
        result = "whatever. you win this round. scissors beat paper. good for you..."
    }

    return result
}

function game(){
    for
}