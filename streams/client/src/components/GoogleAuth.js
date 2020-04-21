import React from "react"
import {connect} from "react-redux"
import {signIn,signOut} from "../actions/index.js"


class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load("client:auth2", ()=>{
            window.gapi.client.init({
                clientId: "324843327067-0si35q8dkj30uva6e917b84vao1jo5et.apps.googleusercontent.com",
                scope: "email"
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn)=>{
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
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
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn:signIn,signOut:signOut})(GoogleAuth)