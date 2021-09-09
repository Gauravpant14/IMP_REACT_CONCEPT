import React, {useContext} from 'react'
import { ThemeContext } from '.'
const FunctionContextComponent = () => {
    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '20px',
        margin:'10px'
    } 
    return (
        <div  style={themeStyles}>
            Functional component Theme
        </div>
    )
}

export default FunctionContextComponent
