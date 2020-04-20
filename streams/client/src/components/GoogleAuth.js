import React from "react"
import authAction from "../actions/authAction.js"
import {connect} from "react-redux"

class GoogleAuth extends React.Component{
    componentDidMount(){
        this.props.authAction()
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={()=>{window.gapi.auth2.getAuthInstance().signOut()}}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui green google button" onClick={()=>{window.gapi.auth2.getAuthInstance().signIn()}}>
                    <i className="google icon" /> 
                        Sign in
                </button>
            )
        }
    }

    render(){
        
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({isSignedIn: state.isSignedIn})
}

export default connect(mapStateToProps,{authAction: authAction})(GoogleAuth)