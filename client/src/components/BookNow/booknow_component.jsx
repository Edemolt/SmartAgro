import NavBar from "../navbar/navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import crops from "../Prices/crops";
import './booknow_styles.css';

const BookNow = () => {
    const navigate = useNavigate();
    

    const [selectedOption, setSelectedOption] = useState("");
    const [sliderValue, setSliderValue] = useState(50);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const PostData = async (e) => {
        e.preventDefault();

        try {
            if (!sliderValue) {
                window.alert("Please fill land");
                return;
            }

            if (!selectedOption) {
                window.alert("Please fill crop");
                return;
            }

            const res = await fetch('/booknowbackend', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    crop: selectedOption,
                    land: sliderValue,
                    yeild: sliderValue * 10,
                    price: sliderValue * 10 * 50,
                })
            });

            // console.log(`crop = ${selectedOption}, land = ${sliderValue}, yeild = ${sliderValue * 10}, price = ${sliderValue * 10 *   50}`);

            const data = await res.json();
            console.log(data);

            if (res.status === 201) {
                // Booking successful
                window.alert("Booking Successful");
                console.log("Booking Successful");
                navigate("/");
            } else if (res.status === 422) {
                // Invalid booking
                window.alert("Invalid Booking");
                console.log("Invalid Booking");
            } else {
                // Some other error
                console.log("Some error occurred");
            }
        }
        catch (err) {
            console.log("Some error in booking", err);
        }
    };

    
    // Use useEffect to check if the user is authenticated before rendering the component
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

    return (
        <div>
            <NavBar />
            <section className="signup">
                <div className="container-signup mt-5">
                    <div className="signup-content">
                        <h2 className="form-title">
                            Select the details
                        </h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="crop">
                                    <h2>Select the crop</h2>
                                </label>
                                <select value={selectedOption} onChange={handleSelectChange}>
                                    <option value="">Select an option</option>
                                    {crops.map((option) => (
                                        <option key={option.id} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Land">
                                    <h2>Select Land</h2>
                                </label>
                                <input type="range" min={10} max={60} value={sliderValue} onChange={handleSliderChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Yeild">
                                    <h2>Estimated Yield : {sliderValue * 10} quintals of {selectedOption}</h2>
                                </label>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Price">
                                    <h2>Price : {sliderValue * 10 * 50}</h2>
                                </label>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="booknow" id="booknow" className="form-submit" value="Book Now"
                                    onClick={PostData} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookNow;

