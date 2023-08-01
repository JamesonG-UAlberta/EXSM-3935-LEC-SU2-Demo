async function main() {
    // let myArray = ["First Item", "Second Item", "Third Item"];
    const myArray = [];

    // myArray.push(await input("Please enter the first name: "));
    // myArray.push(await input("Please enter the second name: "));
    // myArray.push(await input("Please enter the third name: "));
    myArray.push("James");
    myArray.push("John");
    myArray.push("Sue");


    output(myArray[0]); // James
    output(myArray[1]); // John
    output(myArray[2]); // Sue

    const mySecondArray = myArray;

    output(mySecondArray[1]); // John

    mySecondArray[1] = "Toby";

    output(mySecondArray[1]); // Toby
    output(myArray[1]); // Toby


    // Value Variable 
    let myVar = 42;

    // Reference Variable
    let myReferenceArray = ["Hello", "World"];
    // When we create an array, the array itself isn't "stored" in the variable. It is stored elsewhere in the computer's memory.
    // The address to that "elsewhere" is what is stored in the variable (kind of like a forwarding address).

    // The spread operator allows us to "clone" an array.
    let clonedArray = [...myArray];
    // Before the spread operator was introduced, an array could be cloned by passing no arguments to slice.
    let anotherClone = myArray.slice();

    clonedArray[1] = "Anne";

    output(clonedArray[1]); // Toby
    output(myArray[1]); // Toby

    let combinedArray = myArray.concat(myReferenceArray);
    let mySpreadCombinedArray = [...myArray, ...myReferenceArray];

    combinedArray.sort();

}


