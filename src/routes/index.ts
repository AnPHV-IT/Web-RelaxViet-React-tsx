/** @format */

import { DefaultLayout } from "../layouts";

import {
    ManageProduct,
    HomePage,
    NotFound,
    SignIn,
    SignUp,
    Dashboard,
    ManageUser,
} from "../pages";
import { IRouters } from "../interfaces/router";
import { RedirectIfLoggedIn } from "../components";
import { Outlet } from "react-router-dom";
import CartPage from "../pages/cart";
import AdminLayout from "../layouts/AdminLayout";
import { Fragment } from "react/jsx-runtime";
import CreateProduct from "../pages/admin/createProduct";
import EditProduct from "../pages/admin/editProduct";
import RequireAuth from "../components/auth/RequireAuth";
import RequireAdmin from "../components/auth/RequireAdmin";
import Contact from "../pages/contact";
import Blog from "../pages/blog";
import ProductDetail from "../pages/products/ProductDetail/detail/productdetail";
import Tents from "../pages/products/tents";
import Tarpaulin from "../pages/products/tarpaulin";
import CampingChair from "../pages/products/ChairsTable";
import Bed from "../pages/bedD";
import Rickshaw from "../pages/products/rickshaw";
import Showroom from "../pages/showroom";
import UserReport from "../pages/admin/reports/UserReport";
import OrderReport from "../pages/admin/reports/OrderReport";
import RevenueReport from "../pages/admin/reports/RevenueReport";
import ProductReport from "../pages/admin/reports/ProductReport";
import Settings from "../pages/admin/settings/Settings";
import AccountSettings from "../pages/admin/settings/AccountSettings";
import SystemSettings from "../pages/admin/settings/SystemSettings";
import LanguageSettings from "../pages/admin/settings/LanguageSettings";
import UserManagement from "../pages/admin/user/UserManagement";

export const publicRouter: IRouters[] = [
    {
        path: "/",
        layout: DefaultLayout,
        element: HomePage,
    },
    {
        path: "/contact",
        layout: DefaultLayout,
        element: Contact,
    },

    {
        path: "/about",
        layout: DefaultLayout,
        element: Blog,
    },
    {
        path: "/products/:id",
        layout: DefaultLayout,
        element: ProductDetail,
    },
    {
        path: "/products/tents",
        layout: DefaultLayout,
        element: Tents,
    },
    {
        path: "/products/tarpaulin",
        layout: DefaultLayout,
        element: Tarpaulin,
    },
    {
        path: "/products/campingChair",
        layout: DefaultLayout,
        element: CampingChair,
    },
    {
        path: "/products/bed",
        layout: DefaultLayout,
        element: Bed,
    },
    {
        path: "/products/rickshaw",
        layout: DefaultLayout,
        element: Rickshaw,
    },
    {
        path: "/showroom",
        layout: DefaultLayout,
        element: Showroom,
    },

    {
        path: "",
        layout: null,
        element: Outlet,
        Protected: RedirectIfLoggedIn,
        children: [
            {
                path: "/sign-in",
                layout: null,
                element: SignIn,
                children: null,
            },
            {
                path: "/sign-up",
                layout: null,
                element: SignUp,
                children: null,
            },
        ],
    },
    {
        path: "/cart",
        layout: null,
        Protected: RequireAuth,
        element: CartPage,
        children: null,
    },

    {
        path: "*",
        layout: null,
        element: NotFound,
    },
];

export const privateRouter: IRouters[] = [
    {
        path: "admin",
        layout: AdminLayout,
        Protected: RequireAdmin,
        element: Outlet,
        children: [
            {
                path: "dashboard",
                element: Dashboard,
            },
            {
                path: "products",
                element: ManageProduct,
            },
            {
                path: "products/create",
                element: CreateProduct,
            },
            {
                path: "products/:productId/edit",
                element: EditProduct,
            },
            {
                path: "users",
                element: UserManagement,
            },
            {
                path: "orders",
                element: Fragment,
            },
            {
                path: "reports",
                element: UserReport,
            },

            {
                path: "reports/order",
                element: OrderReport, // Báo cáo đơn hàng
            },
            {
                path: "reports/revenue",
                element: RevenueReport, // Báo cáo doanh thu
            },
            {
                path: "reports/product",
                element: ProductReport, // Báo cáo sản phẩm
            },
            {
                path: "settings",
                element: Settings,
            },
            {
                path: "settings/account",
                element: AccountSettings,
            },

            {
                path: "settings/system",
                element: SystemSettings,
            },
            {
                path: "settings/language",
                element: LanguageSettings,
            },
        ],
    },
];
