import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/navbar";
import "./about_styles.css";

const About = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    let name, value;

    const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setData({...data, [name]:value})
    }

    const sendData = async (e) => {
        e.preventDefaults();
        try{
            const {name, email, message} = data;
            const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            const data = await res.json();
            if(data.status === 422 || !data){
                window.alert("Message not sent");
                console.log("Message not sent");
            }
            else{
                window.alert("Message sent");
                console.log("Message sent");
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const res = await fetch(`/checkauthentication`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "content-Type": "application/json"
                    },
                    credentials: "include"
                });

                const data = await res.json();
                console.log(data);

                if (!res.status === 200) {
                    const error = new Error(data.error);
                    throw error;
                }
            } catch (err) {
                console.log("error", err);
                navigate("/login");
            }
        };

        checkAuthentication();
    }, []); 

  return(
    <div className="about-container">
        <NavBar />
        <div className="row contactus ">
            <div className="col-md-6 ">
        </div>
        <div className="col-md-4">
            <h2 className="text-justify mt-2">
                We are willing to hear from you, write the query and we will get to it right away
            </h2>
        </div>
        <form >
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default About;