async function main() {
    // This is where the code you're actually experimenting with goes.
    
    /*
    let prompt = "Please enter your name, or 'Exit' to quit: ";
    let name = await input(prompt);

    while (name != "Exit")
    {
        output("Hello, "+name+"!");
        name = await input(prompt);
    }
    */

    // "Curse" Words:
    // goto, continue, break (only outside of switches), and return (more than once per function).
    // Do not use these.

    // Data Types:
    // string: A collection of characters.
    let myString = "Hello, World!";
    // number: Integers or decimals.
    let myNumber = 42;
    // boolean: True or false.
    let myBoolean = true;
    
    // null: Intentionally empty.
    // undefined: Unintentionally empty.

    // Arithmetic Operators:
    // + - * / % 
    let myAdditionResult = myNumber + 1; // 43
    let myConcatenationResult = myString + " Test."; // "Hello, World! Test."

    // Interpolation is a more advanced (and cleaner) method of concatenation.
    let myInterpolationResult = `${myString} Test.`; // "Hello, World! Test."

    // String Functions
    let myCapitalizedString = myString.toUpperCase(); // "HELLO, WORLD!"
    let myIncludesBool = myString.includes("World"); // true
    let mySlicedString = myString.slice(0, 5); // "Hello"
    let myReplacedString = myString.replace("World", "Universe"); // "Hello, Universe!"

    // Relational Operators: 
    // Coming soon.

    // Logical Operators:
    // Coming soon.

    

}


