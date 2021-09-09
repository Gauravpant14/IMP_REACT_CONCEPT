import React,{useState} from 'react'
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = React.createContext();
const UseContextHook = () => {
    const [darkTheme,setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(pre => !pre)
    }
    return (
        <ThemeContext.Provider value={darkTheme} className="container">
            <div className="container">
            <button onClick={toggleTheme}>toggle  Theme</button>
            <FunctionContextComponent />
            </div>
            
        </ThemeContext.Provider>
    )
}

export default UseContextHook
