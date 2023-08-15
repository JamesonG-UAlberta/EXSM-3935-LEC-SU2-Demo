async function main() {
    // Iterating over an array.
    const outputs = ["Hello", "World", "123", "Testing"];
    for (let outputIndex = 0; outputIndex < outputs.length; outputIndex++)
    {
        output(outputs[outputIndex]);
    }

    // In this situation we do NOT have access to the index directly - only the item at that index.
    // So if you don't need the index, this is a shorthand way to iterate over a loop.
    // Keep in mind that mutating (changing) the value through this iterator variable is frowned upon in most cases,
    // and can even throw exceptions in some languages. For modifying the array, a traditional for loop is usually used.
    for (let thisOutput of outputs)
    {
        output(thisOutput);
    }    
}


