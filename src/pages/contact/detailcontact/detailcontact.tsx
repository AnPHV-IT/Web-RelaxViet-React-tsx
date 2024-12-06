/** @format */

import React from "react";

const DetailContact = () => {
    return (
        <div className='container'>
            <h2 className='mt-5'>Liên hệ</h2>
            <div className='contact-info'>
                <h4>CÔNG TY TNHH THƯ GIÃN VIỆT</h4>
                <p>
                    <strong>Địa chỉ</strong> : 30 Thới An 15 , Phường Thới An ,
                    Quận 12, TP.HCM
                </p>
                <p>
                    <strong>Điện thoại</strong> : 0938 513 828 - 0919 011 300
                </p>
                <p>
                    <strong>Giờ làm việc</strong> : Thứ 2 đến thứ 7 : 8:00 AM –
                    6:00 PM
                </p>
            </div>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Họ tên (*)</label>
                    <input type='text' id='name' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='company'>Đơn vị</label>
                    <input type='text' id='company' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Địa chỉ</label>
                    <input type='text' id='address' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Điện thoại (*)</label>
                    <input type='text' id='phone' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email (*)</label>
                    <input type='email' id='email' className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Lời nhắn (*)</label>
                    <textarea
                        id='message'
                        className='form-control'
                        rows={4}
                    ></textarea>
                </div>
                <div className='btn-group mt-3'>
                    <button type='submit' className='btn btn-primary'>
                        Gửi liên hệ
                    </button>
                    <button type='reset' className='btn btn-secondary ms-3'>
                        Soạn lại
                    </button>
                </div>
            </form>
        </div>
    );
};
export default DetailContact;
