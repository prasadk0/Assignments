import useTikTac from "../Hooks/useTikTac"

export default function TicTacToe() {
    const { board, setBoard, xTurn, setTurn, status, buttonHandler, WinningCheck, statusCheck } = useTikTac()
    return (
        <div>
            <p>Turn {xTurn ? 'X' : 'O'}</p>
            <p>Winner Name-{status}</p>
            <div className="grid grid-cols-3 p-1">
                {
                    board.map((b, index) => (
                        <button onClick={() => buttonHandler(index)} disabled={b === null ? false : true} className="p-2 border border-gray-500" key={index}>
                            {b ? b : ''}
                        </button>
                    ))
                }

            </div>
        </div>
    )
}