/** @format */
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-white fixed-top'>
                <div className='container-fluid'>
                    {/* Navbar Brand */}
                    <Link className='navbar-brand' to=''>
                        <img
                            width={100}
                            height={60}
                            src='https://res.cloudinary.com/dbtqtvo9l/image/upload/v1727950502/logo_relaxviet_xi5uzi.webp'
                            alt='images/logo'
                        />
                    </Link>

                    {/* Toggler Button */}
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarContent'
                        aria-controls='navbarContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    {/* Navbar Content */}
                    <div
                        className='collapse navbar-collapse text-start w-100'
                        id='navbarContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <form
                                    className='search-form d-flex'
                                    action='search.php'
                                    method='GET'
                                >
                                    <input
                                        className='form-control search-input'
                                        type='search'
                                        name='q'
                                        placeholder='Tìm kiếm sản phẩm, thương hiệu và danh mục'
                                        aria-label='Search'
                                    />
                                    <button
                                        className='btn search-btn me-2 ms-2'
                                        type='submit'
                                    >
                                        <i className='bi bi-search'></i>
                                    </button>
                                </form>
                            </li>
                            <li className='nav-item mt-2'>
                                <Link className='nav-link' to='/'>
                                    Trang Chủ
                                </Link>
                            </li>
                            <li className='nav-item dropdown mt-2'>
                                <Link
                                    className='nav-link dropdown-toggle'
                                    to='/#'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Sản Phẩm
                                </Link>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/tent'
                                        >
                                            Lều Dã Ngoại
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/tarpaulin'
                                        >
                                            Bạt Tăng
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/campingChair'
                                        >
                                            Ghế Bàn Cắm Trại
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/bed'
                                        >
                                            Nệm Hơi- Giường
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/rickshaw'
                                        >
                                            Xe Kéo
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item mt-2'>
                                <Link className='nav-link' to='/showroom'>
                                    Hệ thống cửa hàng
                                </Link>
                            </li>
                            <li className='nav-item mt-2'>
                                <Link className='nav-link' to='/about'>
                                    Tạp chí
                                </Link>
                            </li>
                            <li className='nav-item dropdown mt-2'>
                                <Link
                                    className='nav-link dropdown-toggle'
                                    to='/#'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Hỗ trợ
                                </Link>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/contact'
                                        >
                                            Liên Hệ
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Login Button (Desktop View) */}
                        <ul className='navbar-nav ms-auto d-none d-lg-flex'>
                            <li>
                                {" "}
                                <Link className='nav-link' to='/cart'>
                                    <i
                                        className='bi bi-cart me-2'
                                        style={{ fontSize: "15px" }}
                                    >
                                        {" "}
                                        Giỏ hàng
                                    </i>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    aria-label='Login'
                                    to='/signIn'
                                    style={{ fontSize: "15px" }}
                                >
                                    Đăng Nhập
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
