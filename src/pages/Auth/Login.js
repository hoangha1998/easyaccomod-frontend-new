import React from 'react';
import {Link} from "react-router-dom";
import './Auth.scss';

function Login(props) {
  return (
    <div className="auth-page login-page page-paper">
      <div className="grid wide">
        <div className="auth-page__wrapper">
          <h2 className="auth-page__heading">Đăng nhập</h2>
          <div className="auth-page__body">
            <form className="auth-form">

              <div className="input-group">
                <label className="input__label">Tài khoản:</label>
                <input className="input__text" type="text" placeholder="Tài khoản của bạn"/>
              </div>
              <div className="input-group">
                <label className="input__label">Mật khẩu:</label>
                <input className="input__text" type="password" placeholder="Mật khẩu của bạn"/>
              </div>

              <button className="auth-form-btn">Đăng nhập</button>
              <div className="auth-more">
                <Link to="/forgot-password">Quên mật khẩu?</Link>
                <Link to="/register">Đăng ký</Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;