import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    // promises

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/signout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }).then((res) => {
            navigate('/')
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <>
            <h2>Logging out</h2>
        </>
    );
}

export default Logout;