/** @format */

import React from "react";

const SliderPage = () => {
    return (
        <div className='row-sliderbar row'>
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-12'>
                <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-bs-ride='carousel'
                >
                    <div className='carousel-indicators'>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide-to='0'
                            className='active'
                            aria-current='true'
                        ></button>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide-to='1'
                        ></button>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide-to='2'
                        ></button>
                    </div>
                    <div
                        className='carousel-inner '
                        style={{ borderRadius: "10px" }}
                    >
                        <div className='carousel-item active'>
                            <img
                                src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728318414/banner-cam-trai-relaxviet_1_vp5yu3.png'
                                className='d-block w-100'
                                alt='Banner Relaxviet 1'
                            />
                        </div>
                        <div className='carousel-item'>
                            <img
                                src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728318946/1817cfa3-6789-4bfb-bcc2-7e4b9cb9d08f_girey7.jpg'
                                className='d-block w-100'
                                alt='Banner Relaxviet 2'
                            />
                        </div>
                        <div className='carousel-item'>
                            <img
                                src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728318414/banner-cam-trai-relaxviet_1_aumtp4.jpg'
                                className='d-block w-100'
                                alt='Banner Relaxviet 3'
                            />
                        </div>
                    </div>
                    <button
                        className='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide='prev'
                    >
                        <span
                            className='carousel-control-prev-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button
                        className='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide='next'
                    >
                        <span
                            className='carousel-control-next-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Side Banners */}
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                <div className='mb-2' style={{ borderRadius: "10px" }}>
                    <a href='/#'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728319103/banner-cam-trai-relaxviet_5_pbsygq.png'
                            className='img-fluid'
                            alt='Banner 1'
                        />
                    </a>
                </div>
                <div className='mt-1' style={{ borderRadius: "10px" }}>
                    <a href='/#'>
                        <img
                            src='https://res.cloudinary.com/dkiqtq5eu/image/upload/v1728319163/93760d9e-c725-4d78-bcae-a7c01415dfa3_bxwruz.jpg'
                            className='img-fluid'
                            alt='Banner 2'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SliderPage;
