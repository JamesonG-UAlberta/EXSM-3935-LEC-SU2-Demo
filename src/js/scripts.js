async function main() {
    greeter(await getName(), await piggyBank());
}
async function getName() {
    let name = (await input("Please enter your name: ")).trim();
    if (name == "")
    {
        name = "child1";
    }
    return name;
}
async function piggyBank() {
    const inputString = (await input("Please enter your deposits in CSV (comma-separated value) format: ")).trim();
    const deposits = inputString.split(",");
    // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    const sum = deposits.reduce((partialSum, a) => partialSum + Number(a), 0);
    return sum;
}
function greeter(name, savings) {
    if (savings < 10)
    {
        output(`Hello ${name}! You’ve stored ${savings} so far. Better keep saving!`);
    }
    else if (savings <= 100)
    {
        output(`Hello ${name}! You’ve stored ${savings} so far. Good job!`);
    }
    else
    {
        output(`Hello ${name}! You’ve stored ${savings} so far. You should really spend some of it!`);
    }
}