'use strict';

let wordDisplay = [];
let answer = '';
let clickRemaining = 8;
let winningCheck = '';
let resetGame = document.getElementById('reset');
let answerDisplay = document.getElementById('letterDisplay');
let livesDisplay = document.getElementById('clicks');
let keyContainer = document.getElementById('keyboardButtons');
const canvas = document.getElementById('octocat');
canvas.getContext('2d');

const eQuestion = [
  'I need to stage my files in order to make them available in git hub, what is the first command would I run ? ',
  'After adding the files I have made, I need to add a message with the files, what command would I run ? ',
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

// const mQuestion = [
//   'By using the ___ command, Adrienne can move branches around, to avoid unnecessary merge commits.',
//   'Kai wants to remove untracked files from the working directory, so he uses the ___ command to do so.',
//   'Jim accidentally made a change to a file in the working directory. What git command can Jim use to undo the change ?',
//   'Sarah noticed she had a faulty commit, and wants to undo the committed snapshot.How can she safely remove it from the code base ?',
//   'I have completed my work and committed on my branch then switched to the main branch, , what command would I run to add my branch to main ? '
// ];

// const mAnswer = [
//   'init',
//   'rebase',
//   'clean',
//   'reset',
//   'revert'
// ];

// const hQuestion = [
//   'what is the name of a file that specifies the things for git to not look at? ',
//   'I have just started today and want to see the previous commits, what command would I run that saves space in the terminal ? ',
//   'The code that I just wrote is FUBAR, I have found the commit hash I would like to revert back to, what command would I run ? ',
//   'I have committed a project but the commit message is full of spelling errors, what command would I run to fix that ? ',
//   'I want to temporarily store all the modified tracked files, which git command would I use?'
// ];

// const hAnswer = [
//   '.gitignore',
//   'log --oneline',
//   'reset',
//   'commit --amend -m',
//   'stash save'
// ];



function buttonClick () {
  console.log('yes');
}

let easyButtonId = document.getElementById('easy');
let mediumButtonId = document.getElementById('medium');
let hardButtonId = document.getElementById('hard');
let resetButtonId = document.getElementById('reset');
let letterDisplay = document.getElementById('letterDisplay');


easyButtonId.addEventListener('click', buttonClick);
mediumButtonId.addEventListener('click', buttonClick);
hardButtonId.addEventListener('click', buttonClick);
resetButtonId.addEventListener('click', buttonClick);

//makes the alphabet buttons
function generateKeyboard() {
  const buttonsHTML = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','-'];
  while (buttonsHTML.length > 0) {
    let spliced = buttonsHTML.shift();
    let createButton = document.createElement('button');
    createButton.id = spliced;
    createButton.innerHTML = spliced;
    letterDisplay.append(createButton);
    createButton.classList.add('keyboardButtons');
    keyContainer.appendChild(createButton);
    let alphaButtonId = document.getElementById(spliced);
    alphaButtonId.addEventListener('click', buttonClick);
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

function eQuestionAndAnswer(){
  for (let i = 0; i < eQuestion.length; i++){

    let generateEQ = document.getElementById('question');
    generateEQ.innerText= eQuestion[i];
    console.log(eQuestion[i]);
    answer = eAnswer[i];
    answerDisplay.innerText = generateAnswerDisplay(answer);
    console.log(answer);
    keyContainer.addEventListener('click', guess);
    return;
  }
}

function generateAnswerDisplay(word) {
  let answerArray = word.split('');
  console.log(answerArray);
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
  livesDisplay.innerText = `You have ${clickRemaining} lives!`;
  keyContainer.addEventListener('click', handleClick);
  eQuestionAndAnswer();
}

function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split('');
  let counter = 0;
  if (answer === winningCheck) {
    livesDisplay.innerHTML = 'You GitIt!';
    return;
  } else {
    if (clickRemaining > 0) {
      for (let j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          console.log(guessWord);
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
        livesDisplay.innerHTML = `You have ${clickRemaining} lives!`;
      } else if (clickRemaining === 1) {
        livesDisplay.innerHTML = `You have ${clickRemaining} life!`;
      } else {
        livesDisplay.innerHTML = 'Uh Oh, GitConflict!';
      }
    } else {
      return;
    }
    if (answer === winningCheck) {
      livesDisplay.innerHTML = 'You GitIt!';
      return;
    }
  }
}
generateKeyboard();
answerContainer();

resetGame.addEventListener('click', answerContainer);

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

function animateCat() {
  (drawArray[clickRemaining]());
}

let drawArray = [puddle, fifthArm, fourthArm, thirdArm, secondArm, firstArm, head, nooseDisplay];
