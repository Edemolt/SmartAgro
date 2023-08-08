import React from "react";

import "./error_styles.css"

const ErrorPage = () => {
    return (
        <>
            <div id="not-found">
                <div className="not-found">
                    <div className="notfound-404">
                        <h1>ERROR 404</h1>
                    </div>
                    <h2>Sorry, page you are looking for doesn't exist</h2>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;