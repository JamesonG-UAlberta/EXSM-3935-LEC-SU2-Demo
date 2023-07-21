async function main() {
    let leftOperand = await input("Enter the left operand: ");
    let operator = await input("Enter the operator (+ - * /): ");
    let rightOperand = await input("Enter the right operand: ");
    let result;
    switch (operator.trim().toLowerCase()) {
        case "+":
            result = Number(leftOperand) + Number(rightOperand);
            break;
        case "-":
            result = Number(leftOperand) - Number(rightOperand);
            break;
        case "*":
        case "x":
            result = Number(leftOperand) * Number(rightOperand);
            break;
        case "/":
            result = Number(leftOperand) / Number(rightOperand);
            break;
        default:
            result = "Invalid operator.";
            break;
    }
    output(`${leftOperand} ${operator} ${rightOperand} = ${result}`);
}


