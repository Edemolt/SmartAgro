import './navbar.css'
// import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

function NavBar(){

    // const { loginWithRedirect , logout, isAuthenticated } = useAuth0();
    

    return(
        <div>
            <div className="NavBar">
                <h1 className='NavBarText'>AGRO @ INDIA</h1>
            </div>
            <nav className="navbar">
                <div className="navabartext">
                <ul>
                    <li>
                        <Link to="/about">
                            <button>About Us</button>
                        </Link>
                    </li>
                    {/* {isAuthenticated ? <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
                        </button>
                    </li> :
                    <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    </li>} */}
                    <li>
                        <button >
                            <Link to="/booknow">Book Now</Link>
                        </button>
                    </li>

                    <li>
                        <button>
                            <Link to="/login">SignIn</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/signup">SignUp</Link>
                        </button>
                    </li>

                    <li>
                        <button>
                            <Link to="/logout">LogOut</Link>
                        </button>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

