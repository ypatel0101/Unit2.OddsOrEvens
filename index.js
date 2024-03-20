// TODO: this file! :)

const addButton = document.querySelector('button');
const numberInput = document.querySelector('input[name="number"]');
const numberBankOutput = document.querySelector('#numberBank output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');

let numberBank = [];

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  addNumberToBank();
});

function addNumberToBank() {
  const number = parseInt(numberInput.value, 10);
  if (!isNaN(number)) {
    numberBank.push(number);
    numberInput.value = ''; 
    numberBankOutput.textContent = numberBank.join(', '); 
  }
}

sortOneButton.addEventListener('click', function() {
  if (numberBank.length > 0) {
    sortNumber(numberBank.shift()); 
    numberBankOutput.textContent = numberBank.join(', '); 
  }
});

sortAllButton.addEventListener('click', function() {
  while (numberBank.length > 0) {
    sortNumber(numberBank.shift()); 
  }
  numberBankOutput.textContent = ''; 
});


function sortNumber(number) {
  if (number % 2 === 0) {
    evensOutput.textContent += number + ', ';
  } else {
    oddsOutput.textContent += number + ', ';
  }
}

addButton.addEventListener('click', addNumberToBank);
