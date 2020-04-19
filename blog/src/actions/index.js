import jsonPlaceholder from "../apis/jsonPlaceholder.js"

export const fetchPosts = ()=>{
    return (dispatch, getState)=> {
        jsonPlaceholder.get("/posts").then((response)=>{
            dispatch({
                type: "FETCH_POSTS",
                payload: response
            })
        })}}
            
