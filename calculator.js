function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, a, b) {
   return op(a,b);
}

const display = document.getElementById('display');

function updateDisplay(str) {
    display.textContent += str;
}

function clearDisplay() {
    display.textContent = "";
}

const btnPlus = document.getElementById('plus');
btnPlus.addEventListener('click', function(){
    updateDisplay('+');
});

const btnSubtract = document.getElementById('subtract');
btnSubtract.addEventListener('click', function(){
    updateDisplay('−');
});

const btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', function(){
    updateDisplay('/');
});

const btnMultipy = document.getElementById('multiply');
btnMultipy.addEventListener('click', function(){
    updateDisplay('×');
});

const btnEquals = document.getElementById('equals');
btnEquals.addEventListener('click', function(){
    //operate()
});

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', function(){
    clearDisplay();
});

const btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', function(){
    updateDisplay('7');
});

const btnEight = document.getElementById('eight');
btnEight.addEventListener('click', function(){
    updateDisplay('8');
});

const btnNine = document.getElementById('nine');
btnNine.addEventListener('click', function(){
    updateDisplay('9');
});

const btnFour = document.getElementById('four');
btnFour.addEventListener('click', function(){
    updateDisplay('4');
});

const btnFive = document.getElementById('five');
btnFive.addEventListener('click', function(){
    updateDisplay('5');
});

const btnSix = document.getElementById('six');
btnSix.addEventListener('click', function(){
    updateDisplay('6');
});

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', function(){
    updateDisplay('1');
});

const btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', function(){
    updateDisplay('2');
});

const btnThree = document.getElementById('three');
btnThree.addEventListener('click', function(){
    updateDisplay('3');
});

const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', function(){
    updateDisplay('0');
});