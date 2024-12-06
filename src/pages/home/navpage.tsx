/** @format */

import React from "react";

const NavPage = () => {
    return (
        <div className='container text-center my-4 mt-5'>
            <div className='row justify-content-center'>
                {/* Product Card */}
                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320266/Leu_cam_trai_uz6low.jpg'
                            className='mb-2 img-fluid'
                            alt='Lều dã ngoại'
                        />
                        <a className='nav-link text-nowrap' href='tent.html'>
                            Lều dã ngoại
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320264/bat-cam-trai_vh8okq.jpg'
                            className='mb-2 img-fluid'
                            alt='Bạt tăng'
                        />
                        <a
                            className='nav-link text-nowrap'
                            href='tarpaulin.html'
                        >
                            Bạt tăng
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320263/ghe-cam-trai_cfro1y.jpg'
                            className='mb-2 img-fluid'
                            alt='Ghế cắm trại'
                        />
                        <a
                            className='nav-link text-nowrap'
                            href='campingChair.html'
                        >
                            Ghế cắm trại
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320263/ban-cam-trai_sgdaov.jpg'
                            className='mb-2 img-fluid'
                            alt='Bàn cắm trại'
                        />
                        <a
                            className='nav-link text-nowrap'
                            href='campingChair.html'
                        >
                            Bàn cắm trại
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320263/nem-hoi-cam-trai_gr6rsz.jpg'
                            className='mb-2 img-fluid'
                            alt='Niệm hơi'
                        />
                        <a className='nav-link text-nowrap' href='bed.html'>
                            Niệm hơi
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320279/xe-keo_oxsrc9.jpg'
                            className='mb-2 img-fluid'
                            alt='Xe kéo'
                        />
                        <a
                            className='nav-link text-nowrap'
                            href='rickshaw.html'
                        >
                            Xe kéo
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3'>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320279/tam-lot_vkoqpr.jpg'
                            className='mb-2 img-fluid'
                            alt='Tấm lót'
                        />
                        <a
                            className='nav-link text-nowrap'
                            href='tarpaulin.html'
                        >
                            Tấm lót
                        </a>
                    </div>
                </div>

                <div className='col-6 col-sm-3 col-md-3 col-lg-1 mb-3 '>
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728320278/giuong-cam-trai_ftmlyr.jpg'
                            className='mb-2 img-fluid'
                            alt='Giường dã ngoại'
                        />
                        <a className='nav-link text-nowrap' href='bed.html'>
                            Giường dã ngoại
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavPage;
