'use strict';

let wordDisplay = [];
let answer = '';
let winningCheck = '';
let clickRemaining = 8;
// let eAnswerDisplay = document.getElementById('letterDisplay');
let livesDisplay = document.getElementById('clicks');
let container = document.getElementById('keyboardButtons');
// let resetButton = document.getElementById('reset');

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

<<<<<<< HEAD
// const mQuestion = [
//   'By using the ___ command, Adrienne can move branches around, to avoid unnecessary merge commits.',
//   'Kai wants to remove untracked files from the working directory, so he uses the ___ command to do so.',
//   'Jim accidentally made a change to a file in the working directory. What git command can Jim use to undo the change ?',
//   'Sarah noticed she had a faulty commit, and wants to undo the committed snapshot.How can she safely remove it from the code base ?',
//   'I have completed my work and committed on my branch then switched to the main branch, , what command would I run to add my branch to main ? '
// ];
=======
const mQuestion = [
  'By using the ___ command, Adrienne can move branches around, to avoid unnecessary merge commits.',
  'Kai wants to remove untracked files from the working directory, so he uses the ___ command to do so.',
  'Jim accidentally made a change to a file in the working directory. What git command can Jim use to undo the change?',
  'Sarah noticed she had a faulty commit, and wants to undo the committed snapshot.How can she safely remove it from the code base?',
  'I have completed my work and committed on my branch then switched to the main branch, what command would I run to add my branch to main? '
];
>>>>>>> c1905ff41c3b37c604e9d831c1175b2fb827a670

// const mAnswer = [
//   'init',
//   'rebase',
//   'clean',
//   'reset',
//   'revert'
// ];

