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
                <li onClick={()=> setState({
                    ...state,
                    searchBox:!state.searchBox
                })} style={{color: state.searchBox ? 'red' : '#fff'}}>
                    Search Box
                </li>
                <li onClick={()=> setState({
                    ...state,
                    autoSuggest:!state.autoSuggest
                })} style={{color: state.autoSuggest ? 'red' : '#fff'}}>
                    Auto suggestions
                </li>
                <li onClick={()=> setState({
                    ...state,
                    table:!state.table
                })} style={{color: state.table ? 'red' : '#fff'}}>
                    React Table
                </li>
                <li onClick={()=> setState({
                    ...state,
                    homePage:!state.homePage
                })} style={{color: state.homePage ? 'red' : '#fff'}}>
                   Home Page
                </li>
                <li onClick={()=> setState({
                    ...state,
                    tablePagination:!state.tablePagination
                })} style={{color: state.tablePagination ? 'red' : '#fff'}}>
                   Table Pagination
                </li>
            </ul>
        </div>
    )
}

export default SideBar
