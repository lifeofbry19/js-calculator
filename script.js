const display = document.querySelector('#display');
const calcBtns = document.querySelectorAll('button');
const nums = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operand')
const equalsBtn = document.querySelector('.equals-btn')
const allClear = document.querySelector('.AC-btn');
const dotBtn = document.querySelector('.dot-btn')
let num1 = '';
let num2 = '';
let operand = '';
let decimalUsed = false;
let answer = '';



function add(num1, num2) {
      
    return parseFloat(num1) + parseFloat(num2)  
  };

function subtract(num1, num2) {
      
    return parseFloat(num1) - parseFloat(num2) 
};

function multiply(num1, num2) {
      
    return parseFloat(num1) * parseFloat(num2) 
};

function divide(num1, num2) {
    if (num2 === '0') {
        return "Can't divide by 0!"
    }
    return parseFloat(num1) / parseFloat(num2) 
};

function modulo(num1, num2) {
    
    return parseFloat(num1) % parseFloat(num2)
}

function operate(operand, num1, num2) {
    if (operand.includes("+")) {  
        return add(num1, num2);
    } else if (operand.includes("-")) {
        return subtract(num1, num2);
    } else if (operand.includes("/")) {
        return divide(num1, num2);
    } else if (operand.includes("x")) {
        return multiply(num1, num2);
    } else if (operand.includes("%")) {
        return modulo(num1, num2)
    }
};




nums.forEach(num => {
    num.addEventListener('click', () => {
        if (operand !== '') { 
            num2 += num.textContent;
            display.textContent += num.textContent;
            console.log(`num2: ${num2}`);
            console.log(`num1: ${num1}`);
        } else if (operand === '') {
            num1 += num.textContent;
            display.textContent += num.textContent;
            console.log(`num1: ${num1}`);
        
    };
});
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num1 !== '' && num2 !== '') { 
            answer = operate(operand, parseFloat(num1), parseFloat(num2));
            operand = operator.textContent;
            display.textContent = answer + ' ' + operand + ' '
            num1 = answer;
            num2 = '';
            decimalUsed = false;
            
        } else if (num1 !== '' && num2 === '') {
            operand = operator.textContent;
            display.textContent = num1 + ' ' + operand + ' '
            decimalUsed = false;

        }
    })
});
 
equalsBtn.addEventListener('click', () => {
    console.log('clicked!');
    if (num1 !== '' && num2 !== '' && operand !== '') {
        answer = operate(operand, parseFloat(num1), parseFloat(num2));
        console.log(answer)
        display.textContent = answer;
    }
});

dotBtn.addEventListener('click', () => {
    if (decimalUsed === false && operand !== '') {
        num2 += dotBtn.textContent
        display.textContent += dotBtn.textContent
        decimalUsed = true;
    } else if (decimalUsed === false && operand === ''){
        num1 += dotBtn.textContent
        display.textContent += dotBtn.textContent
        decimalUsed = true
    }
})

allClear.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operand = '';
    decimalUsed = false;
});