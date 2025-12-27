import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true)
    // const [winner, setWinner] = useState(null)

    const WINNIN_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],  
    ];

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < WINNIN_PATTERNS.length; i++) {
            const [a, b, c] = WINNIN_PATTERNS[i];
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };   
    const handleClick = (index) => {
        //1° check winner // check if winner or cell is !== null
        const winner = calculateWinner(board);  
        // setWinner(winner);    
        if(winner || board[index]) return
        
        //2° update board
        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        
        //3° change turn
        setIsXNext(!isXNext);   
    };   
    const getStatusMessage = () => {
        const winner = calculateWinner(board);  

        if(winner) return `Player ${winner} wins!`;
        if(!board.includes(null)) return `It's a draw!`;
        return `Player ${isXNext ? 'X' : 'O'} turn`;
    };   
    const resetGame = () => {
        setBoard(initialBoard);
        setIsXNext(true);
    };   

    return {
        board,
        isXNext,
        calculateWinner,
        handleClick,
        getStatusMessage,
        resetGame
    }       
    }

export default useTicTacToe
