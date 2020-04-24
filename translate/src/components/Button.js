import React from "react"
import LanguageContext from "../contexts/LanguageContext.js"
import ColorContext from "../contexts/ColorContext.js"

class Button extends React.Component{

    renderSubmit(value){
        return (
            value==="english"? "Submit":"Voorleggen"
        )
    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value)=>this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button

