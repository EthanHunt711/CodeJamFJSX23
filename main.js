
//global variables for general usage

let startRange = document.getElementById('rangeStart');
let endRange = document.getElementById('rangeEnd');
let userGuess = document.getElementById('guess');

let userGuessValue;
let hiddenValue = 0;
let counter = 0;
//a list for saving the attempts
let attempts = [];

//a predetermined range which is zero 
const rangeList = [0, 0];

// making a random number between two values including values
function randomNumber(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//main function for playing the game
function guessGame(){

    // disable the guess input and button before choosing the range
    userGuess.disabled = true;
    document.querySelector('#btn').disabled = true;
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
        //disable the range selection input and button
        startRange.disabled = true;
        endRange.disabled = true;
        
        //enabling the guess input and button
        userGuess.disabled = false;
        document.querySelector('#btn').disabled = false;
        
        // get the secret number
        hiddenValue = randomNumber(rangeList[0], rangeList[1]);
        document.getElementById('setBtn').disabled = true;
        document.getElementById('numberDescription').innerHTML = `Please select a number between ${rangeList[0]} and ${rangeList[1]}`
        
        //comment on the range
        if((rangeList[1] - rangeList[0]) < 50){
            document.getElementById('rangeDescription').innerHTML = 'You must be kidding! such a short range';
        } else if ((rangeList[1] - rangeList[0]) > 200){
            document.getElementById('rangeDescription').innerHTML = 'Wow you really want to challenge yourself,';
        } else {
            document.getElementById('rangeDescription').innerHTML = "Good range, let's see through the challenge";
        };

    });

    //listen to get the user input
    document.querySelector('#btn').addEventListener('click', event => {
        //get the users input and add it to an array
        userGuessValue = userGuess.value;
        attempts.push(Number(userGuessValue));
        
        //add to the counter with each click (guess)
        counter += 1;

        // check if the input is less than range
        if (userGuessValue >= rangeList[0] && userGuessValue <= rangeList[1]){
            //if the inout in inside the range
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
            //if the input is outside the range
        } else {
            document.getElementById('errorInput').innerHTML = `Sorry!!! ${userGuessValue} is out of bounds`;
            const lastAttempt = document.createElement('li');
            lastAttempt.textContent = `Attempt ${counter} (${userGuessValue}) was out of bounds`;
            document.querySelector('.previousGuessesList').appendChild(lastAttempt);
        };
    });
    //reload the page by clicking on the restart button 
    document.querySelector('#refreshBtn').addEventListener('click', event =>{
        window.location.reload();
    });
};

//countdown function for ending the game after some attempts
function countDown(interval, elementId){
    //set the intvarl timer
    let count = interval;
    //make the countdown
    const timer = setInterval(function() {
        count--;
        document.getElementById(elementId).innerHTML = `Start over in ${count}`;
    //when the count is finished start the page over
    if (count === 0) {
        clearInterval(timer);
        document.getElementById(elementId).innerHTML = "Time's Up!";
        window.location.reload();
        }
    }, 1000);
};

//function to play the game in the limited attempts
function playGame(functionToRun, limit, attemptsList){
    //count the attempts
    document.querySelector('#btn').addEventListener('click', event => {
        //check for the limit
        if (attemptsList.length <= limit){
            functionToRun
            
        // if limit is surpassed
        } else {
            const failMessage = document.createElement('div');
            failMessage.id = 'failMessage'
            failMessage.innerHTML = `Sorry!!! You've reached the ${limit} attempts limit`;
            document.querySelector('.previousGuesses').appendChild(failMessage);
        
            //start the countdown
            countDown(5, 'counterMessage');
        };
    });
};





playGame(guessGame(), 7, attempts);























