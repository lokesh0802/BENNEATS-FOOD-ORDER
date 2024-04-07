import React from "react";
import Header from "../component/header";
import ReccommendedFood from "../component/Reccomendedfood";
import Service from "../component/Service";
import Footer from "../component/Footer";

const Home=()=>{
    return(
        <>
            <Header/>
            <ReccommendedFood/>
            <Service />
            <Footer />
        </>
    )
}

export default Home