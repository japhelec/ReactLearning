import React from "react";
import ReactDOM from "react-dom";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const App = function(){
    let aux = "yo man!";
    return (
    <div>
        <label for="in">input something</label>
        <input id="in" type="text"/>
        <button className="button" style={{color:"white", background:"blue"}}>{aux}</button>
    </div>
    )
}

ReactDOM.render(<App />,document.querySelector("#root"))