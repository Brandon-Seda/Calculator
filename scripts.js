let displayVariable = "";
let answer = "";
let answerArray = []



let textField = document.querySelector(".text-field");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");


for(let i = 0; i < numbers.length; i++){
    
    numbers[i].addEventListener("click", function(){
        setDisplay(numbers[i].innerHTML);
    })
}

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        setDisplay(operators[i].innerHTML);
    })
}

function setDisplay(input){   
    if(input == "+" || input == "-" || input == "/" || input == "*"){
        textField.innerHTML +=  (" " + input + " ");
    } else {
        textField.innerHTML += input;
    }
}



function add(a, b){
    answer = a + b
}

function subtract(a, b){
    answer = (a - b);
}

function multiply(a, b){
    answer = (a * b); 
}

function divide(a, b){
    if(b === 0){
        answer =  "NaN";
    } else {
        answer = (a / b);
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


function clear(){

}
