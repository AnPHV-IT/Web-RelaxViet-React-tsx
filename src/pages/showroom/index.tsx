/** @format */

import React from "react";
import Header from "../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../layouts/DefaultLayout/footer/index"; // Chữ cái hoa
import DetailShowroom from "./detailshowroom/detailshowroom"; // Đảm bảo import đúng
import "./detailshowroom/detailshowroom.css";
const Showroom = () => {
    return (
        <div>
            <div className='mb-5'>
                <Header />
            </div>
            <div className='mt-5'>
                <DetailShowroom />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Showroom;
