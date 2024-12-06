/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index";
import DetailTent from "./detailtent/tentIndex";

const Tents = () => {
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <DetailTent />
            </div>
            <Footer />
        </div>
    );
};

export default Tents;
