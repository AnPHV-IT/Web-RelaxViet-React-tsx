import React from "react";
import "./Settings.css"; // Đảm bảo có CSS

const LanguageSettings: React.FC = () => {
    return (
        <div className="settings-form">
            <h3>Cài đặt ngôn ngữ</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="language">Chọn ngôn ngữ:</label>
                    <select id="language">
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <button type="submit" className="btn">
                    Lưu cài đặt
                </button>
            </form>
        </div>
    );
};

export default LanguageSettings;
