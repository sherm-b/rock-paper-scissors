//gets computer player's choice

function getComputerChoice(){
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

//plays one round of rock - paper - scissors
//winValue 0 = tie ; 1 = comp ; 2 = player

function playRound(playerSelection){
    compSelection = getComputerChoice();

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

    return console.log(resultPkg)
}

//full game function. plays 5 rounds of rock - paper - scissors and keeps score.
//winner is announced at the end of the game.

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', playRound('rock'))

const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener('click', playRound('paper'))

const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener('click', playRound('scissors'))