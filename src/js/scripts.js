async function main() {

    const orderNumbers = new Set(["ABC101", "DEF202"]);
    const quantities = [5, 12];
    try
    {
        let orderNumber = await input("Please enter your 6 character order number: ");
        if (!orderNumber.match(/^[a-zA-Z0-9]{6}$/g))
        {
            throw new Error("Your order number is invalid. It must be 6 alphanumeric characters.");
        }
        if (orderNumbers.has(orderNumber.toUpperCase()))
        {
            throw new Error("Your order number already exists.");
        }
        orderNumbers.add(orderNumber);
        let quantity = Number(await input("Please enter the quantity: "));
        if (isNaN(quantity))
        {
            throw new Error("Your quantity was not valid. It must be a number between 1 and 100 inclusive.");
        }
        if (quantity < 1 || quantity > 100)
        {
            throw new Error ("The quantity must be between 1 and 100 inclusive.");
        }
        quantities.push(quantity);
    }
    catch (exception)
    {
        output(exception.message);
    }
}


