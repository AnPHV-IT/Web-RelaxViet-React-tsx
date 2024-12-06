// pages/admin/reports/UserReport.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../configs/firebase.config";
import ReportNavbar from "../../../components/ReportNavbar";
import * as XLSX from "xlsx"; // Import thư viện xlsx

const UserReport: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const userList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(userList);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu báo cáo người dùng:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    // Hàm xuất dữ liệu ra file Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            users.map((user) => ({
                ID: user.id,
                "Tên người dùng": user.name,
                Email: user.email,
                "Ngày đăng ký": new Date(
                    user.registrationDate.seconds * 1000
                ).toLocaleDateString(),
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Báo cáo Người dùng");
        XLSX.writeFile(workbook, "Bao_cao_nguoi_dung.xlsx");
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    return (
        <div className="container">
            <h2>Báo cáo người dùng</h2>
            <ReportNavbar />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Ngày đăng ký</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={4}>Không có dữ liệu người dùng</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
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

export default UserReport;
