import streams from "../apis/streams.js"
import history from "../history.js"
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types.js"

export const signIn = (userId)=>{
    return{
        type: SIGN_IN,
        payload: userId
    }
}


export const signOut = ()=>{
    return{
        type: SIGN_OUT
    }
}

export const createStreams = formValues => (dispatch,getState)=>{
    const {userId} = getState().auth
    streams.post("/streams",{...formValues,userId:userId}).then(
        response => {
            dispatch({type:CREATE_STREAM, payload: response.data})
            history.push("/")
        }
    )
}

export const fetchStreams = ()=> (dispatch) => {
    streams.get("/streams").then(
        response => dispatch({type:FETCH_STREAMS, payload: response.data})
    )
}

export const fetchStream = (id) => dispatch =>{
    streams.get(`/streams/${id}`).then(
        response => dispatch({type:FETCH_STREAM, payload: response.data})
    )
}

export const editStream = (id,formValues) => dispatch => {
    streams.patch(`/streams/${id}`,formValues).then(
        response => {
            dispatch({type:EDIT_STREAM, payload: response.data})
            history.push("/")
        }
    )
}

export const deleteStream = (id) => dispatch => {
    streams.delete(`/streams/${id}`).then(
        ()=>{
            dispatch({ type:DELETE_STREAM, payload:id})
            history.push("/")
        }
    )
}

