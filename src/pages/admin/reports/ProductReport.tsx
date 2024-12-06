// src/pages/admin/reports/ProductReport.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../configs/firebase.config";
import classNames from "classnames/bind";
import styles from "../css/ManagerProduct.module.css";
import ReportNavbar from "../../../components/ReportNavbar";
import * as XLSX from "xlsx"; // Import thư viện xlsx

const cl = classNames.bind(styles);

interface IProductType {
    price: number; 
}

interface IProduct {
    id: string;
    name: string;
    productType: IProductType[];
    category: string; 
}

const ProductReport: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as IProduct[]; 
                setProducts(productList);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu báo cáo sản phẩm:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, []);

    // Hàm xuất dữ liệu ra file Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            products.map((item) => {
                let minPrice = item.productType[0]?.price || 0;
                let maxPrice = item.productType[0]?.price || 0;

                item.productType.forEach((prodType) => {
                    minPrice = Math.min(minPrice, prodType.price);
                    maxPrice = Math.max(maxPrice, prodType.price);
                });

                return {
                    ID: item.id,
                    "Tên sản phẩm": item.name,
                    Giá: `${minPrice} - ${maxPrice} vnd`,
                    "Danh mục": item.category,
                };
            })
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Báo cáo sản phẩm");
        XLSX.writeFile(workbook, "Bao_cao_san_pham.xlsx"); 
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    return (
        <div className="container">
            <h2>Báo cáo sản phẩm</h2>
            <ReportNavbar />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Danh mục</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => {
                        let minPrice = item.productType[0]?.price || 0;
                        let maxPrice = item.productType[0]?.price || 0;

                        item.productType.forEach((prodType) => {
                            minPrice = Math.min(minPrice, prodType.price);
                            maxPrice = Math.max(maxPrice, prodType.price);
                        });

                        return (
                            <tr key={item.id}>
                                <td className={cl("text-ellipsis")}>
                                    {item.id}
                                </td>
                                <td className={cl("text-ellipsis")}>
                                    {item.name}
                                </td>
                                <td
                                    className={cl("text-ellipsis")}
                                >{`${minPrice} - ${maxPrice} vnd`}</td>
                                <td className={cl("text-ellipsis")}>
                                    {item.category}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div
                className="d-flex justify-content-end"
                style={{ marginTop: "20px" }}
            >
                <button
                    onClick={exportToExcel}
                    className="btn"
                    style={{
                        backgroundColor: "orange", 
                        color: "white",
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px", 
                        cursor: "pointer", 
                    }}
                >
                    Xuất File Excel
                </button>
            </div>
        </div>
    );
};

export default ProductReport;
