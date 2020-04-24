import React from "react"
import Context from "../contexts/LanguageContext"

class LanguageSelector extends React.Component {
    static contextType = Context
    render(){
        return(
            <div>
                Select a language:
                <i className="flag us" onClick={()=>this.context.onLanguageChange("english")}/>
                <i className="flag nl" onClick={()=>this.context.onLanguageChange("dutch")}/>
            </div>
        )
    }
}

export default LanguageSelector