// const allSquares = document.querySelectorAll(".board__square");
// const title = document.querySelector(".board__title")

// let gameOver = false;
// let currentPlayer = "X";
// let board = new Array(9);

// allSquares.forEach((square, i) => {
//     square.addEventListener("click", () => {
//         if (square.innerHTML || gameOver) {
//             return;
//         }
//         square.innerHTML = currentPlayer;
//         board[i] = currentPlayer;
//         if (checkWin()) {
//             gameOver = true;
//             return title.innerHTML = `${currentPlayer} Wins!`
//         }
//         if (checkDraw()) {
//             gameOver = true;
//             return title.innerHTML = `It's a Tie!`
//         }
//         switchPlayer();
//         title.innerHTML = `${currentPlayer}'s Turn`;
//     })
// })

// function checkWin() {
//     const winningIndicies = [
//         //Horizontal Wins
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         //Vertical Wins
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         //Diagonal Wins
//         [0, 4, 8],
//         [2, 4, 6]
//     ]

//     for (let i = 0; i < winningIndicies.length; i++) {
//         // const matchingIndicies = winningIndicies[i];
//         const symbol1 = board[winningIndicies[i][0]];
//         const symbol2 = board[winningIndicies[i][1]];
//         const symbol3 = board[winningIndicies[i][2]];

//         if (!symbol1 || !symbol2 || !symbol3) {
//             continue;
//         }

//         if (symbol1 === symbol2 && symbol2 === symbol3) {
//             return true;
//         }
//     }
// }

// function checkDraw() {
//     for (let i = 0; i < board.length; i++) {
//         if (board[i] === undefined) {
//             return false;
//         }
//     }
//     return true;
// }

// function gameRestart() {
//     gameOver = false;
//     board = new Array(9);
//     title.innerHTML = `${currentPlayer}'s Turn`;
//     allSquares.forEach(square => {
//         square.innerHTML = "";
//     })
// }

// function switchPlayer(){
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

const allSquares = document.querySelectorAll(".board__square");
const title = document.querySelector(".board__title")

let currentPlayer = "X";
let board = new Array(9).fill(undefined);
let gameOver = false;

allSquares.forEach((square, i) => {
    square.addEventListener("click", () => {
        if (square.innerHTML || gameOver) {
            return;
        };

        square.innerHTML = currentPlayer;
        board[i] = currentPlayer;

        if (checkWin()) {
            gameOver = true;
            return title.innerHTML = `${currentPlayer} Wins!`;
        };

        if (checkDraw()) {
            gameOver = true;
            return title.innerHTML = "It's a Draw!"
        }

        switchPlayer();
        title.innerHTML = `${currentPlayer}'s turn`;
    })
});

function checkWin() {
    const winningIndecies = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningIndecies.length; i++) {
        const symbol1 = board[winningIndecies[i][0]];
        const symbol2 = board[winningIndecies[i][1]];
        const symbol3 = board[winningIndecies[i][2]];

        if (!symbol1 || !symbol2 || !symbol3) {
            continue;
        }
        if (symbol1 === symbol2 && symbol2 === symbol3) {
            return true;
        }
    }
}

function checkDraw() {
    return board.every(symbol => symbol);
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restartGame() {
    board = new Array(9).fill(undefined);
    gameOver = false;
    allSquares.forEach(square => square.innerHTML = "");
    title.innerHTML = `${currentPlayer}'s turn`;
}