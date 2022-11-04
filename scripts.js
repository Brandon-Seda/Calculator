let displayVariable = "";
let answer = "";
let numberArr = []
let operatorArr = [];
let numberVar = "";

let textField = document.querySelector(".text-field");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", function(){
    deleteNum();
});


clearBtn.addEventListener("click", function(){
    clearField();
});

for(let i = 0; i < numbers.length; i++){
    
    numbers[i].addEventListener("click", function(){
        setDisplay(numbers[i].innerHTML);
        displayVariable += numbers[i].innerHTML;
        numberVar += numbers[i].innerHTML;
        

    })
}


for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        if(operators[i].innerHTML != "="){
            setDisplay(operators[i].innerHTML);
            numberArr.push(numberVar);
            operatorArr.push(operators[i].innerHTML); 
            displayVariable += operators[i].innerHTML;
        } 
        else {
            setDisplay(operators[i].innerHTML);
            if(numberArr.length > 1){
                numberArr.push(numberVar);
                operate(operatorArr[0], numberArr[0], numberArr[1]);
                numberArr.replace(numberArr[1], numberArr[2]);
                numberArr[0] = answer;
            }
        }
        console.log(numberArr)
        console.log(operatorArr)
        numberVar = "";
    })
}





function setDisplay(input){   
    if(input == "+" || input == "-" || input == "/" || input == "*"){
        textField.innerHTML +=  (" " + input + " ");
    } else if(input == "="){
        textField.innerHTML = answer;
        
    } else {
        textField.innerHTML += input;
    }
}

function add(a, b){
    answer = a + b
    return answer;
}

function subtract(a, b){
    answer = (a - b);
    return answer;
}

function multiply(a, b){
    answer = (a * b); 
    return answer;
}

function divide(a, b){
    if(b === 0){
        answer =  "";
        return answer;
    } else {
        answer = (a / b);
        return answer;
    }
}


function operate(operator, a, b){
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
            return ""
    }
}


function deleteNum(){
    if(displayVariable.length == 1){
        displayVariable = ""
        textField.innerHTML = displayVariable;
    } 
    
        displayVariable = displayVariable.slice(0, displayVariable.length-1);
        textField.innerHTML = displayVariable;
    
}

function clearField(){  
    textField.innerHTML = "";
    numberVar = ""
    answer = "";
    numberArr = [];
    operatorArr = [];
    displayVariable = ""
}
