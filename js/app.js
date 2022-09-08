'use strict';

//Window load clears local storage for a new game with new individualized results
window.onload = window.localStorage.clear();

//Global Variables
let wordDisplay = [];
let answer = '';
let clickRemaining = 8;
let winningCheck = '';
let answerDisplay = document.getElementById('letterDisplay');
let livesDisplay = document.getElementById('clicks');
let correctMessage = document.getElementById('correct');
let keyContainer = document.getElementById('keyboardButtons');
let counterDiv = document.getElementById('livesLeft');
let correctDiv = document.getElementById('correct');
const canvas = document.getElementById('octocat');
let y = 0;

//Question and Answer Arrays
const eQuestion = [
  'I need to stage my files in order to make them available in GitHub, what is the first command I would run? ',
  'After adding the files I have made, I need to add a message with the files, what command would I run? ',
  'If I am in the main branch, and have already added and committed my files what is the final command?',
  'I want to see all of the branches that are available, what command would I run?',
  'I want to check which files I have commited, what git command do I use?'
];

const eAnswer = [
  'add',
  'commit',
  'push',
  'branch',
  'status'
];

const mQuestion = [
  'By using the ____ command, Adrienne can move branches around to avoid unnecessary merge commits.',
  'Kai wants to remove untracked files from the working directory, so he uses the ______ command to do so.',
  'Jim accidentally made a change to a file in the working directory. What git command can Jim use to undo the change?',
  'Sarah noticed she had a faulty commit, and wants to undo the committed snapshot.How can she safely remove it from the code base?',
  'I have completed my work and committed on my branch then switched to the main branch, , what command would I run to add my branch to main? '
];

const mAnswer = [
  'init',
  'rebase',
  'clean',
  'reset',
  'revert'
];

const hQuestion = [
  'What is the name of a file that specifies the things for git to not look at? ',
  'I have just started today and want to see the previous commits, what command would I run that saves space in the terminal? ',
  'The code that I just wrote is FUBAR, I have found the commit hash I would like to revert back to, what command would I run? ',
  'I have committed a project but the commit message is full of spelling errors, what command would I run to fix that? ',
  'I want to temporarily store all the modified tracked files, which git command would I use?'
];

const hAnswer = [
  '.gitignore',
  'log --oneline',
  'reset',
  'commit --amend -m',
  'stash save'
];

//Array of Arrays for Questions and Answers
const allArray = [eQuestion, eAnswer, mQuestion, mAnswer, hQuestion, hAnswer];

let easyButtonId = document.getElementById('easy');
let mediumButtonId = document.getElementById('medium');
let hardButtonId = document.getElementById('hard');

easyButtonId.addEventListener('click', function () {
  z = 0;
  x = 0;
  eQuestionAndAnswer();
});
mediumButtonId.addEventListener('click', function () {
  z = 2;
  x = 0;
  eQuestionAndAnswer();
});
hardButtonId.addEventListener('click', function () {
  z = 4;
  x = 0;
  eQuestionAndAnswer();
});

//Generate Live Keyboard function
function generateKeyboard() {
  const buttonsHTML = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','-', ' '];
  while (buttonsHTML.length > 0) {
    let spliced = buttonsHTML.shift();
    let createButton = document.createElement('button');
    createButton.id = spliced;
    createButton.innerHTML = spliced;
    createButton.classList.add('keyboardButtons');
    keyContainer.appendChild(createButton);
  }
}

function handleClick(event) {
  const isButton = event.target.nodeName === 'BUTTON';
  if (isButton) {
    const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add('selected');
  }
  return;
}

let x = 0;
let z = 0; // increment by 2!

function eQuestionAndAnswer(){
  let generateEQ = document.getElementById('question');
  if (allArray[z][x] === undefined) {
    generateEQ.innerText= 'Nice job!, if you want to hanG around, try another difficulty or view your results!';
    return;
  }
  generateEQ.innerText= allArray[z][x];
  answer = allArray[z + 1][x];
  answerDisplay.classList.add('wordDisplay');
  answerDisplay.innerText = generateAnswerDisplay(answer);
  keyContainer.addEventListener('click', guess);
}

function generateAnswerDisplay(word) {
  wordDisplay = [];
  let answerArray = word.split('');
  for (let i = 0; i < answer.length; i++) {
    if (answerArray[i] !== '-') {
      wordDisplay.push('_');
    } else {
      wordDisplay.push('-');
    }
  }
  return wordDisplay.join(' ');
}

