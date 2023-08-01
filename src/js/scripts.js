async function main() {
    let mySet = new Set(["First", "Second", "Third", "Third", "Fourth"]);

    // Sets are used to maintain a lack of duplicate items in an "array".
    // To access the values, you have to store an "iterator", and pull the items out one by one.
    // Until we learn loops, this is the way it must be done.
    // Note that the second instance of "Third" was rejected as a duplicate, and the fifth call of .next() gives us undefined as there are only 4 items stored.
    const valuesInSet = mySet.values();
    output(valuesInSet.next().value);
    output(valuesInSet.next().value);
    output(valuesInSet.next().value);
    output(valuesInSet.next().value);
    output(valuesInSet.next().value);


    const myArray = ["John", "Joe", "Sue", "Joe", "John", "Tom", "Joe"];

    const mySetFromArray = new Set(myArray);
    const valuesInSetFromArray = mySetFromArray.values();
    output(valuesInSetFromArray.next().value);
    output(valuesInSetFromArray.next().value);
    output(valuesInSetFromArray.next().value);
    output(valuesInSetFromArray.next().value);
    output(valuesInSetFromArray.next().value);
}


