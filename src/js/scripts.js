async function main() {
    const accounts = {
        "admin": "password1",
        "user": "p@ssword" 
    };
    output("1. Register");
    output("2. Login");
    output("3. Quit");
    const menuChoice = (await input("Please make a selection: ")).trim();
    if (menuChoice == "1")
    {
        try
        {  
            await register(accounts);
        }
        catch (exception)
        {
            output(exception);
        }
    }
    else if (menuChoice == "2")
    {
        try
        {  
            await login(accounts);
        }
        catch (exception)
        {
            output(exception);
        }
    }
    else if (menuChoice == "3")
    {
        output("Thank you, come again.");
    }
    else 
    {
        output("Invalid choice. Exiting.");
    }
}
// Arrow function:
//const validatePassword = (password) => password.length >= 8;
function validatePassword(password) {
    return password.length >= 8;
}

async function register(accounts) {
    let username = (await input("Please enter your username: ")).trim();
    if (username == "")
    {
        throw Error("The username cannot be empty.");
    }
    else if (accounts[username]) 
    {
        throw Error("The username exists.");
    }
    else
    {
        let password = await input("Please enter your password: ");
        if (!validatePassword(password))
        {
            throw Error("The password must be 8 or more characters long.");
        }
        else
        {
            accounts[username] = password;
        }
    }
}
async function login(accounts) {
    let username = (await input("Please enter your username: ")).trim();
    if (username == "")
    {
        throw Error("The username cannot be empty.");
    }
    else if (!accounts[username]) 
    {
        throw Error("The username does not exist.");
    }
    else
    {
        let password = await input("Please enter your password: ");
        if (!validatePassword(password))
        {
            throw Error("The password must be 8 or more characters long.");
        }
        else if (accounts[username] != password)
        {
            throw Error("The password is incorrect.");
        }
        else
        {
            output(`Welcome, ${username}!`);
        }
    }
}