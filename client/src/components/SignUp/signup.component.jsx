import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup_styles.css'

const SignUp = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name : "",
        mail : "",
        password : "",
    })

    let name, value, x;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name] : value})
    }   

    const PostData = async (e) => {
        e.preventDefault();

        const {name, mail, password } = user;

        // Convert inputs to JSON
        try{
            const res = await fetch(`/register`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ name, mail, password })
            });
        
        const data = await res.json();
        console.log(data);

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successful");
            console.log("Registration Successful");

            navigate("/login");
        }
        }catch(err){
            console.log("JSON NHI");
        }
    }

    return(
        <>
            <section className="signup">
                <div className="container-signup mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">
                                Sign Up
                            </h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" 
                                            value={user.name}
                                            onChange={handleInputs}
                                            placeholder="Your Name"/>
                                </div>

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
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register"
                                        onClick={PostData} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;