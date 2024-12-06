/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index";
import TarpaulinDetail from "./tarpaulindetail/tarpaulindetail";
const Tarpaulin = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <TarpaulinDetail />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Tarpaulin;
