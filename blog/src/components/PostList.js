import React from "react"
import {connect} from "react-redux"
import {fetchPosts} from "../actions/index.js"

class PostList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                PostList
            </div>
        )
    }
}



export default connect(null,{fetchPosts})(PostList)