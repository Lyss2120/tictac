import '../App.css'
import useTicTacToe from '../hooks/useTicTacToe';


function TicTacToe() {
  const { board,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame } = useTicTacToe()


  return (
    <div className="game">
      <div className="status">
        <h1>{getStatusMessage()}</h1>
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>

      <div className="board">
        {board.map((cell, i) => {
          return <button className={`cell ${cell === 'X' ? 'calypso' : 'pink'}`}
            key={i}
            onClick={() => handleClick(i)}
            disabled={cell !== null}
          >
            {cell}
          </button>
        })        
        }
      </div>
    </div>
  )
}

export default TicTacToe