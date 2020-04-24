import React from "react"
import Context from "../contexts/LanguageContext.js"
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
                <Context.Consumer>
                    {({language})=>this.renderSubmit(language)}
                </Context.Consumer>
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

