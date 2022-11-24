let firstNum = "";
let secondNum = "";
let operation = null;
let reset = false;


const textFieldCurr = document.querySelector(".text-field-curr");
const textFieldPrev = document.querySelector(".text-field-prev");
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const point = document.querySelector(".point");

deleteBtn.addEventListener("click", function(){
    deleteNum();
});

clearBtn.addEventListener("click", function(){
    clearField();
});

point.addEventListener("click", function(){
    addPoint();
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
    if(operation !== null) evaluate()
    firstNum = textFieldCurr.textContent
    operation = operator;
    reset = true;

}

function evaluate(){
    if(operation === null || reset || operation === "=") return
    if(operation === "/" && textFieldCurr.textContent === "0"){
        return textFieldCurr.textContent = "Undefined!"
    }
    secondNum = textFieldCurr.textContent;
    textFieldCurr.textContent = operate(operation, firstNum, secondNum)
    if(firstNum == "Undefined!"){
        clearField();
    } else {
        textFieldPrev.textContent = `${firstNum} ${operation} ${secondNum}`
        operation = null;
    }   
}   

function addPoint(){
    if(reset) resetTextField();
    if(textFieldCurr.textContent === "") {
        textFieldCurr.textContent = "0";
    }
    if(textFieldCurr.textContent.includes(".")) return
    textFieldCurr.textContent += ".";   
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
        return "";
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
    textFieldCurr.textContent = textFieldCurr.textContent.toString().slice(0, -1);
}

function clearField(){  
    textFieldCurr.textContent = "0";
    textFieldPrev.textContent = "";
    firstNum, secondNum = "";
    reset = false; 
    operation = null;
}