function answerContainer() {
  clickRemaining = 8;
  wordDisplay = [];
  livesDisplay.innerText = `Welcome to HanGit! We're glad you are here! To start, you have ${clickRemaining} lives!`;
  keyContainer.addEventListener('click', handleClick);
  x = 0;
  eQuestionAndAnswer();
}

function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split('');
  let counter = 0;
  if (answer === winningCheck) {
    correctMessage.innerHTML = `${answer} is correct!`;
    x++;
    eQuestionAndAnswer();
    return;
  } else {
    if (clickRemaining > 0) {
      for (let j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          answerDisplay.innerHTML = wordDisplay.join(' ');
          winningCheck = wordDisplay.join('');
          counter += 1;
        }
      }
      if (counter === 0) {
        clickRemaining -= 1;
        counter = 0;
        animateCat();
      } else {
        counter = 0;
      }
      if (clickRemaining > 1) {
        livesDisplay.innerHTML = `You now have ${clickRemaining} lives!`;
        counterDiv.style.backgroundColor = '#9cdaf0';
      } else if (clickRemaining === 1) {
        livesDisplay.innerHTML = `Oh no! You only have ${clickRemaining} life left! Be careful!`;
        counterDiv.style.backgroundColor = '#ffbf00';
      } else {
        livesDisplay.innerHTML = 'Uh Oh, Git Conflict! Play again!';
        counterDiv.style.backgroundColor = '#dc143c';
      }
    } else {
      return;
    }
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `You GitIt! "${answer}" is correct!`;
      counterDiv.style.backgroundColor = '#48f783';
      x++;
      y = x;
      localStorage.setItem('toStore', JSON.stringify(y));
      localStorage.setItem('lives', JSON.stringify(clickRemaining));
      eQuestionAndAnswer();
      keyContainer.innerHTML = '';
      generateKeyboard();
      return;
    }
  }
}
generateKeyboard();
answerContainer();

// Individual Functions for OctoCat Animation on Canvas Element
const nooseDisplay = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  context.beginPath();
  const noose = new Image(); {
    noose.src = './assets/img/noose.png';
    noose.onload = () => {
      context.drawImage(noose, 0, 0, 1200, 950);
    };
  }
};

const head = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const head = new Image(); {
    head.src = './assets/img/head.png';
    head.onload = () => {
      context.drawImage(head, 0, 0, 1200, 950);
    };
  }
};

const firstArm = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const firstArm = new Image(); {
    firstArm.src = './assets/img/firstArm.png';
    firstArm.onload = () => {
      context.drawImage(firstArm, 0, 0, 1200, 950);
    };
  }
};

const secondArm = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const secondArm = new Image(); {
    secondArm.src = './assets/img/secondArm.png';
    secondArm.onload = () => {
      context.drawImage(secondArm, 0, 0, 1200, 950);
    };
  }
};

const thirdArm = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const thirdArm = new Image(); {
    thirdArm.src = './assets/img/thirdArm.png';
    thirdArm.onload = () => {
      context.drawImage(thirdArm, 0, 0, 1200, 950);
    };
  }
};

const fourthArm = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const fourthArm = new Image(); {
    fourthArm.src = './assets/img/fourthArm.png';
    fourthArm.onload = () => {
      context.drawImage(fourthArm, 0, 0, 1200, 950);
    };
  }
};

const fifthArm = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const fifthArm = new Image(); {
    fifthArm.src = './assets/img/fifthArm.png';
    fifthArm.onload = () => {
      context.drawImage(fifthArm, 0, 0, 1200, 950);
    };
  }
};

const puddle = function () {
  const canvas = document.getElementById('octocat');
  const context = canvas.getContext('2d');
  const puddle = new Image(); {
    puddle.src = './assets/img/puddle.png';
    puddle.onload = () => {
      context.drawImage(puddle, 0, 0, 1200, 950);
    };
  }
};

//Functions Array for OctoCat
let drawArray = [puddle, fifthArm, fourthArm, thirdArm, secondArm, firstArm, head, nooseDisplay];

//Calling OctoCat functions from array by Clicks Remaining
function animateCat() {
  (drawArray[clickRemaining]());
}

//PARSE LOCAL STORAGE
let storedAnswers = localStorage.getItem('toStore');
if (storedAnswers) {
  y = JSON.parse(storedAnswers);
}
let storedClicks = localStorage.getItem('lives');
if (storedClicks) {
  clickRemaining = JSON.parse(storedClicks);
}

//RESET BUTTON for LOCAL STORAGE and GAME RESET
function reset(){
  localStorage.clear();
  document.location.reload();
}
// EVENT LISTENER for RESET BUTTON
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);
