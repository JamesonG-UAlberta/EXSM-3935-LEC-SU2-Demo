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
    const winningRows = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ]
    let isWin = false;
    for (let winningRowIndex = 0; winningRowIndex < winningRows.length && !isWin; winningRowIndex++)
    {
        isWin = true;
        for (let winningSpace of winningRows[winningRowIndex])
        {
            if (gameBoard[winningRows[winningRowIndex][0]] != gameBoard[winningSpace])
            {
                isWin = false;
            }
        }
    }
    return isWin;
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