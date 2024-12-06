/** @format */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, redirect } from "react-router-dom";
import db from "../../../../configs/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { addToCart, getProductById } from "../../../../queries";
import { getSession } from "../../../../utility/cookie.utility";

interface ProductType {
    name: string;
    price: number;
    quantity: number; // Số lượng từ admin
}

interface Product {
    productImageFiles?: { url: string }[];
    name: string;
    description: string;
    offers?: { value: string }[];
    brand?: string;
    weight?: string;
    productType?: ProductType[];
}

const ProductDetail = () => {
    const { id } = useParams();
    const userId = getSession("_id");
    const navigate = useNavigate(); // Keep this if you plan to use it later
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!id) throw new Error("Product ID is required");
                const productDoc = doc(db, "products", id);
                const productSnapshot = await getDoc(productDoc);

                if (productSnapshot.exists()) {
                    const data = productSnapshot.data();
                    setProduct({
                        id: productSnapshot.id,
                        name: data.name || "",
                        description: data.description || "",
                        offers: data.offers || [],

                        productImageFiles: data.productImageFiles || [],
                        brand: data.brand || "",
                        weight: data.weight || "",
                        productType: data.productType || [],
                    } as Product);
                } else {
                    setError("Sản phẩm không tồn tại.");
                }
            } catch (error) {
                setError(
                    "Có lỗi xảy ra: " + ((error as Error).message || error)
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            if (userId && id) {
                await addToCart(userId, id);
                alert("Đã thêm vào giỏ hàng");
                navigate("/cart");
            } else {
                navigate("/NotFound");
            }
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Sản phẩm không tồn tại.</div>;

    return (
        <div className='container mt-5'>
            <div className='row'>
                {/* Hình ảnh sản phẩm với Carousel */}
                <div className='col-md-5'>
                    <div
                        id='productCarousel'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <div className='carousel-indicators'>
                            {product.productImageFiles?.map((_, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    data-bs-target='#productCarousel'
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={
                                        index === 0 ? "true" : "false"
                                    }
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className='carousel-inner'>
                            {product.productImageFiles?.map((image, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === 0 ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <img
                                        src={image.url}
                                        className='product-img d-block w-100'
                                        alt={`Product ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#productCarousel'
                            data-bs-slide='prev'
                        >
                            <span
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#productCarousel'
                            data-bs-slide='next'
                        >
                            <span
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>

                {/* Thông tin sản phẩm */}
                <div className='col-md-7 mt-5'>
                    <h4 className='product-name'>{product.name}</h4>
                    {product.productType && product.productType.length > 0 ? (
                        <>
                            {/* Dropdown chọn màu sắc */}
                            <div className='mb-4'>
                                <h5>Chọn màu sắc:</h5>
                                {product.productType.map((type, index) => (
                                    <div key={index} className='form-check'>
                                        <input
                                            type='radio'
                                            className='form-check-input'
                                            name='color'
                                            id={`color-${index}`}
                                            value={type.name}
                                            onChange={() =>
                                                setSelectedColor(type.name)
                                            }
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor={`color-${index}`}
                                        >
                                            {type.name} - {type.price} vnđ (Số
                                            lượng còn: {type.quantity})
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Chọn số lượng */}
                            <div className='input-group mb-3 w-50'>
                                <button
                                    className='btn btn-outline-secondary'
                                    onClick={() =>
                                        setQuantity(Math.max(quantity - 1, 1))
                                    } // Giảm số lượng
                                    disabled={quantity <= 1} // Vô hiệu hóa nếu số lượng <= 1
                                >
                                    -
                                </button>
                                <div style={{ width: "120px" }}>
                                    <input
                                        type='number'
                                        className='form-control text-center'
                                        min='1'
                                        max={
                                            selectedColor
                                                ? product.productType?.find(
                                                      (type) =>
                                                          type.name ===
                                                          selectedColor
                                                  )?.quantity ?? 0
                                                : 1
                                        }
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(
                                                Math.min(
                                                    Math.max(
                                                        Number(e.target.value),
                                                        1
                                                    ), // Đảm bảo không nhỏ hơn 1
                                                    selectedColor
                                                        ? product.productType?.find(
                                                              (type) =>
                                                                  type.name ===
                                                                  selectedColor
                                                          )?.quantity ?? 0
                                                        : 1
                                                )
                                            )
                                        }
                                        aria-label='Số lượng'
                                    />
                                </div>
                                <button
                                    className='btn btn-outline-secondary'
                                    onClick={() =>
                                        setQuantity(
                                            Math.min(
                                                quantity + 1,
                                                selectedColor
                                                    ? product.productType?.find(
                                                          (type) =>
                                                              type.name ===
                                                              selectedColor
                                                      )?.quantity ?? 0
                                                    : 1
                                            )
                                        )
                                    } // Tăng số lượng
                                    disabled={
                                        quantity >=
                                        (selectedColor
                                            ? product.productType?.find(
                                                  (type) =>
                                                      type.name ===
                                                      selectedColor
                                              )?.quantity ?? 0
                                            : 1)
                                    } // Vô hiệu hóa nếu đã đạt số lượng tối đa
                                >
                                    +
                                </button>
                            </div>

                            {/* Nút thêm vào giỏ hàng */}
                            <button
                                onClick={handleAddToCart}
                                className='btn btn-primary'
                            >
                                Thêm vào giỏ hàng
                            </button>
                            <button className='btn btn-primary ms-3'>
                                Mua ngay
                            </button>
                        </>
                    ) : (
                        <h3 className='product-price'>Chưa có giá</h3>
                    )}
                </div>
            </div>

            {/* Mô tả sản phẩm */}
            <div className='product-description mt-5'>
                <div>
                    <h3>Mô Tả Sản Phẩm</h3>
                    <div>
                        <h5 className='product-brand'>
                            Thương hiệu: {product.brand || "N/A"}
                        </h5>
                    </div>
                    <div>
                        <h5 className='product-weight'>
                            Trọng lượng: {product.weight || "N/A"}
                        </h5>
                    </div>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
