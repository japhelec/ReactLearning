import React from "react"
import SearchBar from "./SearchBar.js"
import youtube from "../api/youtube.js"
import VideoList from "./VideoList.js"
import VideoDetail from "./VideoDetail.js"

const KEY = "AIzaSyDDrGzsG7x9YavKypQLPUJ7V_yWflbYSog"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {videos:[],selectVideo:null}
    }
    componentDidMount(){
        this.onTermSubmit("buildings")
    }
    onTermSubmit = (term)=>{
        youtube.get("/search",{
            params:{
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        })
        .then((response)=>{
            this.setState({
                videos:response.data.items,
                selectVideo: response.data.items[0]
            })
        })
    }

    onVideoSelect = (video)=>{
        this.setState({selectVideo:video})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App