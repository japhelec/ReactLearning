import React from "react"
import flv from "flv.js"
import {fetchStream} from "../../actions/index.js"
import {connect} from "react-redux"

class StreamShow extends React.Component{
    constructor(props){
        super(props)

        this.videoRef = React.createRef()
    }
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
        this.buildPlayer()
    }

    buildPlayer(){
        if (this.player || this.props.stream){
            this.player = flv.createPlayer({
                type: "flv",
                url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
            })
            this.player.attachMediaElement(this.videoRef.current)
            this.player.load()
        }
    }

    componentDidUpdate(){
        this.buildPlayer()
    }

    componentWillUnmount(){
        this.player.destroy()
    }

    render(){
        if (!this.props.stream){
            return (<div>Loading...</div>)
        } 

        const {title,description} = this.props.stream

        return (
            <div>
                <video ref={this.videoRef} style={{width: "100%"}} controls="true" />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream:fetchStream})(StreamShow)