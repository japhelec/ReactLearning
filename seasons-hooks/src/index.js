import React, {useState,useEffect} from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay.js"
import Spinner from "./Spinner.js"

const App =()=>{
   
    const [ lat,setLat ] = useState(null)
    const [ errorMessage,setErr ] = useState("")
    
    useEffect(
        ()=>{
            window.navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setLat(position.coords.latitude)
                },
                (err)=>{
                    setErr(err.message)
                }
            )
        },[]
    )

    const renderContent = () => {
        if (lat && !errorMessage){
            return <SeasonDisplay lat={lat} />
        }
        else if (!lat && errorMessage){
            return <div>Error: {errorMessage}</div>
        }
        else{
            return <Spinner message="Please accept location request"/>
        }
    }


    
    return (
    <div>
        {renderContent()}
    </div>
    )

}


ReactDOM.render(<App />, document.querySelector("#root"))