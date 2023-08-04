async function main() {

    try
    {
        let orderNumber = await input("Please enter your 6 character order number: ");
        if (!orderNumber.match(/^[a-zA-Z0-9]{6}$/g))
        {
            throw new Error("Your order number is invalid. It must be 6 alphanumeric characters.");
        }
        output(orderNumber);
    }
    catch (exception)
    {
        output(exception.message);
    }
}


