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
    const gameBoard = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"]
    ];
    const availableSpaces = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let playerTurn = player1Token;
    let turnCount = 1;
    while (!checkWin(gameBoard) && turnCount <= 9)
    {
        displayBoard(gameBoard);
        let playerSpace;
        do {
            playerSpace = (await input (`Player ${playerTurn}, please enter the space you would to play: `)).trim();
            if (!availableSpaces.includes(playerSpace))
            {
                output("Invalid input, please make another selection.");
            }
        } while (!availableSpaces.includes(playerSpace));
        availableSpaces.splice(availableSpaces.indexOf(playerSpace), 1);
        if (playerSpace == "1" && gameBoard[0][0] == "1")
        {
            gameBoard[0][0] = playerTurn;
        }
        else if (playerSpace == "2" && gameBoard[0][1] == "2")
        {
            gameBoard[0][1] = playerTurn;
        }
        else if (playerSpace == "3" && gameBoard[0][2] == "3")
        {
            gameBoard[0][2] = playerTurn;
        }
        else if (playerSpace == "4" && gameBoard[1][0] == "4")
        {
            gameBoard[1][0] = playerTurn;
        }
        else if (playerSpace == "5" && gameBoard[1][1] == "5")
        {
            gameBoard[1][1] = playerTurn;
        }
        else if (playerSpace == "6" && gameBoard[1][2] == "6")
        {
            gameBoard[1][2] = playerTurn;
        }
        else if (playerSpace == "7" && gameBoard[2][0] == "7")
        {
            gameBoard[2][0] = playerTurn;
        }
        else if (playerSpace == "8" && gameBoard[2][1] == "8")
        {
            gameBoard[2][1] = playerTurn;
        }
        else if (playerSpace == "9" && gameBoard[2][2] == "9")
        {
            gameBoard[2][2] = playerTurn;
        }
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
        (gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][0] == gameBoard[0][2]) || 
        // Middle Horizontal Line
        (gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][0] == gameBoard[1][2]) || 
        // Bottom Horizontal Line
        (gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][0] == gameBoard[2][2]) || 
        // Left Vertical Line
        (gameBoard[0][0] == gameBoard[1][0] && gameBoard[0][0] == gameBoard[2][0]) || 
        // Middle Vertical Line
        (gameBoard[0][1] == gameBoard[1][1] && gameBoard[0][1] == gameBoard[2][1]) || 
        // Right Vertical Line
        (gameBoard[0][2] == gameBoard[1][2] && gameBoard[0][2] == gameBoard[2][2]) || 
        // NW-SE Diagonal
        (gameBoard[0][0] == gameBoard[1][1] && gameBoard[0][0] == gameBoard[2][2]) || 
        // NE-SW Diagonal
        (gameBoard[0][2] == gameBoard[1][1] && gameBoard[0][2] == gameBoard[2][0])
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
    output(`| ${gameBoard[0][0]} | ${gameBoard[0][1]} | ${gameBoard[0][2]} |`);
    output("-------------");
    output(`| ${gameBoard[1][0]} | ${gameBoard[1][1]} | ${gameBoard[1][2]} |`);
    output("-------------");
    output(`| ${gameBoard[2][0]} | ${gameBoard[2][1]} | ${gameBoard[2][2]} |`);
    output("-------------");
}