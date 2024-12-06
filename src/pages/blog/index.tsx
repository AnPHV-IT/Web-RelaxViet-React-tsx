/** @format */

import React from "react";
import Header from "../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../layouts/DefaultLayout/footer/index";
import BlogPage from "./detailblog/blogpage1";
const Blog = () => {
    return (
        <div>
            <div className='mb-5'>
                <Header />
            </div>
            <div className='mt-5'>
                <BlogPage />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Blog;
