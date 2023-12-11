//global variables for general usage

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
    //listen for getting the start of the range (inclusive)
    startRange.addEventListener('input', event =>{
        rangeList[0] = Number(startRange.value);
    });
    //listen for getting the end of the range (inclusive)
    endRange.addEventListener('input', event =>{
        rangeList[1] = Number(endRange.value);
       
    });
    //set the range and lock further changes to the range
    document.querySelector('#setBtn').addEventListener('click', event => {
        startRange.disabled = true;
        endRange.disabled = true;
        
        // get the secret number
        hiddenValue = randomNumber(rangeList[0], rangeList[1]);
        document.getElementById('setBtn').disabled = true;
        document.getElementById('numberDescription').innerHTML = `Please select a number between ${rangeList[0]} and ${rangeList[1]}`
        
    });

    
    


    document.querySelector('#btn').addEventListener('click', event => {
        //get the users input and add it to an array
        userGuessValue = userGuess.value;
        attempts.push(Number(userGuessValue));
        


        //add to the counter with each click (guess)
        counter += 1;

       

        // check if the input is less than range
        if (userGuessValue >= rangeList[0] && userGuessValue <= rangeList[1]){
            if (userGuessValue == hiddenValue){
                document.getElementById('rightInput').innerHTML = `Bull's Eye!!! ${userGuessValue} is the correct guess`;
            } else if(userGuessValue > hiddenValue){
                document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is higher than the secret number`;
            } else {
                document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is lower than the secret number`;
            };
           
            const lastAttempt = document.createElement('li');
            lastAttempt.textContent = `Attempt ${counter} was ${attempts[counter - 1]}`;
            document.querySelector('.previousGuessesList').appendChild(lastAttempt);
   
        } else {
            
            document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is out of bounds`;
            const lastAttempt = document.createElement('li');
            lastAttempt.textContent = `Attempt ${counter} (${userGuessValue}) was out of bounds`;
            document.querySelector('.previousGuessesList').appendChild(lastAttempt);
            

        };

    
    });

    document.querySelector('#refreshBtn').addEventListener('click', event =>{
        window.location.reload();
    });
};


guessGame()
























