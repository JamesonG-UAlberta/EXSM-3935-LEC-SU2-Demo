async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    
    // Initialize
    //let name = await input(prompt);

    // Test
    // While loops are just like decisions - you can replace the word "while" with "if" and it will function just fine.
    // The caveat is that "while" will run again as soon as it's done (including the test).
    //while (name != "Exit") 
    //{
        
        // Modify
        // You MUST modify at least one variable used in your condition to avoid infinite loops (somewhere in the loop).
        //name = await input(prompt);
    //}


    for (let name = await input(prompt); name != "Exit"; name = await input(prompt))
    {
        // Process
        output("Hello, "+name+"!");
    }

    
}


