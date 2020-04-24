import React from "react"
import UserCreate from "./UserCreate.js"
import LanguageContext from "../contexts/LanguageContext.js"
import ColorContext from "../contexts/ColorContext.js"
import LanguageSelector from "./LanguageSelector.js"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {language: "english"}
    }

    onLanguageChange = (language)=>{
        this.setState({language:language})
    }
    

    render(){
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={"primary"}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App

