/** @format */

import React from "react";
// import "./bed.css";
import Header from "../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../layouts/DefaultLayout/footer/index";
import BedDetail from "./beddetail/bebdetail";
const BedDD = () => {
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <BedDetail />
            </div>
            <Footer />
        </div>
    );
};
export default BedDD; // Exporting the component for use in other files
