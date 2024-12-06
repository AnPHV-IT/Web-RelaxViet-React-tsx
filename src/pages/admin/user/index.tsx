/** @format */

// pages/admin/user/UserList.tsx
import React from "react";
import { IUser } from "./types"; // Nhập IUser
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

interface UserListProps {
    users: IUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className='container mt-4'>
            <h2>Danh sách người dùng</h2>
            {users.length === 0 ? (
                <p>Không có người dùng nào.</p>
            ) : (
                <table className='table table-bordered table-striped'>
                    <thead className='table-light'>
                        <tr>
                            <th>ID</th>
                            <th>Tên đăng nhập</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;
