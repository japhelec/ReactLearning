import React from "react"
import {connect} from "react-redux"
import {fetchUser} from "../actions/index.js"


class UserHeader extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        const user = this.props.user
        if (!user){
            return null
        }
        return(
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{return {user:state.users.find(user=>{
    return user.id === ownProps.userId
})}}

export default connect(mapStateToProps,{fetchUser:fetchUser})(UserHeader)