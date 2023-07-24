const result = document.querySelector('#result');
const numHome = document.querySelector('#numHome');
const equalSign = document.querySelector('#equalSign')

const rows = numHome.children 
const firstRow = rows.firstRow.children
const secondRow = rows.secondRow.children
const thirdRow = rows.thirdRow.children
const fourFiveLeftChildren = rows.fourFiveEqualRow.children.fourFiveLeft.children
const fourthRow = fourFiveLeftChildren.fourthRow.children
const fifthRow = fourFiveLeftChildren.fifthRow.children

const buttons = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow, ...fifthRow, equalSign]
const operators =  [firstRow[1], secondRow.subtractionSign,thirdRow.additionSign,equalSign ]
let firstNumber; //init variable to store value
let secondNumber; //init variable to store value
let operator;
let answer = 0;

const resetResultText = ()=> {
    result.textContent = '0' //specifically make it a string so that for button loop else statement works
}
const emptyResultText = ()=> {
    result.textContent = ''
}
const operations =  {
    multiply : (x,y)=> {
    return x * y
    },
    subtraction : (x,y)=> {
    return x * y
    },
    addition : (x,y)=> {
    return x * y
    } ,
    divide : (x,y)=> {
    return x * y
    }           
}

const operate = (type,firstNum,secondNum)=> { 
    let firstNumber = parseFloat(firstNumber)
    let secondNumber = parseFloat(secondNumber)
    let operationTypeSelect = operations[`${type}`]
    let operationResult = paraseFloat(operationTypeSelect(firstNum,secondNum))
    result.textContent = operationResult
    answer = operationResult
    return answer
}

for (let button of buttons) {
    button.addEventListener('click', ()=> {
    if (operators.includes(button)) { //goal: fix so that firstNum is entered, wait for operator, wait for second num then operate
        if (button === buttons.additionSign) {
        operate(addition);
        }
        else if (button === buttons.subtractSign) {
        operate(subtract);
        }
        else if (button === buttons.multiplySign) {
        operate(multiply);
        }
        else if (button === buttons.divideSign) {
        operate(divide);
        }
    }
    else if (button === firstRow.AC) {
    resetResultText();
    }
    else { //add nums to string
        if (result.textContent === '0') {
            emptyResultText();
            result.textContent += button.textContent
        }
        else {
            result.textContent += button.textContent
        }
    }
}  )
    
}