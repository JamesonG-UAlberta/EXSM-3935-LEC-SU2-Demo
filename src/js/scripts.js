async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    
    // Initialize
    let name = await input(prompt);

    // Test
    // Do-While loops are just like while loops except they run 1 or more times.
    // While loops run 0 or more times.
    // This means the code block of a do-while loop will always at least once run even if the condition is false at the start,
    // and continues to be false until the test. 
    do
    {
        // Process
        output("Hello, "+name+"!");
        // Modify
        // You MUST modify at least one variable used in your condition to avoid infinite loops (somewhere in the loop).
        name = await input(prompt);
    } while (name != "Exit");
}


