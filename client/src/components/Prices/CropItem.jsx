import React from 'react';
const CropItem = ({ crop }) => {

    const { id, name, cost} = crop;

    return (
        <div>
            <h2>Crop : {name} & Price : {cost}</h2>
        </div>
    )
}

export default CropItem;