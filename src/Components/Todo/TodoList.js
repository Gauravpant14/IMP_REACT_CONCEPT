import React,{useCallback} from 'react'
import { ACTIONS } from '.'

function TodoList({todo,dispatch}) {
   console.log(todo.id)
    return (
        <div>
            <li style={todo.completed ? {"backgroundColor":'green' }: {"backgroundColor":'red'}}>
                {todo.name}
            </li>
             <button onClick={() => dispatch({type:ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
             <button onClick={() => dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <br/>
            <br/>

           
            
            {/* <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button> */}
        </div>
    )
}

export default TodoList
