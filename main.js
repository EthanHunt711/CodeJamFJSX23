let hiddenValue = 0;
let counter = 0;

const rangeList = [0, 0];

// making a random number between two values including values
function randomNumber(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//function for calculating the guess against the hidden number and outputing a message
function makeValuation(val, guessedNumber, message){
    if (guessedNumber < val){
        message.textContent = `Try a higher guess than ${guessedNumber}!`
    } else if (guessedNumber > val){
        message.textContent = `Try a lower guess than ${guessedNumber}!`
    } else {
        message.textContent = `Bull's eye, your ${guessedNumber} is actually the right guess`
    }
};

//function for disabling further changes to innerHTML
function disableChange(elementId){
    document.querySelector(`'#${elementId}'`).disabled = true;
};

//function for sabling further changes to innerHTML
function disableChange(elementId){
    document.querySelector(`'#${elementId}'`).disabled = true;
};


//function for getting the range
function getRange(){
    

    //get the start of range
    const startR = document.getElementById('rangeStart');
    startR.addEventListener('input', event =>{
            if(startR != ""){
                rangeList[0] = Number(startR.value);}
            else{
                document.querySelector('#errorRange').innerHTML = "You have to enter a number"
            }
        });

    //get the end of range
    const endR = document.getElementById('rangeEnd');
    endR.addEventListener('input', event =>{
            if (endR != ""){
                rangeList[1] = Number(endR.value);}
            else{
                document.querySelector('#errorRange').innerHTML = "You have to enter a number"
            }
        });

    return rangeList
};

//making the guess game
function guessGame(){
   
        const selectedRange = getRange()
        hiddenValue = randomNumber(selectedRange[0], selectedRange[1])
        // console.log(hiddenValue);
        if (hiddenValue > 0){
            document.querySelector('#numberDescription').innerHTML = `Please enter a guess between ${selectedRange[0]} and ${selectedRange[1]}`;
            
        } else {
            document.querySelector('#numberDescription').innerHTML = 'You have to select a range'
        }
        
    
};



function getStarted(){
    document.querySelector('#setBtn').addEventListener('click', function(){
        guessGame()

    });
    const userGuessInput = document.querySelector('#guess');
    const userGuess = document.querySelector('#guess').value
    userGuessInput.addEventListener('input', function(){
            if (userGuess < hiddenValue){
                document.querySelector('#errorRange').innerHTML = "Try a higher number"
            } else if (userGuess > hiddenValue){
                document.querySelector('#errorRange').innerHTML = "Try a lower number"
            } else {
                document.querySelector('#errorRange').innerHTML = "BINGO!!!!"
            }
        });
    
};


getStarted()