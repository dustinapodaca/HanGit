'use strict';

let wordDisplay = [];
let answer = '';
let eAnswerDisplay = document.getElementById('keyboardButtons');

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

const mQuestion = [
  'By using the ___ command, Adrienne can move branches around, to avoid unnecessary merge commits.',
  'Kai wants to remove untracked files from the working directory, so he uses the ___ command to do so.',
  'Jim accidentally made a change to a file in the working directory. What git command can Jim use to undo the change ?',
  'Sarah noticed she had a faulty commit, and wants to undo the committed snapshot.How can she safely remove it from the code base ?',
  'I have completed my work and committed on my branch then switched to the main branch, , what command would I run to add my branch to main ? '
];

const mAnswer = [
  'init',
  'rebase',
  'clean',
  'reset',
  'revert'
];

const hQuestion = [
  'what is the name of a file that specifies the things for git to not look at? ',
  'I have just started today and want to see the previous commits, what command would I run that saves space in the terminal ? ',
  'The code that I just wrote is FUBAR, I have found the commit hash I would like to revert back to, what command would I run ? ',
  'I have committed a project but the commit message is full of spelling errors, what command would I run to fix that ? ',
  'I want to temporarily store all the modified tracked files, which git command would I use?'
];

const hAnswer = [
  '.gitignore',
  'log --oneline',
  'reset',
  'commit --amend -m',
  'stash save'
];


function buttonClick () {
  console.log('yes');
}

let easyButtonId = document.getElementById('easy');
let mediumButtonId = document.getElementById('medium');
let hardButtonId = document.getElementById('hard');
let resetButtonId = document.getElementById('reset');
const letterDisplay = document.getElementById('letterDisplay');


easyButtonId.addEventListener('click', buttonClick);
mediumButtonId.addEventListener('click', buttonClick);
hardButtonId.addEventListener('click', buttonClick);
resetButtonId.addEventListener('click', buttonClick);

//makes the alphabet buttons
const buttonsHTML = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','-'];
while (buttonsHTML.length > 0) {
  let spliced = buttonsHTML.shift();
  let createButton = document.createElement('button');
  createButton.id = spliced;
  createButton.innerHTML = spliced;
  letterDisplay.append(createButton);
  let alphaButtonId = document.getElementById(spliced);
  alphaButtonId.addEventListener('click', buttonClick);
}

function eQuestionAndAnswer(){
  for (let i = 0; i < eQuestion.length; i++){

    const generateEQ = document.getElementById('question');
    generateEQ.innerHTML = eQuestion[i];

    answer = eAnswer;
    eAnswerDisplay.innerHTML = generateAnswerDisplay(eAnswer[i]);
  }



  function generateAnswerDisplay(word) {
    let answerArray = word.split('');
    // console.log(answerArray);
    for (let i = 0; i < answer.length; i++) {
      if (answerArray[i] !== '-') {
        wordDisplay.push('_');
      } else {
        wordDisplay.push('-');
      }
    }
    return wordDisplay.join(' ');
  }
}


//canvas Hangman Images

const canvas = document.getElementById('octocat');
const context = canvas.getContext('2d');
const noose = new Image(); {
  noose.src = './assets/img/noose.png';
  noose.onload = () => {
    context.drawImage(noose, 0, 0, 1200, 950);
  };
  const head = new Image(); {
    head.src = './assets/img/head.png';
    head.onload = () => {
      context.drawImage(head, 0, 0, 1200, 950);
    };
    const firstArm = new Image(); {
      firstArm.src = './assets/img/firstArm.png';
      firstArm.onload = () => {
        context.drawImage(firstArm, 0, 0, 1200, 950);
      };
      const secondArm = new Image(); {
        secondArm.src = './assets/img/secondArm.png';
        secondArm.onload = () => {
          context.drawImage(secondArm, 0, 0, 1200, 950);
        };
        const thirdArm = new Image(); {
          thirdArm.src = './assets/img/thirdArm.png';
          thirdArm.onload = () => {
            context.drawImage(thirdArm, 0, 0, 1200, 950);
          };
          const fourthArm = new Image(); {
            fourthArm.src = './assets/img/fourthArm.png';
            fourthArm.onload = () => {
              context.drawImage(fourthArm, 0, 0, 1200, 950);
            };
            const fifthArm = new Image(); {
              fifthArm.src = './assets/img/fifthArm.png';
              fifthArm.onload = () => {
                context.drawImage(fifthArm, 0, 0, 1200, 950);
              };
              const puddle = new Image(); {
                puddle.src = './assets/img/puddle.png';
                puddle.onload = () => {
                  context.drawImage(puddle, 0, 0, 1200, 950);
                };
              }
            }
          }
        }
      }
    }
  }
}
let maxWrong = 8;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = eAnswer[Math.floor(Math.random() * eAnswer.length)];
  answer = mAnswer[Math.floor(Math.random() * mAnswer.length)];
  answer = hAnswer[Math.floor(Math.random() * hAnswer.length)];
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  alert(hint);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateOctocatPic();
  }
}



function updateOcotocatPic() {
    if (mistakes === 1) {
        context.drawImage(head, 0, 0, 1200, 950);
    } else if (mistakes === 2) {
        context.drawImage(firstArm, 0, 0, 1200, 950);
    } else if (mistakes === 3) {
        context.drawImage(secondArm, 0, 0, 1200, 950);
    } else if (mistakes === 4) {
        context.drawImage(thirdArm, 0, 0, 1200, 950);
} else if (mistakes === 5) {
    context.drawImage(fourthArm, 0, 0, 1200, 950);
} else if (mistakes === 6) {
context.drawImage(fifthArm, 0, 0, 1200, 950);
  } else (mistakes === 7) {
    context.drawImage(puddle, 0, 0, 1200, 950);
}
 

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!';
  }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!';
    }
    }   

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('octoCat').src = '';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

