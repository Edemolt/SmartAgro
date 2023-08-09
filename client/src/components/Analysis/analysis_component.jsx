import React from "react";
import NavBar from "../navbar/navbar";
import WeatherChart from './temperature/temp_component.jsx';
import HumidityChart from "./humidity/humidity_component";
import { Link } from "react-router-dom";
import "./analysis_styles.css"; // Import the CSS file

const Analysis = () => {
    return (
        <>
            <NavBar />
            <div className="analysis-heading">
                <h1>Analyze your plant's growth</h1>
            </div>
            <div className="listing">
                <ul>
                    <li>
                        <Link to="/tempChart" className="chart-link">
                            WeatherChart
                        </Link>
                    </li>
                    <li>
                        <Link to="/humidityChart" className="chart-link">
                            HumidityChart
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Analysis;
