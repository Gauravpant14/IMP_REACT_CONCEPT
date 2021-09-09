import React,{useState,useReducer} from 'react'

const reducer = (state,action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'increment':
            return {countNum: state.countNum + 1 }
        case 'decrement':
            return {
                countNum: state.countNum -1
            }
        default:
            return state;    
    }
}

const UseReducer = () => {
    //const[state,dispatchFunction]=useReducer(reducerFunction,initialState);
    const [state,dispatch] = useReducer(reducer,{countNum:0});
    const decrement = () => {
    dispatch({type: 'decrement'});
    }
    const increment = () => {
        dispatch({type: 'increment'});
    }
    return (
        <div className="usereducerContainer container">
            <h2>UseReducer Hook</h2>
            <button onClick={() => decrement()}>-</button>
            <span>{state.countNum}</span>
            <button onClick={() => increment()}>+</button>
        </div>
    )
}

export default UseReducer
