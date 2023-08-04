async function main() {
    try
    {
        let costOfGoods = Number(await input("Please enter the total cost of goods (omit dollar sign): "));
        if (isNaN(costOfGoods)) 
        {
            throw new Error("You have entered a cost of goods that is not a number.");
        }
        let cashPayment = Number(await input("Please enter the payment rendered by the customer (omit dollar sign): "));
        if (isNaN(cashPayment)) 
        {
            throw new Error("You have entered a cash payment that is not a number.");
        }
        let discountCode = await input("Please enter the discount code (if present, enter 0 to skip): ");
    
        let discountPercentage;
        switch (discountCode) 
        {
            case "1": 
                discountPercentage = 0.1;
                break;
            case "2": 
                discountPercentage = 0.15;
                break;
            case "3": 
                discountPercentage = 0.25;
                break;
            case "4": 
                discountPercentage = 0.35;
                break;
            case "5": 
                discountPercentage = 0.40;
                break;
            case "0": 
                discountPercentage = 0;
                break;
            default: 
                throw new Error("Invalid discount code entered. No discount applied.");
                // Since throw breaks program flow, this break is "wasted", but isn't a bad idea for semantics.
                break;
        }
        const discountedCost = costOfGoods*(1-discountPercentage);
        const change = cashPayment-(discountedCost);
        if (change < 0)
        {
            throw new Error("Insufficient payment rendered. Sorry, you cannot afford the goods.");
        }
        else
        {
            output(`Your total after discounts is ${discountedCost}, you provided ${cashPayment}. Your change is ${change}.`);
        }
    }
    catch (exception)
    {
        output(`ERROR: ${exception.message}`);
        output("Ending program.");
    }
}


