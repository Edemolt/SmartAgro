// import { httpGetCrops } from "../../hooks/requests";
// import React from "react";
// import { useCallback, useEffect, useState } from "react";

// function useCrops(){
//     const [crops, saveCrops] = useState([]);

//     const getCrops = useCallback(async () => {
//         const fetchedCrops = await httpGetCrops();
//         saveCrops(fetchedCrops);
//     }, []);

//     useEffect(() => {
//         getCrops();
//         }, [getCrops]);
// }

const crops = [
    {
        "id" : "1",
        "name" : "Rice",
        "cost" : "50 per quintal",
    },
    {
        "id" : "2",
        "name" : "Wheat",
        "cost" : "40 per quintal",
    },
    {
        "id" : "3",
        "name" : "Maize",
        "cost" : "30 per quintal",
    },
    {
        "id" : "4",
        "name" : "Barley",
        "cost" : "20 per quintal",
    },
    {
        "id" : "5",
        "name" : "Oats",
        "cost" : "10 per quintal",
    },
    {
        "id" : "6",
        "name" : "Sorghum",
        "cost" : "60 per quintal",
    },
    {
        "id" : "7",
        "name" : "Millet",
        "cost" : "70 per quintal",
    },
    {
        "id" : "8",
        "name" : "Rye",
        "cost" : "80 per quintal",
    },
    {
        "id" : "9",
        "name" : "Triticale",
        "cost" : "90 per quintal",
    },
    {
        "id" : "10",
        "name" : "Buckwheat",
        "cost" : "100 per quintal",
    }
]

export default crops;