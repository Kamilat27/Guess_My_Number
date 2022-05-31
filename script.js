'use strict';

let secretNumber = newSecretNumber();
let score = 20;
let highScore = 0;

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function newSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function decreaseScore() {
  score--;
  displayScore(score);
}

function setBackground(color) {
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no input
  if (!guess) {
    displayMessage('No Number!');
  }
  //Correct answer
  else if (guess === secretNumber) {
    displayMessage('Correct Number! You win!');
    setBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      decreaseScore();
    } else {
      setBackground('red');
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  setBackground('#222');
  score = 20;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumber = newSecretNumber();
});
