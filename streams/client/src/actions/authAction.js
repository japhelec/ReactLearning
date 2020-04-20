const authAction = ()=>{
    return (
        (dispatch,getState)=>{
            window.gapi.load("client:auth2", ()=>{
                window.gapi.client.init({
                    clientId: "324843327067-0si35q8dkj30uva6e917b84vao1jo5et.apps.googleusercontent.com",
                    scope: "email"
                })
                .then(()=>{
                    let auth = window.gapi.auth2.getAuthInstance()
                    auth.isSignedIn.listen(()=>dispatch({type:"SET_AUTH",payload:window.gapi.auth2.getAuthInstance().isSignedIn.get()}))
                    let action = {type:"SET_AUTH",payload:auth.isSignedIn.get()}
                    dispatch(action)
                })
            })
        }
    )
}

export default authAction