import React from 'react'
import { Link } from 'react-router-dom'

const SidebarMain = () => {
    return (
        
        <div
          className="sidenav w3-sidebar w3-light-grey w3-bar-block"
          style={{ width: "25%" }}
        >
          <h3 className="w3-bar-item">Menu</h3>
          <Link to="/" className="w3-bar-item w3-button">
            Home
          </Link>
          <Link to="/usereducer" className="w3-bar-item w3-button">
            UseReducer
          </Link>
          <Link to="/usecontext" className="w3-bar-item w3-button">
            UseContext ex 1
          </Link>
          <Link to="/usecontext2" className="w3-bar-item w3-button">
            UseContext ex 2
          </Link>
          <Link to="/domref" className="w3-bar-item w3-button">
            DomRef
          </Link>
          <Link to="/mutableref" className="w3-bar-item w3-button">
            MutableRef
          </Link>
          <Link to="/users" className="w3-bar-item w3-button">
            Users
          </Link>
          <Link to="/componentprop" className="w3-bar-item w3-button">
            Component Prop
          </Link>
          <Link to="/generics" className="w3-bar-item w3-button">
            Generics
          </Link>
          
        </div>
      
    )
}

export default SidebarMain
