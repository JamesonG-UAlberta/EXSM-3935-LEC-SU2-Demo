async function main() {
    output("1");
    output("2");
    myFunction();
    output("3");
    // Values going into parameters are called arguments.
    myFunctionWithParameters("Hello", "World");
    myFunctionWithParameters("first", "second");
    output("4");
    myFunctionWithReturn();
    output(myFunctionWithReturn());
    let returnOfFunction = myFunctionWithReturn();
    output(`Value stored in returnOfFunction: ${returnOfFunction}`);
    await input("This is main, please enter your name: ");
    const operator = await input("Please enter a operator: ");
    const left = await input("Please enter a left operand: ");
    const right = await input("Please enter a right operand: ");
    output(`The result is ${calculator(operator, left, right)}.`);
}
// No Inputs, No Outputs (Mainly for Console Display)
function myFunction() {
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
// No Inputs, Outputs
function myFunctionWithReturn() {
    output("Returning an approximation of Pi.");
    return 3.14;
}
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