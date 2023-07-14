async function main() {
    // Write an input statement to get the name of the user, be sure to include a prompt! This field should be casted to type string (example: What is your name?: )
    let name = String(await input("Please enter your name: "));

    // Write an input statement to get the age of the user, be sure to include a prompt! This field should be casted to type number (example: What is your age? [Please enter a whole number]: )
    let age = Number(await input("Please enter your age (whole number): "));

    // Write an input statement to get the if the user likes clowns, be sure to include a prompt! This field should be casted to type boolean (example: Do you like clowns? [please enter true or false]: )
    let clowns = Boolean((await input("Do you like clowns? (please enter true or false): ")).includes("true"));

    //Your program should then output the following statement:
    //“Hello {name}! I see you are {age} years old and on the question of clowns, you answered {boolean}.”
    //Fill in the curly brackets of the statement with the information you received from the user.
    output(`Hello ${name}! I see you are ${age} years old and on the question of clowns, you answered ${clowns}.`);
}


