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
      
    return parseFloat(num1) / parseFloat(num2) 
};

function modulo(num1, num2) {
    
    return parseFloat(num1) % parseFloat(num2)
}

function operate(operand, num1, num2) {
    if (operand === "+") {  
        return add(num1, num2);
    } else if (operand === "-") {
        return subtract(num1, num2);
    } else if (operand === "&divide") {
        return divide(num1, num2);
    } else if (operand === "X") {
        return multiply(num1, num2);
    } else if (operand === "%") {
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
            operand = '';
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
            display.textContent = answer;
            num1 = answer;
            num2 = '';
            operand = operator.textContent;
        } else if (num1 !== '' && num2 === '') {
            display.textContent = '';
            operand = operator.textContent;
        }
    })
});
 
equalsBtn.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '') {
        operate(operand, parseFloat(num1), parseFloat(num2))
    }
});

dotBtn.addEventListener('click', () => {
    if (decimalUsed === false) {
        decimalUsed = true;
    } 
})

allClear.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operand = '';
    decimalUsed = false;
});


/*function firstInput(input) {

    num1 += input
}

function updateDisplay() {

      return None
};*/