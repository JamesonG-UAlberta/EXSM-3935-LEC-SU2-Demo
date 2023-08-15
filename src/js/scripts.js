async function main() {
    for (/* Initialize */ let quantity = 1; /* Test */ quantity <= 10; /* Modify */ quantity++)
    {
        // Process
        output(quantity);
    }

    // Iterating over an array.
    const outputs = ["Hello", "World", "123", "Testing"];
    for (let outputIndex = 0; outputIndex < outputs.length; outputIndex++)
    {
        output(outputs[outputIndex]);
    }
}


