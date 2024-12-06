// src/pages/admin/reports/OrderReport.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../configs/firebase.config";
import ReportNavbar from "../../../components/ReportNavbar";
import * as XLSX from "xlsx"; // Import thư viện xlsx

const OrderReport: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "orders"));
                const orderList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setOrders(orderList);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu báo cáo đơn hàng:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrderData();
    }, []);

    // Hàm xuất dữ liệu ra file Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            orders.map((order) => ({
                ID: order.id,
                "Khách hàng": order.customerName,
                "Sản phẩm": order.productName,
                "Ngày đặt hàng": new Date(
                    order.orderDate.seconds * 1000
                ).toLocaleDateString(),
                "Số lượng": order.quantity,
                "Địa chỉ giao hàng": order.shippingAddress,
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Báo cáo đơn hàng");
        XLSX.writeFile(workbook, "Bao_cao_don_hang.xlsx"); 
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    return (
        <div className="container">
           
            <h2>Báo cáo đơn hàng</h2>
            <ReportNavbar />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Khách hàng</th>
                        <th>Sản phẩm</th>
                        <th>Ngày đặt hàng</th>
                        <th>Số lượng</th>
                        <th>Địa chỉ giao hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length === 0 ? (
                        <tr>
                            <td colSpan={6}>Không có dữ liệu đơn hàng</td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.productName}</td>
                                <td>
                                    {new Date(
                                        order.orderDate.seconds * 1000
                                    ).toLocaleDateString()}
                                </td>
                                <td>{order.quantity}</td>
                                <td>{order.shippingAddress}</td>
                            </tr>
                        ))
                    )}
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
                        backgroundColor: "orange", // Màu cam
                        color: "white", // Màu chữ trắng
                        border: "none", // Không viền
                        padding: "10px 20px", // Khoảng cách padding
                        borderRadius: "5px", // Bo tròn các góc
                        cursor: "pointer", // Con trỏ khi hover
                    }}
                >
                    Xuất File Excel
                </button>
            </div>
        </div>
    );
};

export default OrderReport;
