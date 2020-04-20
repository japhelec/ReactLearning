import React from "react"


class GoogleAuth extends React.Component{
    constructor(props){
        super(props)
        this.state = {isSignedIn:null}
    }
    componentDidMount(){
        window.gapi.load("client:auth2", ()=>{
            window.gapi.client.init({
                clientId: "324843327067-0si35q8dkj30uva6e917b84vao1jo5et.apps.googleusercontent.com",
                scope: "email"
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState ({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = ()=>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null){
            return null
        } else if (this.state.isSignedIn){
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

export default GoogleAuth