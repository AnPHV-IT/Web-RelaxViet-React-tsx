import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./adminLyaout.module.css";
import AdminHeader from "./header";
import SidebarAdmin from "./navbar";

const cl = classNames.bind(styles);

const AdminLayout = () => {
    return (
        <div className={cl("wrapper")}>
            <AdminHeader />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "14% 1fr",
                    overflow: "hidden",
                }}
            >
                <SidebarAdmin />
                <div
                    style={{
                        overflow: "auto",
                        height: "calc(100vh - 61px)",
                    }}
                    className="flex-grow-1 p-4"
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
