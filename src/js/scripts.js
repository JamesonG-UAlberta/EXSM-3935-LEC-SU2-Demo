async function main() {
    let menuChoice;
    do
    {
        output("--- Welcome to Tic-Tac-Toe ---");
        output("1. Play a Game");
        output("2. Exit");
        menuChoice = (await input ("Please make a selection: ")).trim();
        if (menuChoice == "1")
        {
            await playGame();
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
async function playGame() {
    const player1Token = "X";
    const player2Token = "O";
    const gameBoard = {
        "1":"1",
        "2":"2",
        "3":"3",
        "4":"4",
        "5":"5",
        "6":"6",
        "7":"7",
        "8":"8",
        "9":"9"
    }
    let playerTurn = player1Token;
    let turnCount = 1;
    while (!checkWin(gameBoard) && turnCount <= 9)
    {
        displayBoard(gameBoard);
        let playerSpace;
        do {
            playerSpace = (await input (`Player ${playerTurn}, please enter the space you would to play: `)).trim();
            if (gameBoard[playerSpace] != playerSpace)
            {
                output("Invalid input, please make another selection.");
            }
        } while (gameBoard[playerSpace] != playerSpace);
        gameBoard[playerSpace] = playerTurn;
        playerTurn = playerTurn == player1Token ? player2Token : player1Token;
        turnCount++;
    }
    displayBoard(gameBoard);
    if (checkWin(gameBoard))
    {
        playerTurn = playerTurn == player1Token ? player2Token : player1Token;
        output(`Congratulations Player ${playerTurn}! Returning to Main Menu.`);
    }
    else
    {
        output(`The game ended in a draw. Returning to Main Menu.`);
    }
} 
function checkWin(gameBoard) {
    let state;
    if (
        // Top Horizontal Line
        (gameBoard["1"] == gameBoard["2"] && gameBoard["1"] == gameBoard["3"]) || 
        // Middle Horizontal Line
        (gameBoard["4"] == gameBoard["5"] && gameBoard["4"] == gameBoard["6"]) || 
        // Bottom Horizontal Line
        (gameBoard["7"] == gameBoard["8"] && gameBoard["7"] == gameBoard["9"]) || 
        // Left Vertical Line
        (gameBoard["1"] == gameBoard["4"] && gameBoard["1"] == gameBoard["7"]) || 
        // Middle Vertical Line
        (gameBoard["2"] == gameBoard["5"] && gameBoard["2"] == gameBoard["8"]) || 
        // Right Vertical Line
        (gameBoard["3"] == gameBoard["6"] && gameBoard["3"] == gameBoard["9"]) || 
        // NW-SE Diagonal
        (gameBoard["1"] == gameBoard["5"] && gameBoard["1"] == gameBoard["9"]) || 
        // NE-SW Diagonal
        (gameBoard["3"] == gameBoard["5"] && gameBoard["3"] == gameBoard["7"])
    )
    {
        state = true;
    }
    else
    {
        state = false;
    }
    return state;
}
function displayBoard(gameBoard) {
    output("-------------");
    output(`| ${gameBoard["1"]} | ${gameBoard["2"]} | ${gameBoard["3"]} |`);
    output("-------------");
    output(`| ${gameBoard["4"]} | ${gameBoard["5"]} | ${gameBoard["6"]} |`);
    output("-------------");
    output(`| ${gameBoard["7"]} | ${gameBoard["8"]} | ${gameBoard["9"]} |`);
    output("-------------");
}