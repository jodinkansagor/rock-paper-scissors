import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

const gameButton = document.getElementById('game-button');
const resetButton = document.getElementById('reset-button');
// const summary = document.getElementById('summary');
const yourGuess = document.getElementById('your-guess');
const computerGeneratedGuess = document.getElementById('computer-guess');
const whoWon = document.getElementById('who won');
const howManyWins = document.getElementById('count-win');
const howManyLosses = document.getElementById('count-loss');
const howManyDraws = document.getElementById('count-draws');


//set initial state
// let correctGuess = 0;
let countWin = 0;
let countLoss = 0;
let countDraw = 0;
let userSelection;


//define DOM utility
const hardReset = () => {
    countDraw = 0;
    countWin = 0;
    countLoss = 0;
    console.log(countWin, countLoss, countDraw);
    updateSpans();
};

const updateSpans = () => {
    howManyDraws.textContent = countDraw        
    howManyWins.textContent = countWin;
    howManyLosses.textContent = countLoss;
};

const playGame = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelection = selectedRadioButton.value;
    console.log(userSelection, 'user guess');
    const randomThrow =  getRandomThrow(); 
    console.log(randomThrow, 'computer guess');
    const didYouWin = checkResult(userSelection, randomThrow);
    console.log(didYouWin);


    if (didYouWin === 0) {
        whoWon.textContent = 'It\'s a draw!';
        countDraw++;
        howManyDraws.textContent = countDraw        
    } else if (didYouWin === 1) {
        whoWon.textContent = 'You win!';
        countWin++;
        howManyWins.textContent = countWin;
    } else if (didYouWin === -1) {
        whoWon.textContent = 'You lost!';
        countLoss++;
        howManyLosses.textContent = countLoss;
    }

    yourGuess.textContent = userSelection.toUpperCase();
    computerGeneratedGuess.textContent = randomThrow;
};



// const result = checkResult(userSelection, computerGuess);

gameButton.addEventListener('click', playGame);
resetButton.addEventListener('click', hardReset);