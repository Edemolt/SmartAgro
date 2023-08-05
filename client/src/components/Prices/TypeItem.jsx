import React from "react";

const TypeItem = ({ type }) => {
    const {name,id} = type;
    return (
        <div>{name}</div>
    )
}

export default TypeItem;