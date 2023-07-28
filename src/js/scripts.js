async function main() {
    try
    {  
     let username = await input("Please enter your username: ");
     if (username.trim() == "")
     {
        throw Error("The username cannot be empty.");
     }
     else if (username.trim().toLowerCase() != "admin") 
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
        else if (password != "adminpwd")
        {
            throw Error("The password is incorrect.");
        }
        else
        {
            output("Welcome, admin!");
        }
     }
    }
    catch (exception)
    {
        output(exception);
    }
}


