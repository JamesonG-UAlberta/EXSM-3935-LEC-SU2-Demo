async function main() {
    let myDictionary = {
        Hello: "A greeting when you see somebody.",
        Goodbye: "What you say when you leave.",
        Pen: "A writing utensil using ink.",
        Pencil: "A writing utensil using graphite.",
        DoesntExist: false
    }

    output(myDictionary.Hello);
    output(myDictionary["Hello"]);

    if (myDictionary.DoesntExist !== undefined)
    {
        output("It exists.");
    }
    else
    {
        output("It doesn't exist.");
    }

    let myDictionaryNumbers = {
        Pi: 3.14,
        Array: [1, 2, 3, 5, 7, 9, 11, 15],
        Boolean: false
    }

    let myDictionaryNumberKeys = {
        7: "Seven",
        11: "Eleven"
    }

    output(myDictionaryNumberKeys[7]);
    // This is a syntax error, you can't use the dot operator with numeric key names.
    // output(myDictionaryNumberKeys.7);

}


