import React from "react";
import NavBar from "../navbar/navbar";
import Graph from "./graph";

import './analysis_styles.css'

function Analysis(){
    return(
        <div>
            <NavBar/>
            <h1>Analysis</h1>
            <div className="analysis-container">
                <div className="analysis-box">{<Graph/>}</div>
                <div className="analysis-box">Hello2</div>
                <div className="analysis-box">Hello3</div>
                <div className="analysis-box">Hello4</div>
                <div className="analysis-box">Hello5</div>
            </div>
        </div>
    )
}

export default Analysis;