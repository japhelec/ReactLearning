import React from "react"
import faker from "faker"

const CommentDetail = (props)=>{
    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img src={props.image} alt="avatar"/>
        </a>
        <div className="content">
            <a href="/" classNAme="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="data">{props.Timeago}</span>
            </div>
            <div className="text">{props.Comment}</div>
        </div>

    </div>
    )

}

export default CommentDetail;