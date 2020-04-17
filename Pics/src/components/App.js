import unsplash from "../api/unsplash.js"
import React from "react"
import SearchBar from "./SearchBar.js"
import ImageList from "./ImageList.js"


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {images: []}
    }

    onSearchSubmit = (term)=>{
        unsplash.get("/search/photos",{
            params:{ query: term}
        }).then((response)=>{this.setState({images: response.data.results})})
    }
    

    render(){
        return (
            <div className='ui container' style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
            
        )
    }
}


export default App;