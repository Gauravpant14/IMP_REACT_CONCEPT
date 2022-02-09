import React from 'react'
import SidebarMain from '../Components/SidebarMain/SidebarMain'
import './Layout.css'
const Layout = ({children}) => {
    return (
        <div>
            <SidebarMain />
            <main id="main">
                {children}
            </main>
        </div>
    )
}

export default Layout
