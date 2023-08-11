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
                if (password == "")
                {
                    throw Error("The password cannot be empty.");
                }
                else if (password.length < 8)
                {
                    throw Error("The password is too short.");
                }
                else
                {
                    accounts[username] = password;
                }
            }
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
                if (password == "")
                {
                    throw Error("The password cannot be empty.");
                }
                else if (password.length < 8)
                {
                    throw Error("The password is too short.");
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


