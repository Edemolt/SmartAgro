import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";
// import Cookies from "universal-cookie"
// import jwt from "jwt-decode"


const Login = () => {
    // const cookies = new Cookies();

    const navigate = useNavigate();

    // const API_URL = `http://localhost:3000`;

    const [user, setUser] = useState({
        mail : "",
        password : "",
    })

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name] : value})
    }

    const loginUser = async (e) => {
        e.preventDefault();
        console.log('loginUser  ')
        const {mail, password } = user;
        try{
            const res = await fetch(`/signin`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    // withCredentials: true,  
                },
                body: JSON.stringify({ mail, password })
            })
            const data = await res.json(); 
            console.log(`data = ${data}`); 
            if(data.status === 400 || !data){
                window.alert("Invalid Login");
                console.log("Invalid Login");
            }
            else{
                // cookies.set("jwtoken", token, {path: "/"});
                window.alert("Login Successful");
                console.log("Login Successful");

                navigate("/")
            }
        }catch(err){
            console.log("JSON NHI HORA");
        }
    }


    return(
        <>
            <section className="signup">
                <div className="container-signup mt-5">
                    <div className="signup-content">
                            <h2 className="form-title">
                                Sign In
                            </h2>
                        <form method="POST" className="register-form" id="register-from">
                            <div className="form-group">
                                <label htmlFor="mail">
                                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <input type="email" name="mail" id="mail" autoComplete="off" 
                                    value={user.mail}
                                    onChange={handleInputs}
                                    placeholder="Your Mail"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" 
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your password"/>
                            </div>

                            <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="LogIn"
                                    onClick={loginUser} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;