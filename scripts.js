
function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return(a * b); 
}

function divide(a, b){
    if(b === 0){
        return "Cannot divide by 0";
    } else {
        return (a / b);
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
            return "Try an one of these operators +, -, *, /!"
    }


}

function clear(){

}


