document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }
        return false;
    }

    function checkDraw() {
        return gameBoard.every(cell => cell !== "");
    }

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            const id = box.id;
            if (!gameBoard[id]) {
                gameBoard[id] = currentPlayer;
                box.textContent = currentPlayer;
                if (checkWin()) {
                    document.getElementById("playerText").textContent = `${currentPlayer} Wins!`;
                    boxes.forEach(box => box.style.pointerEvents = "none");
                } else if (checkDraw()) {
                    document.getElementById("playerText").textContent = "It's a Draw!";
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    document.getElementById("playerText").textContent = `Current Player: ${currentPlayer}`;
                }
            }
        });
    });

    document.getElementById("restartBtn").addEventListener("click", () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        boxes.forEach(box => {
            box.textContent = "";
            box.style.pointerEvents = "auto";
        });
        currentPlayer = "X";
        document.getElementById("playerText").textContent = "Tic Tac Toe";
    });
});
