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

let roundOutput = document.getElementById('round-output')
let playerScoreCounter = document.getElementById('player-score')
let compScoreCounter = document.getElementById('computer-score')
let scorePlayer = 0;
let scoreComp = 0;
let resultPkg = [0, ""];

const startBtn = document.getElementById('start-game')
startBtn.addEventListener('click', () => {
    newGame()
})

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', () => {
    playRound('rock')
    if (roundOutput.textContent == ''){
        return
    } else if (scorePlayer == 5 || scoreComp == 5){
        return
    } else if (resultPkg[0] == 1 && scoreComp < 4){
        roundOutput.textContent = resultPkg[1];
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
    } else if (resultPkg[0] == 2 && scorePlayer < 4){
        roundOutput.textContent = resultPkg[1];
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
    } else if (resultPkg[0] == 1 && scoreComp == 4){
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
        roundOutput.textContent = 'Paper beats rock. Computer Wins. Try again by clicking the "New Game" button'
    } else if (resultPkg[0] == 2 && scorePlayer == 4){
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
        roundOutput.textContent = 'Rock beats scissors. You Win! Congratulations! Play again by clicking the "New Game" button'
    } else {
        roundOutput.textContent = resultPkg[1];
    }
})

const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener('click', () => {
    playRound('paper')
    if (roundOutput.textContent == ''){
        return
    } else if (scorePlayer == 5 || scoreComp == 5){
        return
    } else if (resultPkg[0] == 1 && scoreComp < 4){
        roundOutput.textContent = resultPkg[1];
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
    } else if (resultPkg[0] == 2 && scorePlayer < 4){
        roundOutput.textContent = resultPkg[1];
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
    } else if (resultPkg[0] == 1 && scoreComp == 4){
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
        roundOutput.textContent = 'Scissors beat paper. Computer Wins. Try again by clicking the "New Game" button'
    } else if (resultPkg[0] == 2 && scorePlayer == 4){
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
        roundOutput.textContent = 'Paper beats rock. You Win! Congratulations! Play again by clicking the "New Game" button'
    } else {
        roundOutput.textContent = resultPkg[1];
    }
})

const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener('click', () => {
    playRound('scissors')
    if (roundOutput.textContent == ''){
        return
    } else if (scorePlayer == 5 || scoreComp == 5){
        return
    } else if (resultPkg[0] == 1 && scoreComp < 4){
        roundOutput.textContent = resultPkg[1];
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
    } else if (resultPkg[0] == 2 && scorePlayer < 4){
        roundOutput.textContent = resultPkg[1];
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
    } else if (resultPkg[0] == 1 && scoreComp == 4){
        ++scoreComp
        compScoreCounter.textContent = `${scoreComp}`
        roundOutput.textContent = 'Rock beats scissors. Computer Wins. Try again by clicking the "New Game" button'
    } else if (resultPkg[0] == 2 && scorePlayer == 4){
        ++scorePlayer
        playerScoreCounter.textContent = `${scorePlayer}`
        roundOutput.textContent = 'Scissors beat paper. You Win! Congratulations! Play again by clicking the "New Game" button'
    } else {
        roundOutput.textContent = resultPkg[1];
    }
})

function newGame() {
    roundOutput.textContent = "Choose Your Weapon!"
    scorePlayer = 0
    scoreComp = 0
    playerScoreCounter.textContent = `${scorePlayer}`
    compScoreCounter.textContent = `${scoreComp}`
}



//plays one round of rock - paper - scissors
//winValue 0 = tie ; 1 = comp ; 2 = player

function playRound(playerSelection){
    compSelection = getComputerChoice();
    let winValue = 0

    
    
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
    resultPkg = [winValue, result]

    return resultPkg
}