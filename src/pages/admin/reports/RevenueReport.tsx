// pages/admin/reports/RevenueReport.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../configs/firebase.config"; // Sử dụng Firestore đã cấu hình
import ReportNavbar from "../../../components/ReportNavbar"; // Nhập khẩu ReportNavbar
import * as XLSX from "xlsx"; // Import thư viện xlsx

const RevenueReport: React.FC = () => {
    const [revenueData, setRevenueData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRevenueData = async () => {
            try {
                const revenueCollection = collection(db, "revenue"); // Đường dẫn tới collection doanh thu trong Firebase
                const snapshot = await getDocs(revenueCollection);
                const revenueList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setRevenueData(revenueList);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu doanh thu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRevenueData();
    }, []);

    // Hàm xuất dữ liệu ra file Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            revenueData.map((data) => ({
                ID: data.id,
                "Số tiền": data.amount,
                "Ngày giao dịch": new Date(
                    data.date.seconds * 1000
                ).toLocaleDateString(),
                // Thêm các thuộc tính khác nếu cần
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Báo cáo Doanh thu");
        XLSX.writeFile(workbook, "Bao_cao_doanh_thu.xlsx"); // Tên file Excel
    };

    if (loading) {
        return <div>Đang tải..</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Báo cáo Doanh thu</h2>
            <ReportNavbar />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Số tiền</th>
                        <th>Ngày giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                    {revenueData.length === 0 ? (
                        <tr>
                            <td colSpan={3}>Không có dữ liệu doanh thu</td>
                        </tr>
                    ) : (
                        revenueData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.amount}</td>
                                <td>
                                    {new Date(
                                        data.date.seconds * 1000
                                    ).toLocaleDateString()}
                                </td>
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

export default RevenueReport;
