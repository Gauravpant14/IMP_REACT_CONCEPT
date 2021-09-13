import React,{useState} from 'react'
import ClassContextComponent from './ClassContextComponent';
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
             <h2>UseConext Use</h2>   
            <button onClick={toggleTheme}>toggle  Theme</button>
            <FunctionContextComponent />
            <ClassContextComponent />
            </div>
            
        </ThemeContext.Provider>
    )
}

export default UseContextHook
