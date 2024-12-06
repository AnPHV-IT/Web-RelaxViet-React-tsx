/** @format */

// import { Link } from "react-router-dom";
import React from "react";
import TentPage from "../products/tents/detailtent/tent"; // Check if this path is correct and the file exists
import NavPage from "./navpage";
import SliderPage from "./sliderPage";
import HammockPage from "../products/Hammock/hammockdetail/Hammockpage";
import ChairsTablePage from "../products/ChairsTable/TableChDetrail/ChairsTablePage";
import BlogPage from "../blog/detailblog/blogpage";
const HomePage = () => {
    return (
        <section className='section_slider container'>
            {/* ---------------------------------------------slider bar-------------------------------------------------------------- */}
            <div className=''>
                <SliderPage />
            </div>
            {/* ---------------------------------------------navpage-------------------------------------------------------------- */}
            <div className=''>
                <NavPage />
            </div>
            {/* ---------------------------------------------Lều cắm trại-------------------------------------------------------------- */}

            <div className='mt-5 mb-5'>
                <TentPage />
            </div>
            {/* ---------------------------------------------Võng  - Giường Cấm Trại------------------------------------------------------------- */}

            <div className='mt-5 mb-5'>
                <HammockPage />
            </div>
            {/* ---------------------------------------------Bàn ghế cấm trại-------------------------------------------------------------- */}

            <div className='mt-5 mb-5'>
                <ChairsTablePage />
            </div>
            {/* ---------------------------------------------Bài viết-------------------------------------------------------------- */}
            <div className='mt-5 mb-5'>
                <BlogPage />
            </div>
        </section>
    );
};

export default HomePage;
