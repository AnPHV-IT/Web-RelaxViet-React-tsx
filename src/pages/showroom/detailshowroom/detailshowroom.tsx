/** @format */
import React from "react";
const MainComponent: React.FC = () => {
    const handleSubmit = () => {
        // Logic để gửi form
        alert("Form đã được gửi!");
    };

    const handleGoBack = () => {
        // Logic để quay về
        window.history.back();
    };

    return (
        <main>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <div className='info-box'>
                            <h3>12+</h3>
                            <i className='fas fa-store'></i>
                            <p>Cửa Hàng</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-box'>
                            <h3>63+</h3>
                            <i className='fas fa-map-marker-alt'></i>
                            <p>Tỉnh Thành</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-box'>
                            <h3>3+</h3>
                            <i className='fas fa-building'></i>
                            <p>Văn Phòng</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='info-box'>
                            <h3>200+</h3>
                            <i className='fas fa-users'></i>
                            <p>Nhân Viên</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 mt-5'>
                        <div className='filter-box'>
                            <select>
                                <option>Chọn tỉnh thành</option>
                            </select>
                            <select>
                                <option>Chọn quận/huyện</option>
                            </select>
                            <select>
                                <option>Chọn phường/xã</option>
                            </select>
                        </div>
                        <div className='store-list'>
                            <div className='store-item'>
                                <h5>RelaxViet Sài Gòn</h5>
                                <p>
                                    267/5 Đ. Lê Thị Riêng, P, Quận 12, Hồ Chí
                                    Minh 700000, Việt Nam
                                </p>
                                <p>
                                    <i className='fas fa-phone'></i> 1900 6750
                                </p>
                            </div>
                        </div>
                        {/* Nút gửi form và trở về */}
                        <div className='row mt-4 ms-3'>
                            <div className='col text-center'>
                                <button
                                    className='btn btn-primary'
                                    onClick={handleSubmit}
                                >
                                    Gửi
                                </button>
                                <button
                                    className='btn btn-secondary ml-2 ms-4'
                                    onClick={handleGoBack}
                                >
                                    Trở về
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 mt-3'>
                        <div className='map-container'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.7570182361487!2d106.65300124092758!3d10.873221197844686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294d0699d409%3A0x5032c53cebc51eea!2sRelax%20Viet-%20Outdoors%20%26%20Camping!5e1!3m2!1svi!2sus!4v1726764461647!5m2!1svi!2sus'
                                title='Map showing Relax Viet - Outdoors & Camping'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainComponent;
