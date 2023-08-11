async function main() {
    let myVariable = 5;
    myVariable = myVariable + 1;
    myVariable += 1;
    myVariable++;

    output(addTwoNumbers(3, 5));
}



// No Inputs, No Outputs (Mainly for Console Display)
function myFunction() {
    output("This is a function!");
    output("Hello, world!");
}
const myArrowFunction = () => {
    output("This is a function!");
    output("Hello, world!");
}

// Inputs, No Outputs
// Local variables declared for the lifespan of the function and populated with arguments are called parameters.
function myFunctionWithParameters(firstParameter, secondParameter) {
    output("Function Begin");
    // Because these are displaying parameters, the function can be called with different arguments, and what is displayed will be different.
    output(`firstParameter: ${firstParameter}`);
    output(`secondParameter: ${secondParameter}`);
    output("Function End");
}
const myArrowFunctionWithParameters = (firstParameter, secondParameter) => {
    output("Function Begin");
    output(`firstParameter: ${firstParameter}`);
    output(`secondParameter: ${secondParameter}`);
    output("Function End");
}

// No Inputs, Outputs
function myFunctionWithReturn() {
    output("Returning an approximation of Pi.");
    return 3.14;
}
const myArrowFunctionWithReturn = () => {
    output("Returning an approximation of Pi.");
    return 3.14;
}
const myArrowFunctionWithOnlyReturn = () => 3.14;

// Inputs and Outputs
function calculator(operator, leftOperand, rightOperand)
{   
    let result;
    leftOperand = Number(leftOperand);
    rightOperand = Number(rightOperand);
    operator = operator.trim();
    if (operator == "+")
    {
        result = leftOperand + rightOperand;
    }
    else if (operator == "-")
    {
        result = leftOperand - rightOperand;
    }
    else if (operator == "*")
    {
        result = leftOperand * rightOperand;
    }
    else if (operator == "/")
    {
        result = leftOperand / rightOperand;
    }
    else 
    {
        result = NaN;
    }
    return result;
}
const addTwoNumbers = (left, right) => left+right;