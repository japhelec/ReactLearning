import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail.js"
import ApprovalCard from "./ApprovalCard.js"

const App = ()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    author="Alex" 
                    Timeago="Today at 4:45PM" 
                    Comment="Good show!"
                />    
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    author="Michael" 
                    Timeago="Today at 2:20AM" 
                    Comment="Errrr..."
                />    
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    image={faker.image.avatar()} 
                    author="Kevin" 
                    Timeago="Yesterday at 3:30PM" 
                    Comment="Good job!"
                />    
            </ApprovalCard>
            
            
            
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))