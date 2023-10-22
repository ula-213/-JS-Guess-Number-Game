let randomNum = Math.floor(Math.random()*100) +1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResault");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess(){
    var userGuess = Number(guessField.value);

    if (guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + ", ";

    if(userGuess ===randomNum){
        lastResult.textContent = "Congratulation!";
        lastResult.style.color = "green";
        lowOrHigh.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "NO MORE TRIES, GAME OVER!";
        lastResult.style.color = "red";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong!";
        lastResult.style.color = "red";
        if(userGuess < randomNum){
            lowOrHigh.textContent = "Last guess was too low.";
        }else if(userGuess > randomNum){
            lowOrHigh.textContent = "Last guess was too high.";
        }
    }

    guessCount++;
    guessField.value="";
    guessField.focus();

}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    randomNum = Math.floor(Math.random() * 100)+1;
}

guessSubmit.addEventListener("click", checkGuess);