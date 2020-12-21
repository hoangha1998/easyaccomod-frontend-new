import React from 'react';
import {Link} from "react-router-dom";
import "./Auth.scss"

function Register(props) {
  return (
    <div className="auth-page register-page page-paper">
      <div className="grid wide">
        <div className="auth-page__wrapper">
          <h2 className="auth-page__heading">Đăng ký</h2>
          <div className="auth-page__body">
            <form className="auth-form-register">
              <h2 className="auth-form__title">1. Thông tin tài khoản</h2>
              <div className="row">
                <div className="col c-12 m-6 l-4">
                  <div className="input-group">
                    <label className="input__label">Tài khoản:</label>
                    <input className="input__text" type="text" placeholder="Tài khoản của bạn"/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-4">
                  <div className="input-group">
                    <label className="input__label">Mật khẩu:</label>
                    <input className="input__text" type="password" placeholder="Mật khẩu của bạn"/>
                  </div>
                </div>


                <div className="col c-12 m-6 l-4">
                  <div className="input-group">
                    <label className="input__label">Nhập lại mật khẩu:</label>
                    <input className="input__text" type="password" placeholder="Nhập lại mật khẩu của bạn"/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-4">
                  <div className="input-group">
                    <label className="input__label">Loại tài khoản:</label>
                    <select name="role" className="input__selected" placeholder="chọn">
                      <option value="0" selected={true}>Người xem</option>
                      <option value="1">Chủ nhà</option>
                    </select>
                  </div>
                </div>

                <div className="col c-12 m-6 l-4">
                  <div className="input-group">
                    <label className="input__label">CCCD / CMND:</label>
                    <input className="input__text" type="text" placeholder="Số CCCD/CMND của bạn"/>
                  </div>
                </div>

              </div>

              <h2 className="auth-form__title">2. Thông tin cá nhân</h2>
              <div className="row">
                <div className="col c-12 m-4 l-4">
                  <div className="input-group">
                    <label className="input__label">Họ và tên:</label>
                    <input className="input__text" type="text" placeholder="Tên của bạn" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-4 l-4">
                  <div className="input-group">
                    <label className="input__label">Số  điện thoại:</label>
                    <input className="input__text input__text--number" type="number" placeholder="Số điện thoại của bạn" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-4 l-4">
                  <div className="input-group">
                    <label className="input__label">Email:</label>
                    <input className="input__text" type="email" placeholder="Email của bạn" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-3">
                  <div className="input-group">
                    <label className="input__label">Tỉnh / Thành phố</label>
                    <input className="input__text" type="text" placeholder="Chọn tỉnh" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-3">
                  <div className="input-group">
                    <label className="input__label">Quận / Huyện</label>
                    <input className="input__text input__text--number" type="number" placeholder="Số điện thoại của bạn" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-3">
                  <div className="input-group">
                    <label className="input__label">Phường / Xã</label>
                    <input className="input__text" type="email" placeholder="Email của bạn" required={true}/>
                  </div>
                </div>

                <div className="col c-12 m-6 l-3">
                  <div className="input-group">
                    <label className="input__label">Địa chỉ</label>
                    <input className="input__text" type="text" placeholder="Địa chỉ của bạn"/>
                  </div>
                </div>



              </div>





              <button className="auth-form-btn">Đăng Ký</button>
              <div className="auth-more">
                <span></span>
                <Link to="/login">Đăng nhập</Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;