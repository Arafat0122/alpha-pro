// function play(){
//     // hide the home screen
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('get-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if(playerPressed === expectedAlphabet){
        // update score
        const currentScoreElement = document.getElementById('score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        // start new game
        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement = document.getElementById('life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('get-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColorByID(alphabet);
}

function play(){
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play-ground');

    setTextElementValueByID('life', 5);
    setTextElementValueByID('score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('score');
    setTextElementValueByID('your-score', lastScore);

    // clear last alphabet
    const currentAlphabet = getElementTextById('get-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorByID(currentAlphabet);
}