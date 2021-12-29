import React, { useReducer } from 'react'

const initialState = {
    count: 0
}
function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state;
    }
}
const UseReducerEx = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Total Count {state.count}</p>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                +
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                -
            </button>
        </div>
    )
}

export default UseReducerEx
