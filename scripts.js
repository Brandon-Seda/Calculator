let firstNum = "";
let secondNum = "";
let opertation = null;
let reset = false;


const textFieldCurr = document.querySelector(".text-field-curr");
const textFieldPrev = document.querySelector(".text-field-prev");
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");




deleteBtn.addEventListener("click", function(){
    deleteNum();
});


clearBtn.addEventListener("click", function(){
    clearField();
});


numbers.forEach((button) =>
button.addEventListener('click', () => getNumber(button.textContent)))

function getNumber(number){
    if(textFieldCurr.textContent === '0' || reset){
        resetTextField();
    }
    textFieldCurr.textContent += number;
}

function resetTextField(){
    textFieldCurr.textContent = "";
    reset = false;
}


operators.forEach((button) => 
button.addEventListener('click', () => getOperator(button.textContent)))

function getOperator(operator){
    if(opertation !== null) evaluate()
    firstNum = textFieldCurr.textContent
    opertation = operator;
    textFieldPrev.textContent = '${firstNum} ${operation}'

}

function evaluate(){
    if(opertation === null || reset) return
    if(opertation === "/" && textField.textContent === "0"){
         return textFieldCurr.textContent = "Cannot divide by 0!"
    }
    secondNum = textFieldCurr.textContent;
    textFieldCurr.textContent = operate(opertation, firstNum, secondNum)

}


function setDisplay(input){   
    if(input == "+" || input == "-" || input == "/" || input == "*"){
        textFieldCurr.textContent +=  (" " + input + " ");
    } else if(input == "="){
        console.log(answer)

        textFieldCurr.textContent = answer;
        
    } else {
        textFieldCurr.textContent += input;
    }
}

function add(a, b){   
    return a + b;
}

function subtract(a, b){ 
    return a - b;
}

function multiply(a, b){
     
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return "NaN";
    } else {
        return a / b;
    }
}


function operate(operator, a, b){
    a = Number(a);
    b = Number(b);

    switch (operator){
        case '+':
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null
    }
}


function deleteNum(){
    if(displayVariable.length == 1){
        displayVariable = ""
        textField.textContent = displayVariable;
    } 
        displayVariable = displayVariable.slice(0, displayVariable.length-1);
        textField.textContent = displayVariable;
}

function clearField(){  
    textField.textContent = "0";
    numberVar = ""
    answer = "";
    displayVariable = ""
}
