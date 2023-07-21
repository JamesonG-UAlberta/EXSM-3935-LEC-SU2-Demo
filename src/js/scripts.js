async function main() {
    output(`${await input("What is your first name?: ")} ${await input("What is your last name?: ")}`.replaceAll('o', 'a'));
    output(`The result is ${await input("Enter a big number (larger than 10): ") % await input("Enter a small number (smaller than 10): ")}.`);
}


