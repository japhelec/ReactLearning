import React from "react"
import Modal from "../Modal.js"
import history from "../../history.js"
import {connect} from "react-redux"
import {fetchStream, deleteStream} from "../../actions/index"
import {Link} from "react-router-dom"

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }


    renderActions(){
        return (
            <React.Fragment>
                <button 
                    className="ui button negative" 
                    onClick={()=>{this.props.deleteStream(this.props.match.params.id)}}>
                        Delete
                </button>
                <Link className="ui button" to="/">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = ()=>{
        if (!this.props.stream){
            return "Are you sure you want to delete this stream?"
        } else {
            return `Are you sure you want to delete this stream with the title: ${this.props.stream.title}?`
        }
    }

    render(){
        return (
            <Modal 
                title="Delete Stream" 
                content= {this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>{history.push("/")}}
            />
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream:fetchStream,deleteStream:deleteStream})(StreamDelete)