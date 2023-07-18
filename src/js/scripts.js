async function main() {

    // Arithmetic Operators
    // + - * / % 
    // 2 Numbers in, 1 Number out*
    // *Excepting +, which can also be used to concatenate strings

    output("--- Relational Operators ---");

    // Relational Operators
    // > < >= <= 
    // 2 Numbers in, 1 Boolean out
    // == === != !==
    // 2 Anythings in, 1 Boolean out

    output(5 > 1); // true
    output(5 < 1); // false

    output(5 >= 1); // true
    output(5 > 1 || 5 == 1); // true
    output(5 <= 1); // false
    output(5 < 1 || 5 == 1); // false

    // = (Assignment) For assigning values to variables.
    // == (Equality or Equivalency) For comparing two operands (type insensitive).
    // === (Identity) For comparing two operands (type sensitive).
    output("Equality vs Identity");
    output("1" == 1);
    output("1" === 1);
    output(1 === 1);
    
    output("--- Logical Operators ---");

    // Logical Operators
    // && || 
    // 2 Booleans in, 1 Boolean out
    // !
    // 1 Boolean in, 1 Boolean out

    // && is the "and" operator. It returns true if both of its inputs are true.
    // "Both of"
    output(true && true); // true
    output(true && false); // false
    output(false && false); // false
    
    // || is the "or" operator. It returns true if either of its inputs are true.
    // "At least one of"
    output(true || true); // true
    output(true || false); // true
    output(false || false); // false
    
    // Multiple logical operators can be chained together (typically we use parentheses to ensure they are readable and the order of operations is as intended, however you can chain without them).
    output(true && true || false); // true
    output(true && (true || false)); // true

    // ! is the "not" operator. It returns the opposite of its input.
    output(!true); // false
    output(!false); // true

    output(true || (false || (true && false) || false && (true || false)));
    /*
    output(true || (false || false || false && (true || false)));
    output(true || (false || false || false && true));
    output(true || (false || false && true));
    output(true || (false && true));
    output(true || false);
    output(true);
    */

    /*
        Parentheses
        Not
        Arithmetic (* % /)
        Arithmetic (+ -)
        Relational (> < >= <=)
        Relational (== ===)
        Logical
    */
    output("--- Problem Solving ---");
    output((3.14 <= 5 && "1" === 1 || (1 == 1 && 9 % 2 >= 1)) && (5.5 <= 5.4 || (16/3 < 5)));
    /*
    output((3.14 <= 5 && "1" === 1 || (1 == 1 && 1 >= 1)) && (5.5 <= 5.4 || (16/3 < 5)));
    output((3.14 <= 5 && "1" === 1 || (1 == 1 && true)) && (5.5 <= 5.4 || (16/3 < 5)));
    output((3.14 <= 5 && "1" === 1 || (true && true)) && (5.5 <= 5.4 || (16/3 < 5)));
    output((3.14 <= 5 && "1" === 1 || true) && (5.5 <= 5.4 || (16/3 < 5))); // At this point we can skip the left side of the left-center && because the right side is true and the operator is or.
    output((3.14 <= 5 && "1" === 1 || true) && (5.5 <= 5.4 || (5 < 5))); 
    output((3.14 <= 5 && "1" === 1 || true) && (5.5 <= 5.4 || false)); 
    output((true && "1" === 1 || true) && (5.5 <= 5.4 || false)); 
    output((true && false || true) && (5.5 <= 5.4 || false)); 
    output((false || true) && (5.5 <= 5.4 || false)); 
    output(true && (5.5 <= 5.4 || false)); 
    output(true && (false || false)); 
    output(true && false); 
    output(false); 
    */

    output("--- String Comparisons ---");
    // Letters are encoded as numbers, and uppercase and lowercase variants are different numbers. This leads to comparisons of the same letter being false because of casing discrepencies.
    // To avoid this you can simply convert your operands to a standardized case (upper or lower, it doesn't really matter) prior to comparisons.
    output("A" == "a");
    output("A" === "a");
    output("A" == "A");
    output("A" === "A");
    output("A" == "a".toUpperCase());

    // Similarly, any whitespace (space, tab, linebreak) will cause comparisons to return false. Remove them with trim(). Note this won't affect "double-spaces" where the user accidentally hit spacebar twice.
    output("Hello" == "Hello ");
    output("Hello" == "Hello ".trim());

    output("--- Ternary Expressions ---");
    const timeHour = 14;
    // Ternary expressions have 3 sections:
    // 1: The boolean expression.
    // Separator ?
    // 2: The value to return from the expression if section 1 is true.
    // Separator :
    // 3: The value to return from the expression if section 1 is false.
    output(timeHour <= 12 ? "Good Morning" : "Good Afternoon");
    output(`Good ${timeHour <= 12 ? "Morning" : "Afternoon"}`);

    // Ternary expressions can be injected into compound expressions to "replace" values depending on another condition.
    // Note that having all literal values like this would never happen in real solutions, there would be variables in here - this is just for problem solving practice.
    output((3.14 <= 5 && "1" === 1 || (1 == (1 > 2 ? 1 == 1 : 2 > 5) && 9 % 2 >= 1)) && (5.5 <= 5.4 || (16/3 < 5)));

    output("--- If / Else Decisions ---");

    let userName = await input("Please enter your name: ");
    if (userName.trim() == "")
    {
        output("You didn't enter a name! You get one more chance.");
        userName = await input("Please enter your name (final chance): ");
        if (userName.trim() == "") 
        {
            output("You have failed to enter your name. Dissapointing.");
        }
        else
        {
            output(`Hello, ${userName}!`);
        }
    }
    else
    {
        output("Good job on entering your name!");
        output(`Hello, ${userName}!`);
    }
    output("Fin.");

    const myNumber = 5;

    if (myNumber > 0)
    {
        output("It's positive!");
    }
    else
    {
        if (myNumber < 0)
        {
            output("It's negative!");
        }
        else
        {
            output("It's zero!");
        }
    }

    // Pseudo multi-branch decision.
    // Any time your condition requires expressions, use this.
    if (myNumber > 0)
    {
        output("It's positive!");
    }
    else if (myNumber < 0)
    {
        output("It's negative!");
    }
    else
    {
        output("It's zero!");
    }

    // If your condition is purely equivalency with discrete values.
    switch (myNumber)
    {
        case 1:
        case 2:
            output("It's one or two!");
            break;
        case 3:
            output("It's three!");
            break;
        case 4:
            output("It's four!");
            break;
        default: 
            output("I don't know what it is!");
            break;
    }

    // This is the same as the above switch.
    if (myNumber == 1 || myNumber == 2)
    {
        output("It's one or two!");
    }
    else if (myNumber == 3)
    {
        output("It's three!");
    }
    else if (myNumber == 4)
    {
        output("It's four!");
    }
    else
    {
        output("I don't know what it is!");
    }

    
}


