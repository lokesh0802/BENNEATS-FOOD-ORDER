import React from "react";
import Heeader from "../component/header.jsx";
import ReecommendedFood from "../component/RecommendedFood.jsx";

import Service from "../component/Service";


const Home=()=>{
    return(
        <>
            <Heeader />
            <ReecommendedFood />
            <Service />
        </>
    )
}

export default Home