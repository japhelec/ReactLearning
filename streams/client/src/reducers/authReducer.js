const authReducer = (state=null,action)=>{
    switch (action.type){
        case "SET_AUTH":
            return action.payload
        default:
            return state
    }
}

export default authReducer