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

    let winValue = 0;
    
    if (compSelection === playerSelection){
        result = "TIE! No winners, no losers. How very boring..."
    } else if (compSelection === "rock" && playerSelection === "scissors"){
        winValue += 1;
        result = "YOU LOSE! Rock beats scissors! Embarrassing!!!"
    } else if (compSelection === "rock" && playerSelection === "paper"){
        winValue += 2
        result = "you know, paper really shouldn't beat rock... it doesn't make sense... but you win. who cares."
    } else if (compSelection === "scissors" && playerSelection === "paper"){
        winValue += 1
        result = "YOU LOSE!!! Wrong choice, dumbass! Scissors beats paper! PATHETIC!!!"
    } else if (compSelection === "scissors" && playerSelection === "rock"){
        winValue += 2;
        result = "bruh... i guess you win... rock beats scissors but i dont even care..."
    } else if (compSelection === "paper" && playerSelection === "rock"){
        winValue +=1
        result = "AAAAAH GOTTEEEM! LOSER! Paper beats rock!!! Obviously!!!"
    } else if (compSelection === "paper" && playerSelection === "scissors"){
        winValue += 2
        result = "whatever. you win this round. scissors beat paper. good for you..."
    }

    let resultPkg = [winValue, result]

    return resultPkg
}

function game(){
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++){
        results = playRound()
        if (results[0] === 0){
            console.log(`${results[1]}`);
            console.log(`No change in score. Player :${playerScore} Computer :${compScore}`);
        } else if (results[0] === 1){
            console.log(`${results[1]}`);
            console.log("Computer scores. Player :" + playerScore + " Computer:" + ++compScore);
        } else if (results[0] === 2){
            console.log(`${results[1]}`);
            console.log("Player scores. Player :" + ++playerScore + " Computer:" + compScore)
        }
    }

    if (playerScore > compScore){
        console.log("PLAYER WINS! Congratulations! You just beat a random number generator at a game of chance!!")
    } else {
        console.log("COMPUTER WINS! BOO-YAH! YOU SUCK!")
    }
}