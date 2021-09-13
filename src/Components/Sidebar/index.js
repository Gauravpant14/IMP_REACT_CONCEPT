import React from 'react'

const SideBar = ({state,setState}) => {

    return (
        <div className=" sideBar">
            <ul>
                <li onClick={()=> setState({
                    ...state,
                    checkbox:!state.checkbox
                })} style={{color: state.checkbox ? 'red' : '#fff'}}>
                    CheckBox
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useRedHook:!state.useRedHook
                })} style={{color: state.useRedHook ? 'red' : '#fff'}} >
                    UseReducer Hook
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useCon:!state.useCon
                })} style={{color: state.useCon ? 'red' : '#fff'}}>
                    UseContext Hook
                </li>
                <li onClick={()=> setState({
                    ...state,
                    todoOpen:!state.todoOpen
                })} style={{color: state.todoOpen ? 'red' : '#fff'}}>
                    Todo App
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useRef:!state.useRef
                })} style={{color: state.useRef ? 'red' : '#fff'}}>
                    UseRef Use
                </li>
            </ul>
        </div>
    )
}

export default SideBar