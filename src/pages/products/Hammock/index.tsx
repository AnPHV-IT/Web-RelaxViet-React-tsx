/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index";
import Hammockpage from "./hammockdetail/Hammockpage";

const Hammock = () => {
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <Hammockpage />
            </div>
            <Footer />
        </div>
    );
};

export default Hammock;
