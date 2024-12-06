/** @format */
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-light py-5 mt-5'>
            {/* freeship */}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='feature-box justify-content-center text-center'>
                            <i
                                className='bi bi-truck d-block display-6  '
                                style={{ color: "#F06721" }}
                            ></i>
                            <h5>Giao hàng hỏa tốc</h5>
                            <p className='text-muted text-nowrap'>
                                Từ 2-4h sau khi đặt hàng thành công
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='feature-box justify-content-center text-center'>
                            <i
                                className='bi bi-heart d-block mx-auto display-6'
                                style={{ color: "#F06721" }}
                            ></i>
                            <h5>Dịch vụ CSKH</h5>
                            <p className='text-muted text-nowrap'>
                                Tận tình, chương trình hậu mãi chu đáo
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='feature-box  justify-content-center text-center'>
                            <i
                                className='bi bi-arrow-repeat d-block mx-auto display-6'
                                style={{ color: "#F06721" }}
                            ></i>
                            <h5>Đổi trả hàng lỗi</h5>
                            <p className='text-muted text-nowrap'>
                                Miễn phí trong vòng 07 ngày do lỗi nhà sản xuất
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='feature-box justify-content-center text-center'>
                            <i
                                className='bi bi-shield-check d-block mx-auto display-6'
                                style={{ color: "#F06721" }}
                            ></i>
                            <h5>Sản phẩm chính hãng</h5>
                            <p className='text-muted text-nowrap'>
                                Thương hiệu chính hãng, độc quyền
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='container'>
                <div className='row ms-5'>
                    <div className='col-md-4 mb-4'>
                        <div className='logo'>
                            <img
                                width={200}
                                height={42}
                                src='https://res.cloudinary.com/dbtqtvo9l/image/upload/v1727950502/logo_relaxviet_xi5uzi.webp'
                                alt='images/logo'
                            />
                        </div>
                        <div className='contact-info mt-3'>
                            <p>
                                <b>CÔNG TY TNHH THƯ GIÃN VIỆT</b>
                            </p>
                            <p>
                                <b> Giấy ĐKKD:</b> 0317805028
                            </p>
                            <p>
                                <b>Nơi cấp:</b> Sở KH&amp;ĐT TPHCM
                            </p>
                            <p>
                                <b>Ngày cấp:</b> 25/04/2023
                            </p>
                            <p>
                                <b>Địa chỉ:</b> 267/5 Lê Thị Riêng (TA28), P.
                                Thới An, Quận 12, TP.HCM
                            </p>
                            <p>
                                <b>Điện thoại:</b> 0938 513 828 - 0919 011 300
                            </p>
                            <p>
                                <b>Email:</b> relaxvietco@gmail.com
                            </p>
                            <p>
                                <b>Giờ làm việc:</b> Thứ 2 đến thứ 7: 8:30-18:00
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 mb-4 mt-5'>
                        <div className='contact-info mt-2'>
                            <b>Sản phẩm</b>
                        </div>
                        <div className='guide-list mt-3'>
                            <div>
                                <p>Lều cắm trại</p>
                                <p>Bạt tăng</p>
                                <p>Võng - Giường dã ngoại</p>
                                <p>Bếp dã ngoại</p>
                                <p>Bàn ghế dã ngoại</p>
                                <p>Xe kéo</p>
                                <p>Phụ kiện cắm trại</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 mb-4 mt-5'>
                        <div className='contact-info mt-2'>
                            <b>Hướng dẫn</b>
                        </div>
                        <div className='guide-list mt-3'>
                            <div>
                                <p>Chính sách thanh toán</p>
                                <p>Chính sách bảo mật</p>
                                <p>Chính sách đổi / trả hàng</p>
                                <p>Chính sách vận chuyển</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4 mt-5'>
                        <div className='contact-info mt-2'>
                            <b>Chia sẻ chúng tôi</b>
                        </div>
                        <div className='socials social-icons mt-3'>
                            <Link to='/#' className='me-3'>
                                <i className='bi bi-facebook'></i>{" "}
                                {/* Facebook icon */}
                            </Link>
                            <Link to='/#' className='me-3'>
                                <i className='bi bi-youtube'></i>{" "}
                                {/* YouTube icon */}
                            </Link>
                            <Link to='/#' className='me-3'>
                                <i className='bi bi-envelope'></i>{" "}
                                {/* Email icon */}
                            </Link>
                            <Link to='/#'>
                                <i className='bi bi-telephone'></i>{" "}
                                {/* Phone icon */}
                            </Link>
                        </div>

                        <div className='mt-3'>
                            <img
                                alt='Certification Badge'
                                src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728316027/djtqvbryazmwarsr51kv.png'
                                width='250'
                                height='100'
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mt-4'>
                            <p className='mb-0'>
                                Copyright by Relax Viet Co., LTD @ 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
