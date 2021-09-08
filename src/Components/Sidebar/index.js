import React from 'react'

const SideBar = ({setChecbox,setUseRedHook,setTodo}) => {

    return (
        <div className=" sideBar">
            <ul>
                <li onClick={()=> setChecbox((pre) => !pre)}>
                    CheckBox
                </li>
                <li onClick={()=> setUseRedHook((pre) => !pre)}>
                    UseReducer Hook
                </li>
                <li onClick={()=> setTodo((pre) => !pre)}>
                    Todo App
                </li>
            </ul>
        </div>
    )
}

export default SideBar
