/** @format */

import React from "react";
import { IProduct } from "../../../interfaces/product.interface";
import { Link } from "react-router-dom";

interface CardProductProps {
    product: IProduct;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
    return (
        <div className='col-md-3' key={product._id}>
            <div className='card' style={{ width: "270px", height: "480px" }}>
                <img
                    src={
                        product.productImageFiles?.[0]?.url ||
                        "images/default.jpg"
                    }
                    className='card-img-top img-custom'
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className='card-body'>
                    <p className='card-title text-start ms-3'>
                        <b>{product.name}</b>{" "}
                    </p>
                    <hr />
                    <p className='card-text'>
                        {product.description.slice(0, 30)}...
                    </p>
                </div>
                <div className='card-footer'>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/products/${product._id}`}>
                            <button className='btn btn-primary ms-5'>
                                Chi Tiết Sản Phẩm
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
