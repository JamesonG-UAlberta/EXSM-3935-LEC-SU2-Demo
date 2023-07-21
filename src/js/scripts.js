async function main() {
     let username = await input("Please enter your username: ");
     if (username.trim() == "")
     {
        output("ERROR: The username cannot be empty.");
     }
     else if (username.trim().toLowerCase() != "admin") 
     {
        output("ERROR: The username does not exist.");
     }
     else
     {
        let password = await input("Please enter your password: ");
        if (password == "")
        {
            output("ERROR: The password cannot be empty.");
        }
        else if (password.length < 8)
        {
            output("ERROR: The password is too short.");
        }
        else if (password != "adminpwd")
        {
            output("ERROR: The password is incorrect.");
        }
        else
        {
            output("Welcome, admin!");
        }
     }
}