<<<<<<< HEAD
// const hQuestion = [
//   'what is the name of a file that specifies the things for git to not look at? ',
//   'I have just started today and want to see the previous commits, what command would I run that saves space in the terminal ? ',
//   'The code that I just wrote is FUBAR, I have found the commit hash I would like to revert back to, what command would I run ? ',
//   'I have committed a project but the commit message is full of spelling errors, what command would I run to fix that ? ',
//   'I want to temporarily store all the modified tracked files, which git command would I use?'
// ];
=======
const hQuestion = [
  'What is the name of a file that specifies the things for git to not look at? ',
  'I have just started today and want to see the previous commits, what command would I run that saves space in the terminal? ',
  'The code that I just wrote is FUBAR, I have found the commit hash I would like to revert back to, what command would I run? ',
  'I have committed a project but the commit message is full of spelling errors, what command would I run to fix that? ',
  'I want to temporarily store all the modified tracked files, which git command would I use?'
];
>>>>>>> c1905ff41c3b37c604e9d831c1175b2fb827a670

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
<<<<<<< HEAD
function generateKeybord(){
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
=======
const buttonsHTML = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','-'];
while (buttonsHTML.length > 0) {
  let spliced = buttonsHTML.shift();
  let createButton = document.createElement('button');
  createButton.id = spliced;
  createButton.innerHTML = spliced;
  createButton.classList.add('keyboardButtons');
  keyboardButtons.appendChild(createButton);
  let alphaButtonId = document.getElementById(spliced);
  alphaButtonId.addEventListener('click', buttonClick);
>>>>>>> c1905ff41c3b37c604e9d831c1175b2fb827a670
}

function handleClick(event) {
  const isButton = event.target.nodeName === 'BUTTON';
  if (isButton) {
    //console.dir(event.target.id);
    //console.log(isButton);
    const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add('selected');
  }
  return;
}
function eQuestionAndAnswer(){
  for (let i = 0; i < eQuestion.length; i++){
    if (eQuestion.length === eAnswer.length);

    const generateEQ = document.getElementById('question');
    generateEQ.innerHTML = eQuestion[i];

    answer = eAnswer;
    letterDisplay.innerHTML = generateAnswerDisplay(eAnswer[i]);
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

function answerContainer() {
  answer = '';
  clickRemaining = 8;
  wordDisplay = [];
  winningCheck = '';
  // context.clearRect(0, 0, 400, 400);
  // canvas();
  livesDisplay.innerHTML = `You have ${clickRemaining} lives!`;
  eQuestionAndAnswer();
  container.innerHTML = generateKeybord();
  container.addEventListener('click', handleClick);
  console.log(answer);
  //console.log(hint);
}

window.onload = answerContainer();

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
<<<<<<< HEAD



//reset (play again)
// resetButton.addEventListener('click', init);

//guess click
// function eResponse(event) {
//   const response = event.target.id;
//   const answerArray = answer.split('');
//   let counter = 0;
//   if (answer === winningCheck) {
//     livesDisplay.innerHTML = 'YOU WIN!';
//     return;
//   } else {
//     if (clickRemaining > 0) {
//       for (let j = 0; j < answer.length; j++) {
//         if (response === answerArray[j]) {
//           wordDisplay[j] = response;
//           console.log(response);
//           letterDisplay.innerHTML = wordDisplay.join(' ');
//           winningCheck = wordDisplay.join('');
//           console.log(wordDisplay);
//           counter += 1;
//         }
//       }
//       if (counter === 0) {
//         clickRemaining -= 1;
//         counter = 0;
        // animate();
    //   } else {
    //     counter = 0;
    //   }
    //   if (clickRemaining > 1) {
    //     livesDisplay.innerHTML = `You have ${clickRemaining} lives!`;
    //   } else if (clickRemaining === 1) {
    //     livesDisplay.innerHTML = `You have ${clickRemaining} life!`;
    //   } else {
    //     livesDisplay.innerHTML = 'GAME OVER!';
    //   }
    // } else {
    //   return;
    // }
    // console.log(wordDisplay);
    //console.log(counter);
    //console.log(life);
//     if (answer === winningCheck) {
//       livesDisplay.innerHTML = 'YOU WIN!';
//       return;
//     }
//   }
// }

// container.addEventListener('click', eResponse);





// let maxWrong = 8;
// let mistakes = 0;
// let guessed = [];
// let wordStatus = null;

// function handleGuess(chosenLetter) {
//   guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//   document.getElementById(chosenLetter).setAttribute('disabled', true);

//   // alert(hint);
=======

// let maxWrong = 8;
// let mistakes = 0;
// let guessed = [];
// let wordStatus = null;

// function randomWord() {
//   answer = eAnswer[Math.floor(Math.random() * eAnswer.length)];
//   answer = mAnswer[Math.floor(Math.random() * mAnswer.length)];
//   answer = hAnswer[Math.floor(Math.random() * hAnswer.length)];
// }

// function handleGuess(chosenLetter) {
//   guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//   document.getElementById(chosenLetter).setAttribute('disabled', true);

//   alert(hint);

//   if (answer.indexOf(chosenLetter) >= 0) {
//     guessedWord();
//     checkIfGameWon();
//   } else if (answer.indexOf(chosenLetter) === -1) {
//     mistakes++;
//     updateMistakes();
//     checkIfGameLost();
//     updateOctocatPic();
//   }
// }



// function updateOctocatPic() {
//   if (mistakes === 1) {
//       context.drawImage(head, 0, 0, 1200, 950);
//   } else if (mistakes === 2) {
//       context.drawImage(firstArm, 0, 0, 1200, 950);
//   } else if (mistakes === 3) {
//       context.drawImage(secondArm, 0, 0, 1200, 950);
//   } else if (mistakes === 4) {
//       context.drawImage(thirdArm, 0, 0, 1200, 950);
//   } else if (mistakes === 5) {
//     context.drawImage(fourthArm, 0, 0, 1200, 950);
//   } else if (mistakes === 6) {
//     context.drawImage(fifthArm, 0, 0, 1200, 950);
//   } else (mistakes === 7) {
//     context.drawImage(puddle, 0, 0, 1200, 950);
//   }
// }
 

// function checkIfGameWon() {
//   if (wordStatus === answer) {
//     document.getElementById('keyboard').innerHTML = 'You Won!!';
//   }
// }

// function checkIfGameLost() {
//   if (mistakes === maxWrong) {
//     document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
//     document.getElementById('keyboard').innerHTML = 'You Lost!!';
//   }
// }   

// function guessedWord() {
//   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

//   document.getElementById('wordSpotlight').innerHTML = wordStatus;
// }

// function updateMistakes() {
//   document.getElementById('mistakes').innerHTML = mistakes;
// }

// function reset() {
//   mistakes = 0;
//   guessed = [];
//   document.getElementById('reset').src = '';

//   randomWord();
//   guessedWord();
//   updateMistakes();
//   generateButtons();
// }

// document.getElementById('maxWrong').innerHTML = maxWrong;

// randomWord();
// generateButtons();
// guessedWord();
>>>>>>> c1905ff41c3b37c604e9d831c1175b2fb827a670

//   if (answer.indexOf(chosenLetter) >= 0) {
//     guessedWord();
//     checkIfGameWon();
//   } else if (answer.indexOf(chosenLetter) === -1) {
//     mistakes++;
//     updateMistakes();
//     checkIfGameLost();
//     updateOctocatPic();
//   }
// }



// function updateOctocatPic() {
//     if (mistakes === 1) {
//         context.drawImage(head, 0, 0, 1200, 950);
//     } else if (mistakes === 2) {
//         context.drawImage(firstArm, 0, 0, 1200, 950);
//     } else if (mistakes === 3) {
//         context.drawImage(secondArm, 0, 0, 1200, 950);
//     } else if (mistakes === 4) {
//         context.drawImage(thirdArm, 0, 0, 1200, 950);
// } else if (mistakes === 5) {
//     context.drawImage(fourthArm, 0, 0, 1200, 950);
// } else if (mistakes === 6) {
// context.drawImage(fifthArm, 0, 0, 1200, 950);
//   } else (mistakes === 7) {
//     context.drawImage(puddle, 0, 0, 1200, 950);
// }


// function checkIfGameWon() {
//   if (wordStatus === answer) {
//     document.getElementById('keyboard').innerHTML = 'You Won!!';
//   }
// }

// function checkIfGameLost() {
//     if (mistakes === maxWrong) {
//         document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
//         document.getElementById('keyboard').innerHTML = 'You Lost!!';
//     }
//     }

// function guessedWord() {
//   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

//   document.getElementById('wordSpotlight').innerHTML = wordStatus;
// }

// function updateMistakes() {
//   document.getElementById('mistakes').innerHTML = mistakes;
// }

// function reset() {
//   mistakes = 0;
//   guessed = [];
//   document.getElementById('reset').src = '';

//   randomWord();
//   guessedWord();
//   updateMistakes();
//   generateButtons();
// }

// document.getElementById('maxWrong').innerHTML = maxWrong;

// randomWord();
// generateButtons();
// guessedWord();
// }
