import NavBar from "../navbar/navbar";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import './prices_styles.css'

import CropItem from "./CropItem";
import TypeItem from "./TypeItem";
import AvailItem from "./AvailItem";

import crops from "./crops";
import types from "./types";
import availability from "./availability";

function Prices(){    
    return(
        <div>
            <NavBar/>
            <div className="prices-encloser">
                <div className="pricebox">
                    <h1>Prices</h1>
                    <div>
                    {
                        crops.map(crop => {
                            return <CropItem key={crop.id} crop={crop} />
                        })
                    }
                    </div>
                </div>
                <div className="pricebox">
                    <h1>Tenure</h1>
                    <div>
                    {
                        types.map(type=> {
                            return <TypeItem key = {type.id} type={type} />
                        })
                    }
                    </div>
                </div>
                <div className="pricebox">
                    <h1>Availability</h1>
                    <div>
                    {
                        availability.map(item=> {
                            return <AvailItem key = {item.id} item={item} />
                        })
                    }
                    </div>
                </div>
            </div>
                <div className="book-now-button">
                <Link to="/booknow">
                    <button>Book Now</button>
                </Link>
                </div>
            <Outlet/>
        </div>
    )
}

export default Prices;