async function main() {
    const player1Token = "X";
    const player2Token = "O";
    const gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    let playerTurn = player1Token;
    let menuChoice;
    do
    {
        output("--- Welcome to Tic-Tac-Toe ---");
        output("1. Play a Game");
        output("2. Exit");
        menuChoice = (await input ("Please make a selection: ")).trim();
        if (menuChoice == "1")
        {
            output("Playing game...");
        }
        else if (menuChoice == "2")
        {
            output("Thank you for playing, please come again!");
        }
        else 
        {
            output("Invalid menu choice, please try again.");
        }
    } while (menuChoice != "2");

}


