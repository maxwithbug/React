import { useState } from "react";

let z = 0 
function Count(){
    const [x ,setX] = useState(0)
    
    return(
        <>
        count z : {z}
        <button onClick={()=> z+=1}> Increment </button> <br />
        count x : {x} is {(x%2==0)?"even":"odd"}
        <button onClick={()=> setX(x+1)}> Increment </button>
        <button onClick={()=> setX(x-1)}> Decrement </button>
        </>
    )
}

//todo
function Todo(){
    const [isEditing ,setisEditing] = useState(false)
    
    return(
        <>
        {
            (isEditing)?<input type="text" /> : <p>add todo</p>     /* conditional rendaring  */
        }

        <button onClick={()=> setisEditing(!isEditing)}>click add todo </button>     {/* (!isEditing) changing  the value true - false and false - true   */}
        </>
    )
}
//todo list 
function TodoList(){
    const [ todos ,setTodos] = useState(['todo1','todo2'])
    
    return(
        <>
        {
            <ul>
            {
                todos.map((item ,idx)=>(    /* The curly braces are used in JSX to denote JavaScript expressions within the JSX syntax. In the List component, items.map() is a JavaScript expression that evaluates to an array of JSX elements. Within JSX, you can directly embed JavaScript expressions inside curly braces. */
                    <li key={idx}>{item}</li> 
                ))
            }
            </ul>
        }
        <button onClick={()=> setTodos([...todos , 'todo3'])}> add todo to list  </button>
        </>
    )
}

export {Count , Todo ,TodoList}