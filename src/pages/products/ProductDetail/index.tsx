/** @format */

import React from "react";
import Header from "../../../layouts/DefaultLayout/header/index"; // Chữ cái hoa
import Footer from "../../../layouts/DefaultLayout/footer/index"; // Chữ cái hoa
import ProductDetailComponent from "./detail/productdetail"; // Đảm bảo import đúng

const ProductDetailPage = () => {
    return (
        <div>
            <Header />
            <div className="mt-5">
                <ProductDetailComponent />
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetailPage; // Xuất component với tên mới
