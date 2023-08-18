async function main() {
    let userInput;
    do {
        output("--- Value Checker ---");
        output("1. String Checker");
        output("2. Integer Checker");
        output("3. Year Checker");
        output("4. Date Checker");
        output("5. Quit Application");
        userInput = (await input("Please make a selection: ")).trim();
        if (["1", "2", "3", "4"].includes(userInput))
        {
            let testValue = (await input("Please enter a value to test: ")).trim();
            if (userInput == "1") {
                output(stringChecker(testValue) ? "Value is a string." : "Contains a number!")
            }
            else if (userInput == "2") {
                output(integerChecker(testValue) ? "Value is a number." : "Not a number!")
            }
            else if (userInput == "3") {
                output(yearChecker(testValue) ? "Value is a year." : "Not a year!")
            }
            else {
                output(dateChecker(testValue) ? "Value is a date." : "Not a date!")
            }
        }
        else if (userInput != "5")
        {
            output("Invalid input received, please try again.");
        }
    } while (userInput != "5");
    output("Goodbye!");
}
function stringChecker(input) {
    return !(/\d/).test(input);
}
function integerChecker(input) {
    return (/^\d+$/).test(input);
}
function yearChecker(input) {
    return (/^\d+$/).test(input) && Number(input) >= 1900 && Number(input) <= new Date().getFullYear();
}
function dateChecker(input) {
    const datePieces = input.split("-");
    return yearChecker(datePieces[0]) &&
    (/^\d+$/).test(datePieces[1]) &&
    Number(datePieces[1]) >= 1 &&
    Number(datePieces[1]) <= 12 &&
    (/^\d+$/).test(datePieces[2]) &&
    Number(datePieces[2]) >= 1 &&
    Number(datePieces[2]) <= 31 &&
    datePieces.length == 3;
}

