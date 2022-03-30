import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({state,setState,className}) => {

    return (
        <div className={`sideBar ${className}`}>
            <ul>
                <li onClick={()=> setState({
                    ...state,
                    checkbox:!state.checkbox
                })} style={{color: state.checkbox ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    CheckBox
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useRedHook:!state.useRedHook
                })} style={{color: state.useRedHook ? 'red' : '#fff'}}  className="w3-bar-item w3-button" >
                    UseReducer Hook
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useCon:!state.useCon
                })} style={{color: state.useCon ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    UseContext Hook
                </li>
                <li onClick={()=> setState({
                    ...state,
                    todoOpen:!state.todoOpen
                })} style={{color: state.todoOpen ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    Todo App
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useRef:!state.useRef
                })} style={{color: state.useRef ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    UseRef Use
                </li>
                <li onClick={()=> setState({
                    ...state,
                    searchBox:!state.searchBox
                })} style={{color: state.searchBox ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    Search Box
                </li>
                <li onClick={()=> setState({
                    ...state,
                    autoSuggest:!state.autoSuggest
                })} style={{color: state.autoSuggest ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    Auto suggestions
                </li>
                <li onClick={()=> setState({
                    ...state,
                    table:!state.table
                })} style={{color: state.table ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                    React Table
                </li>
                <li onClick={()=> setState({
                    ...state,
                    homePage:!state.homePage
                })} style={{color: state.homePage ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                   Home Page
                </li>
                <li onClick={()=> setState({
                    ...state,
                    tablePagination:!state.tablePagination
                })} style={{color: state.tablePagination ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                   Table Pagination
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useReducer:!state.useReducer
                })} style={{color: state.useReducer ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                   useReducer ex 2
                </li>
                <li onClick={()=> setState({
                    ...state,
                    useReducer3:!state.useReducer3
                })} style={{color: state.useReducer3 ? 'red' : '#fff'}}  className="w3-bar-item w3-button">
                   useReducer ex 3
                </li>
            </ul>
        </div>
    ) 
}

export default SideBar
