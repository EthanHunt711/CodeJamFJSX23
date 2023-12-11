let startRange = document.getElementById('rangeStart');
let endRange = document.getElementById('rangeEnd');
let userGuess = document.getElementById('guess');

let userGuessValue;
let hiddenValue = 0;
let counter = 0;

let attempts = [];

const rangeList = [0, 0];

// making a random number between two values including values
function randomNumber(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function guessGame(){
    startRange.addEventListener('input', event =>{
        rangeList[0] = startRange.value;
        
    });

    endRange.addEventListener('input', event =>{
        rangeList[1] = endRange.value;
       
    });
    document.querySelector('#setBtn').addEventListener('click', event => {
        startRange.disabled = true;
        endRange.disabled = true;

        hiddenValue = randomNumber(rangeList[0], rangeList[1]);
        document.getElementById('setBtn').disabled = true;
        document.getElementById('numberDescription').innerHTML = `Please select a number between ${rangeList[0]} and ${rangeList[1]}`
        
    });

    userGuess.addEventListener('input', event => {
        userGuessValue = userGuess.value;
        attempts.push(userGuessValue);
    });

    document.querySelector('#btn').addEventListener('click', event => {
        counter += 1;

        if (userGuessValue > rangeList[0] && userGuessValue < rangeList[1]){
            if (userGuessValue == hiddenValue){
                document.getElementById('rightInput').innerHTML = `Bull's Eye!!! ${userGuessValue} is the correct guess`;
            } else if(userGuessValue > hiddenValue){
                document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is higher than the secret number`;
            } else {
                document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is lower than the secret number`;
            };
            console.log(counter);
            console.log(attempts[counter]);
            const lastAttempt = document.createElement('li');
            lastAttempt.textContent = `Attempt ${counter} was ${attempts[counter]}`;
            document.querySelector('.previousGuessesList').appendChild(lastAttempt);
        } else {
            document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is out of bounds`;
            const lastAttempt = document.createElement('li');
            lastAttempt.textContent = `Attempt ${counter} was out of bounds`;
            document.querySelector('.previousGuessesList').appendChild(lastAttempt);
        };
        
    });

        
    
    
};



guessGame()
























