async function main() {
    const myArray = ["Hello", "World"];    
    output(myArray);
    // Arrays (and objects) are passed to arguments by REFERENCE (meaning they tether to the original copy from the caller.)
    // Any modifications made within the function WILL APPLY TO THE ORIGINAL.
    const modifiedArray = await addItemToArray(myArray);
    output(myArray);
    output(modifiedArray);

}
// async is necessary if we are using input.
async function addItemToArray(theArray) {
    const userInput = await input("Please enter the item for the array: ");
    theArray.push(userInput);
    return theArray;
}