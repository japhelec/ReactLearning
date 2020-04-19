import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder.js"

export const fetchPosts = ()=>{
    return (dispatch, getState)=> {
        jsonPlaceholder.get("/posts").then((response)=>{
            dispatch({
                type: "FETCH_POSTS",
                payload: response.data
            })
        })}}
            

export const fetchUser = (id)=> (dispatch)=>_fetchUser(id,dispatch)



const _fetchUser = _.memoize((id,dispatch) =>{
    jsonPlaceholder.get(`/users/${id}`).then((response)=>{
        dispatch({
            type: "FETCH_USER",
            payload: response.data
        })
    })
})
