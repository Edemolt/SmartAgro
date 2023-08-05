
import React from "react";

const AvailItem = ({ item }) => {
    const {id, name, duration} = item;
    return (
        <div>
            <h2>{name} : {duration}</h2>
        </div>
    )
}

export default AvailItem;