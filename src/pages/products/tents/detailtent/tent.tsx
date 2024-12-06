/** @format */

import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../../queries";
import { IProduct } from "../../../../interfaces/product.interface";
import CardProduct from "../../cardproduct/cardproduct";

const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading] = useState(false);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        getAllProduct().then((data) => {
            setProducts(data || []);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Lọc sản phẩm theo nhóm ngành hàng "Lều"
    const filteredProducts = products.filter(
        (product) => product.category === "Lều cắm trại"
    );

    return (
        <div className='title-section text-center'>
            <h2>Lều cắm trại</h2>
            <div className='divider d-flex align-items-center justify-content-center'>
                <i className='bi bi-star me-2'></i>
                <i className='bi bi-star me-2'></i>
                <i className='bi bi-star me-2'></i>
                <i className='bi bi-star me-2'></i>
                <i className='bi bi-star'></i>
            </div>
            {/* sản phẩm */}
            <div
                id='productCarousel'
                className='carousel slide mt-4'
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    {filteredProducts.length > 0 ? (
                        <>
                            {Array.from({
                                length: Math.ceil(filteredProducts.length / 4),
                            }).map((_, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === 0 ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <div className='row'>
                                        {filteredProducts
                                            .slice(index * 4, index * 4 + 4)
                                            .map((product) => (
                                                <div
                                                    className='col-md-3 w-330 h-510'
                                                    key={product._id}
                                                >
                                                    <CardProduct
                                                        product={product}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#productCarousel'
                    data-bs-slide='prev'
                    style={{ height: "20px", width: "20px" }}
                >
                    <span className='carousel-control-prev-icon'></span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#productCarousel'
                    data-bs-slide='next'
                    style={{ height: "20px", width: "20px" }}
                >
                    <span className='carousel-control-next-icon'></span>
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
