import { useState } from "react";
import Card from "../components/Card/Card.jsx";
import './Grid.css'
import IsWinner from "../helper/CheckWinner.js";

function Grid({numberOfCards}){   //numberOfCards  helps us to create big tictacto
    const [board , setBoard ] = useState(Array(numberOfCards).fill("")) //creating new array and filling with empty string 
    const [turn , setTurn] = useState(true) //ture :'O' false : 'X'
    const [winner , setWinner] = useState(null)

    function play(index){
        if(turn == true){board[index]='O'}
        else {board[index]='X'}

        const win = IsWinner(board , (turn)? 'O' : 'X')
        if(win){
            setWinner(win)
        }

        // setBoard(...board) --> In setBoard(...board), the spread operator (...) might not be working as intended in this scenario. It's generally used to create a new array based on the existing one, but here it might be causing a shallow copy. This means changes to the elements within the array might not be reflected in the state.

        const updatedBoard = [...board]; // Create a copy of the board array
        updatedBoard[index] = turn ? 'O' : 'X'; // Update the clicked element
        setBoard(updatedBoard); // Set the state with the updated arra
        setTurn(!turn) // if the turn is  false, then it will be true, or it will be flase

    }
    //reset function 
    // set all initial value
    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
    }
    return(
        <div className="gridWrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight">winner is {winner}</h1>
                    <button onClick={()=>reset()}>Reset Game</button>
                    </>
                )
            }
            <h1 className="playerTurn">Current turn : {(turn)?'0':'X'}</h1>  //if the value is true so, print 'O' otherwise print 'X'
            <div className="Grid">
            {board.map((el,idx) => <Card gameEnd={winner ? true : false} key={idx} onplay={play} player={el} index={idx}/> )}   {/* we are passing (el) because el has the 'X' and 'O' as value */}
            </div>
        </div>
    )
}

export default Grid


//board Structure 
// 0 1 2 
// 3 4 5 
// 6 7 8 