import React from "react"
import ReactDOM from "react-dom"

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer visible active">
        </div>
    )
}

export default Modal