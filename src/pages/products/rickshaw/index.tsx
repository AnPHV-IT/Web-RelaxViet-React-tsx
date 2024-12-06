/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index";
import DetailRickshaw from "./rickshawDetail/rickshawDetail";

const Rickshaw = () => {
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <DetailRickshaw />
            </div>
            <Footer />
        </div>
    );
};

export default Rickshaw;
