async function main() {
    // let myArray = ["First Item", "Second Item", "Third Item"];
    const my2DArray = [
        [], 
        [], 
        []
    ];

    my2DArray[0].push("James");
    my2DArray[0].push("Hannah");
    my2DArray[1].push("John");
    my2DArray[2].push("Sue");


    output(my2DArray[0]); // James,Hannah
    output(my2DArray[0][1]); // Hannah
    output(my2DArray[1]); // John
    output(my2DArray[2]); // Sue


}


