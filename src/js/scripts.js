async function main() {
    try {
        // Await is necessary for our functions with inputs to avoid concurrent inputs.
        const operator = await getValidInput("Please enter a operator: ");
        const left = await getValidInput("Please enter a left operand: ");
        const right = await getValidInput("Please enter a right operand: ");    
        output(`The result is ${calculator(operator, left, right)}.`);
    }
    catch (exception) {
        output("ERROR: "+exception);
    }
    
}
// Inputs and Outputs
function calculator(operator, leftOperand, rightOperand) {
    let result;
    // Parameters, at the end of the day, behave like local variables. So we can reassign / format them as needed.
    operator = operator.trim();
    leftOperand = Number(leftOperand);
    rightOperand = Number(rightOperand);
    if (operator == "+")
    {
        result = leftOperand + rightOperand;
    }
    else if (operator == "-")
    {
        result = operator - rightOperand;
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
// async is necessary if we are using input.
async function getValidInput(prompt) {
    const userInput = await input(prompt);
    if (userInput.trim() == "")
    {
        throw new Error("You did not enter a value.");
    }
    return userInput;
}