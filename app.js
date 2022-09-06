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
  console.log('button Clicked!!');
}

let easyButtonId = document.getElementById('easy');
let mediumButtonId = document.getElementById('medium');
let hardButtonId = document.getElementById('hard');
let resetButtonId = document.getElementById('reset');
const keyboardButtons = document.getElementById('keyboardButtons');

easyButtonId.addEventListener('click', buttonClick);
mediumButtonId.addEventListener('click', buttonClick);
hardButtonId.addEventListener('click', buttonClick);
resetButtonId.addEventListener('click', buttonClick);

function generateButton() {
  const buttonsHTML = 'abcdefghijklmnopqrstuvwxyz.-'
    .split('')
    .map(
      (letter) =>
        `<button
           class = "alphabetButtonJS" 
           id="${letter}"
           >
          ${letter}
          </button>`
    )
    .join(' ');

  return buttonsHTML;
}

keyboardButtons.innerHTML = generateButton();

function eQuestionAndAnswer(){
  const questionOrder = Math.floor(Math.random() * eQuestion.length);
  const chosenEQuestion = eQuestion[questionOrder];
  const wordOrder = Math.floor(Math.random() * chosenEQuestion.length);
  const chosenWord = chosenEQuestion[wordOrder];

  const generateEQ = document.getElementById('easy');
  generateEQ.innerHTML = eQuestion;

  answer = chosenWord;
  eAnswerDisplay.innerHTML = generateAnswerDisplay(chosenWord);
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
  // console.log(generateAnswerDisplay());
  return wordDisplay.join(' ');
}

