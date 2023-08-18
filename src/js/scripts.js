async function main() {
    const inventory = [
        [1234, "Apple", 0.75], 
        [1235, "Orange", 0.99]
    ];
    let total = 0;
    let receipt = [];
    let userInput;
    do 
    {
        userInput = (await input("Please enter a product code (END to exit): ")).trim().toUpperCase();
        if (userInput != "END")
        {
            let found = false;
            for (let inventoryIndex = 0; inventoryIndex < inventory.length && !found; inventoryIndex++)
            {
                if (inventory[inventoryIndex][0] == userInput)
                {
                    found = true;
                    output(`Adding ${inventory[inventoryIndex][1]} to the receipt.`);
                    receipt.push(inventory[inventoryIndex][1]);
                    total += inventory[inventoryIndex][2];
                }
            }
        }
    } while (userInput != "END")
    output(`Your total is ${total} and you purchased: ${receipt}`);
}


