import NavBar from "../navbar/navbar";
import { Outlet, Link } from "react-router-dom";

import './homepage_styles.css'
function HomePage(){
    return(
        <div>
            <NavBar/>
            <div className="encloser">
                <Link className="box" to='/bookings'>
                    <h1>Bookings</h1>
                </Link>
                <Link className="box" to='/pricings'>
                    <h1>Prices</h1>
                </Link>
                <Link className="box" to='/analysis'>
                    <h1>Analysis</h1>
                </Link>
            </div>
            <Outlet/>
            
        </div>
    )
}

export default HomePage;