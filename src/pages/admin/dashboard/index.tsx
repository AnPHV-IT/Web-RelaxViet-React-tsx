/** @format */

import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../../../configs/firebase.config";
import ReportNavbar from "../../../components/ReportNavbar";

// Ví dụ bạn có thể sử dụng thư viện Chart.js để hiển thị biểu đồ
import { Line } from "react-chartjs-2"; // Nếu bạn dùng Chart.js
import "chart.js/auto";

const Dashboard: React.FC = () => {
    const [userCount, setUserCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [loading, setLoading] = useState(true);

    // Lấy dữ liệu tổng quan từ Firestore
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userSnapshot = await getDocs(collection(db, "users"));
                const orderSnapshot = await getDocs(collection(db, "orders"));
                const revenueSnapshot = await getDocs(
                    collection(db, "revenue")
                );

                setUserCount(userSnapshot.size); // Đếm số người dùng
                setOrderCount(orderSnapshot.size); // Đếm số đơn hàng

                let totalRev = 0;
                revenueSnapshot.forEach((doc) => {
                    totalRev += doc.data().amount; // Cộng tất cả số tiền doanh thu
                });
                setTotalRevenue(totalRev);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Dữ liệu cho biểu đồ
    const data = {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
        datasets: [
            {
                label: "Doanh thu (vnd)",
                data:
                    totalRevenue > 0
                        ? [5000000, 10000000, 15000000, 20000000, 25000000]
                        : [],
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false,
            },
        ],
    };

    if (loading) {
        return <div>Đang tải..</div>;
    }

    return (
        <div className='container mt-4'>
            <h2>Admin Dashboard</h2>
            <ReportNavbar />
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Người dùng</h5>
                            <p className='card-text'>{userCount} người dùng</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Đơn hàng</h5>
                            <p className='card-text'>{orderCount} đơn hàng</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Doanh thu</h5>
                            <p className='card-text'>{totalRevenue} vnd</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <h3>Biểu đồ doanh thu</h3>
                {totalRevenue > 0 ? (
                    <Line data={data} />
                ) : (
                    <div>Chưa có dữ liệu doanh thu để hiển thị biểu đồ.</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
