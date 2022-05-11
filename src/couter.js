import React, { useState } from "react";
import "./counter.css"

function Counter(props) {
    const [counter,setCounter]=useState(0)
    return(
        <>
        <div className="top_container">
            <p onClick={()=>props.del()}>❌</p>
            <div className="main_container">
                <div className="minus_sign">
                    <button onClick={()=>{setCounter(counter-1)}} >-</button>
                </div>
                <div className="value">
                    <h4>{counter}</h4>
                </div>
                <div className="plus_sign">
                    <button onClick={()=>{setCounter(counter+1)}}>+</button>
                </div>
            </div>
            <div className="reset">
                <button className="btn" onClick={()=>{setCounter(()=>0)}}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default Counter