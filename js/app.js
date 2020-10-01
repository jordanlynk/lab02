'use strict';

var correctAnswers = 0;

var userName=prompt('Welcome! What is your name?');

alert('Nice to meet you, ' + userName);
console.log('Username: ' + userName);

alert('Pop quiz! Lets see what you know about me!');

var userAnswer1 = prompt('Is my name Kaya?')
var getChar = userAnswer1.charAt(0);
var finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('You are correct!');
    alert('You are correct!');
    correctAnswers++;
}else if(finalChar == 'N'){
    // console.log('Hey, didn\'t you navigate here from my canvas page... with my name on it?');
    alert('Hey, didn\'t you navigate here from my canvas page... with my name on it?');
} else {
    alert('That\'s not a real answer!');
}

var userAnswer2 = prompt('Is it true that I have run 4th edition D&D professionally?');
getChar = userAnswer2.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Not quite! I only did 3.5 and 5.');
    alert('Not quite! I only did 3.5 and 5.');
}else if(finalChar == 'N'){
    // console.log('Good job!');
    alert('Good job!');
    correctAnswers++;
} else {
    alert('That\'s not a real answer!');
}


var userAnswer3 = prompt('Do I play animal crossing?');
getChar = userAnswer3.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Correct!');
    alert('Correct!');
    correctAnswers++;
}else if(finalChar == 'N'){
    // console.log('Well..Does 400+ hours of gameplay count...? If so you\'re wrong, sorry.');
    alert('Well... does 400+ hours of gameplay count...? If so you\'re wrong, sorry.');
} else {
    alert('That\'s not a real answer!');
}


var userAnswer4 = prompt('Was I once a musical theatre major?');

getChar = userAnswer4.charAt(0);
finalChar = getChar.toUpperCase();

if(finalChar == 'Y') {
    // console.log('Listen, I made mistakes okay?');
    alert('Listen, I made mistakes okay?');
    correctAnswers++;
}else if(finalChar == 'N'){
    // console.log('Incorrect, sorry!');
    alert('Incorrect, sorry!');
} else {
    alert('That\'s not a real answer!');
}

var userGuess = prompt('Okay, now guess a number between 1 and 10!');
var numberAnswer = Math.floor(Math.random( )* 10) + 1;
for(var i = 0; i < 4; i++){
    if(userGuess != numberAnswer && i === 3){
        alert('Out of guesses, better luck next time! The answer was ' + numberAnswer + '.');
    }else if(userGuess > numberAnswer){
        var userGuess = prompt('Too big, try again!');
    }else if(userGuess < numberAnswer){
        var userGuess = prompt('Too small, try again!');
    }else if(userGuess == numberAnswer){
        alert('Good job!');
        correctAnswers++;
        break;
    }
}

var userGuess2 = prompt('Name a martial D&D class:');
var acceptableAnswers = ['barbarian', 'fighter', 'monk', 'paladin', 'ranger', 'rogue'];
var tf = true;
for(var j = 0; j < 5; j++){
    for(var k = 0; k < 6; k++){
        if(userGuess2.toLowerCase() != acceptableAnswers[k]){
            var tf = false;
            console.log(userGuess2 + ' ' + acceptableAnswers[k])
        } else if(userGuess2.toLowerCase() === acceptableAnswers[k]){
            var tf = true;
            break;
        }
    }
    if(tf === false){
        var userGuess2 = prompt('Nope, try again!');
    } else if(tf === true){
        alert('Great job!');
        correctAnswers++;
        break;
    }
}

alert('Thanks for playing, ' + userName + '! You got ' + correctAnswers + 'out of 6.');
