/** @format */

import React from "react";
import { IProduct } from "../../../../interfaces/product.interface";
import CardProduct from "../../cardproduct/cardproduct";

interface ProductPageProps {
    onAddToCart: (product: IProduct) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onAddToCart }) => {
    // Giả sử bạn có một mảng sản phẩm
    const products: IProduct[] = []; // Thay thế bằng dữ liệu thực tế

    return (
        <div>
            {products.map((product) => (
                <CardProduct key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductPage;
