import React, { Component } from 'react';
import { ThemeContext } from '.';

export default class ClassContextComponent extends Component {
   themeStyles(dark){
       return{
        backgroundColor: dark ? '#333' : '#CCC',
        color: dark ? '#CCC' : '#333',
        padding: '20px',
        margin:'10px'
       }       
    } 
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}>
                            {JSON.stringify(darkTheme)}
                            Class Component
                        </div>
                    }
                }      
            </ThemeContext.Consumer>
        )
    }
}
