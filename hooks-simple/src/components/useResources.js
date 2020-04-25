import  {useState, useEffect} from "react"
import axios from "axios"


const useResources = (resource)=>{
    const [resources,setResources] = useState([])

    
    
    useEffect(
        ()=>{
                axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
                    .then((response)=>setResources(response.data))
            }
        ,
        [resource]
    )
    return resources
}

export default useResources