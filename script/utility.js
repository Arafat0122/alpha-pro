function hideElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden')
}

function addBackgroundColorByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueByID(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    return alphabet
}