'use strict';

function buttonClick () {
    console.log('button Clicked!!');
};

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
    const buttonsHTML = "abcdefghijklmnopqrstuvwxyz.-"
      .split("")
      .map(
        (letter) =>
          `<button
           class = "alphabetButtonJS" 
           id="${letter}"
           >
          ${letter}
          </button>`
      )
      .join("");
  
    return buttonsHTML;
  }

keyboardButtons.innerHTML = generateButton();












