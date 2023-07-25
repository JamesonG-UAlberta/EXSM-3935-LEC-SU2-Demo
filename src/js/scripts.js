async function main() {

    let name = await input("Please enter your name: ");
    let age = await input("Please enter your age: ");

    try 
    {
        if (age < 18)
        {
            throw "You have entered an age that is insufficient for access to this resource.";
        }
    }
    catch (exception)
    {
        output("Oops. An error occured.");
        output(exception);
    }
    output("We're done.");
}


