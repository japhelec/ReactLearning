import unsplash from "../api/unsplash.js"
import React from "react"
import SearchBar from "./SearchBar.js"


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {image: []}
    }

    onSearchSubmit = (term)=>{
        unsplash.get("/search/photos",{
            params:{ query: term}
        }).then((response)=>{this.setState({image: response.data.results})})
    }
    

    render(){
        return (
            <div className='ui container' style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.image.length} images
            </div>
            
        )
    }
}


export default App;