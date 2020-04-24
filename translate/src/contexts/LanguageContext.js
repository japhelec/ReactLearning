import React from "react"

const Context = React.createContext()

export class LanguageStore extends React.Component{
    constructor(props){
        super(props)
        this.state = {language: "english"}
    }

    onLanguageChange = (language)=>{
        this.setState({language:language})
    }

    
    

    render(){
        return(
            <Context.Provider value={{language:this.state.language,onLanguageChange:this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export default Context

