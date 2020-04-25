import React from "react"
import axios from "axios"

class ResourceList extends React.Component{
    constructor(props){
        super(props)
        this.state = {resource:[]}
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
            .then((response)=>this.setState({resource: response.data}))
    }
    componentDidUpdate(prevProps){
        if (prevProps.resource !== this.props.resource){
            axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
                .then((response)=>this.setState({resource: response.data}))
        }
    }
    render(){
        
        return (
            <div>
                {this.state.resource.length}
            </div>
        )
    }
}

export default ResourceList