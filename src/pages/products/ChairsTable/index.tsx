/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index";
import ChairsTablePage from "./TableChDetrail/chairsTableIdex";
// import "./chairsTable.css";
const ChairsTable = () => {
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <ChairsTablePage />
            </div>
            <Footer />
        </div>
    );
};

export default ChairsTable;
