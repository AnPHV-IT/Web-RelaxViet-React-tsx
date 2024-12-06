// pages/admin/user/UserManagement.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../configs/firebase.config"; // Sử dụng Firestore đã cấu hình
import UserList from "./index"; // Nhập khẩu UserList từ index.tsx
import { IUser } from "./types"; // Import IUser

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, "users"); // Đường dẫn tới collection users
                const snapshot = await getDocs(usersCollection);

                // Chuyển đổi dữ liệu trả về thành danh sách người dùng
                const userList: IUser[] = snapshot.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(), // Chắc chắn rằng data trả về là tương thích với IUser
                })) as IUser[];

                setUsers(userList); // Cập nhật trạng thái với danh sách người dùng
            } catch (error) {
                console.error("Lỗi khi lấy người dùng:", error);
            } finally {
                setLoading(false); // Đặt trạng thái loading thành false sau khi hoàn thành
            }
        };

        fetchUsers(); // Gọi hàm để lấy dữ liệu người dùng
    }, []);

    if (loading) {
        return <div>Đang tải...</div>; // Hiển thị trạng thái tải
    }

    return <UserList users={users} />; // Truyền users vào UserList
};

export default UserManagement;
