import React,{useState,useReducer} from 'react'
import TodoList from './TodoList';

export const ACTIONS = {
    ADD_TODO:'ADD_TODO',
    TOGGLE_TODO:'TOGGLE_TODO',
    DELETE_TODO:'DELETE_TODO',
}

const reducer = (todo,action) => {
switch (action.type) {
    case ACTIONS.ADD_TODO:
        return [...todo,newTodo(action.payload.data)];
    case ACTIONS.TOGGLE_TODO:
        return todo.map((e) => {
            if(e.id === action.payload.id){
                return {...e,completed:!e.completed};
            }
            return todo;
        });
    case ACTIONS.DELETE_TODO:
        return todo.filter((e) => 
            e.id !== action.payload.id
        )    
    default:
        return todo;
}
}

const newTodo = (todos) => {
    console.log(todos,"--------")
    return {
        id: Date.now(), name: todos, completed: false
    }
}
const TodoApp = () => {
    const [todo,dispatch]= useReducer(reducer,[]);
    const [name,setName]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: { data: name}});
        setName('');
    }

    const checkBoxDetails = (info,id) => {
        console.log(info.target.checked,"....",id);
        dispatch({type:ACTIONS.TOGGLE_TODO, payload:{ id: id}})
    }
    console.log(todo,"this is todo")
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h2>Todo Using UseReducer</h2>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            <div className="todoslist">
            {
                todo.map((e) => {
                    return (
                        <div key={e.id}>
                            <div>
                                <input type="checkbox" name={e.name} value={e.name} onChange={(info) => checkBoxDetails(info,e.id) }/>
                                <li onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload:{id: e.id}})} style={{color: e.completed ? 'green' : 'red'}} >
                                    {e.name}
                                 </li>
                               
                                {/* <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload:{id: e.id}})}>Delete</button>
                                <button>Toggle</button> */}
                            </div>
                        </div>
                    )
                })
            }
            </div>
           
        </form>
    )
}

export default TodoApp;
