import { useState } from "react";

const intialState = ()=> Array(9).fill(null)
export default function useTikTac(){
    const [board,setBoard] = useState(intialState());
    const [status,setStatus]  =  useState("")
    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    const [xTurn,setTurn] = useState(true)
    const buttonHandler = (index)=>{
       const dummyBoard = board;
       dummyBoard[index] = xTurn ? 'X' : 'O';
       
       setBoard([...dummyBoard])
       WinningCheck(board)
       setTurn(prev => !prev)
    }
    const WinningCheck =(dummyBoard)=>{
        for (let [a, b, c] of winningPattern) {
            if (dummyBoard[a] && dummyBoard[a] === dummyBoard[b] && dummyBoard[a] === dummyBoard[c]) {
              setStatus(`Winner: ${dummyBoard[a]}`);
              return;
            }
          }
          if (!dummyBoard.includes(null)) {
            setStatus("It's a Draw!");
          }
    }
    const statusCheck = ()=>{

    }  

    return {board,setBoard,xTurn,setTurn,buttonHandler,WinningCheck,statusCheck,status};

}