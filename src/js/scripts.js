async function main() {
    let costOfGoods = await input("Please enter the total cost of goods (omit dollar sign): ");
    let cashPayment = await input("Please enter the payment rendered by the customer (omit dollar sign): ");
    let discountCode = await input("Please enter the discount code (if present, hit enter to skip): ");

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
        default: 
            output("Invalid discount code entered. No discount applied.");
        case "0": 
            discountPercentage = 0;
            break;
    }
    const discountedCost = costOfGoods*(1-discountPercentage);
    const change = cashPayment-(discountedCost);
    if (change < 0)
    {
        output("Insufficient payment rendered. Sorry, you cannot afford the goods.");
    }
    else
    {
        output(`Your total after discounts is ${discountedCost}, you provided ${cashPayment}. Your change is ${change}.`);
    }
    

}


