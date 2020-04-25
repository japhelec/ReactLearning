import React, {useState} from "react"
import ResourceList from "./ResourceList.js"
import UserList from "./UserList.js"

const App =() => {
    const [resource,setResource] = useState("todos")
    return(
        <div>
            <div>
                <button onClick={()=>{setResource("posts")}}>Post</button>
                <button onClick={()=>{setResource("todos")}}>Todos</button>
            </div>
            <UserList />
            <ResourceList resource={resource}/>
        </div>
    )
}


export default App