/** @format */

import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../../queries";
import { IProduct } from "../../../../interfaces/product.interface";
import CardProduct from "../../cardproduct/cardproduct";
import "./ProductPage.css";

const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading] = useState(false);
    const [error] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

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

    // Lọc sản phẩm theo nhóm ngành hàng "Lều cắm trại"
    const filteredProducts = products.filter(
        (product) => product.category === "Lều cắm trại"
    );

    // Tìm kiếm sản phẩm theo tên
    const searchedProducts = searchTerm
        ? filteredProducts.filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : filteredProducts;

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setSearchTerm((event.target as HTMLInputElement).value);
        }
    };

    return (
        <main>
            <div className='container'>
                <div className='title-section'>
                    <h3 className='mt-4'>Sản Phẩm Lều Cắm Trại</h3>
                    <div className='search-bar'>
                        <input
                            type='text'
                            placeholder='Tìm kiếm sản phẩm...'
                            className='form-control'
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>

                <div
                    className='carousel-inner mt-5 text-center'
                    style={{ fontSize: "70%" }}
                >
                    {searchedProducts.length > 0 ? (
                        <>
                            {Array.from({
                                length: Math.ceil(searchedProducts.length / 4),
                            }).map((_, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === 0 ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <div className='row'>
                                        {searchedProducts
                                            .slice(index * 4, index * 4 + 4)
                                            .map((product) => (
                                                <div
                                                    className='col-md-3 w-330 h-550'
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
                        <p>Không tìm thấy sản phẩm nào.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
