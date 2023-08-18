let winCounter = 0;
let loseCounter = 0;
let playerSelection = "";

let btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function() {
    playerSelection = "rock";
    playGame(playerSelection, getComputerChoice());
});

let btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function() {
    playerSelection = "paper";
    playGame(playerSelection, getComputerChoice());
});

let btnScissor = document.querySelector("#scissor");
btnScissor.addEventListener("click", function() {
    playerSelection = "scissor";
    playGame(playerSelection, getComputerChoice());
});



function checkWinner() {
    if(winCounter < 5 && loseCounter < 5) return; //exit if there is no winner yet

    let result = document.getElementById("result");
    if(winCounter >= 5) {
        result.append(`You win! ${winCounter} - ${loseCounter} `);
        resetScore();
    }
    else if(loseCounter >= 5) {
        result.append(`You lose! ${loseCounter} - ${winCounter} `);
        resetScore();
    }
}

function resetScore() {
    winCounter = 0;
    loseCounter = 0;
}

function getComputerChoice() {
    let options = [
    'rock',
    'paper',
    'scissor'];

    let randomNumberSelection = Math.floor(Math.random() * options.length);

    return options[randomNumberSelection];
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Draw!';
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            loseCounter++;
        }
        else {
            winCounter++;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissor') {
            loseCounter++;
        }
        else {
            winCounter++;
        }
    }
    else if (playerSelection == 'scissor') {
        if (computerSelection == 'rock') {
            loseCounter++;
        }
        else {
            winCounter++;
        }
    }
    addScore();
}

function addScore() {
    document.getElementById("computerScore").innerHTML = loseCounter;
    document.getElementById("playerScore").innerHTML = winCounter;

    checkWinner();
}