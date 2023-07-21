async function main() {
    let firstName = await input("What is your first name?: ");
    let lastName = await input("What is your last name?: ");
    const fullName = `${firstName} ${lastName}`.replaceAll('o', 'a');
    output(fullName);

    let bigNumber = await input("Enter a big number (larger than 10): ");
    let smallNumber = await input("Enter a small number (smaller than 10): ");
    let result = bigNumber % smallNumber;
    output(`${bigNumber} % ${smallNumber} = ${result}`);
}


