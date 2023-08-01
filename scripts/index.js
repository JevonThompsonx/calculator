const result = document.querySelector('#result');
const numHome = document.querySelector('#numHome');
const equalSign = document.querySelector('#equalSign')
const problemScreen = document.querySelector('#problem-screen')

const rows = numHome.children 
const firstRow = rows.firstRow.children
const secondRow = rows.secondRow.children
const thirdRow = rows.thirdRow.children
const fourFiveLeftChildren = rows.fourFiveEqualRow.children.fourFiveLeft.children
const fourthRow = fourFiveLeftChildren.fourthRow.children
const fifthRow = fourFiveLeftChildren.fifthRow.children

const AC = firstRow.AC
const buttons = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow, ...fifthRow, equalSign];
const operators =  [firstRow[2],firstRow[1], secondRow.subtractionSign,thirdRow.additionSign];
const operatorText = ['+','-','x','/']
const numberButtons = [secondRow.eight,secondRow.seven,secondRow.nine,thirdRow.four,thirdRow.five,thirdRow.six,fourthRow.one,fourthRow.two,fourthRow.three,fifthRow.zero];
const dot = fifthRow[1]
let firstNumber; //init variable to store value
let secondNumber; //init variable to store value
let answer = 0;
let operationResult;
let parsedResult; 
let operationType;
let type;   

const resetResultText = ()=> {
    emptyProblemText();
    result.textContent = '0' //specifically make it a string so that for button loop else statement works
}
const emptyResultText = ()=> {
    emptyProblemText();
    result.textContent = ''
}

const emptyProblemText = ()=> {
    problemScreen.textContent = ''
}
const operations =  {
    multiply : (x,y)=> {
    return x * y
    },
    subtraction : (x,y)=> {
    return x - y
    },
    addition : (x,y)=> {
    return x + y
    } ,
    divide : (x,y)=> {
    return x / y
    }           
}

const operate = (operationType,unparsedfirstNum,unparsedsecondNum)=> { 
    let parsedfirstNumber = parseFloat(unparsedfirstNum)
    let parsedsecondNumber = parseFloat(unparsedsecondNum)
    let operationTypeSelect = operations[`${operationType}`]
    let unparsedResult = operationTypeSelect(parsedfirstNumber,parsedsecondNumber)
    parsedResult = parseFloat(unparsedResult)
    console.log(parsedResult)
    return parsedResult
}

for (let operator of operators ){
    operator.addEventListener('click', ()=> {
    let findType = ()=> {
        if (operator.textContent === '/') {
            return 'divide'
        }
         else if (operator.textContent === 'x') {
            return 'multiply'
        }
         else if (operator.textContent === '+') {
            return 'addition'
        }
         else  {
            return 'subtraction'
        }
    }    

    firstNumber = result.textContent
    result.textContent = operator.textContent
    type = findType();
    })
}

AC.addEventListener('click', ()=> {
    resetResultText();
})

for (let button of numberButtons) {
    button.addEventListener('click', ()=> {
    
        let emptyAndAdd = ()=> {
            emptyResultText();
            result.textContent += button.textContent
        }
        if (result.textContent === '0') {
            emptyAndAdd();
        }
        else if (operatorText.includes(result.textContent)) {
            emptyAndAdd();
        }
        else {
            result.textContent += button.textContent
        }

}  )
    
}
dot.addEventListener('click', ()=> {
    result.textContent += '.'
})
equalSign.addEventListener('click', ()=> {
        secondNumber = result.textContent
        emptyResultText();

        
        result.textContent = operate(type,firstNumber,secondNumber)

        if (type === 'subtraction') {
            type = '-'
        }
        else  if (type === 'multiply') {
            type = 'x'
        }
         else if (type === 'divide') {
            type = '/'
        }
        else  if (type === 'addition') {
            type = '+'
        }
                problemScreen.textContent = `${firstNumber} ${type} ${secondNumber}`

})