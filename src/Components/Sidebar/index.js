import React from 'react'

const SideBar = ({setChecbox,setUseRedHook}) => {

    return (
        <div className=" sideBar">
            <ul>
                <li onClick={()=> setChecbox((pre) => !pre)}>
                    CheckBox
                </li>
                <li onClick={()=> setUseRedHook((pre) => !pre)}>
                    UseReducer Hook
                </li>
            </ul>
        </div>
    )
}

export default SideBar
