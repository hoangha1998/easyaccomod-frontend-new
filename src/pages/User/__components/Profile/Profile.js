import React, {useState} from 'react';
import './Profile.scss';
import {Link} from "react-router-dom";



function Profile() {
  const [isChangePass, setIsChangePass] = useState(false);

  return (
    <div className="user-profile">
      <h2 className="user-page-main__heading">Thông tin tài khoản</h2>
      <div className="user-page-main__body">
        <div className="user-profile__wrapper">
          <div className="user-information">
            <form className="user-form">

              <div className="input-group">
                <label className="input__label">Họ và tên:</label>
                <input className="input__text"  type="text" value="Hoàng Thái Hà"/>
              </div>

              <div className="input-group">
                <label className="input__label">Số điện thoại:</label>
                <input className="input__text"  type="text" value="0836861282"/>
              </div>

              <div className="input-group">
                <label className="input__label">Email:</label>
                <input className="input__text"  type="email" value="hth@gmail.com"/>
              </div>

              <div className="change-pass" onClick={() => {setIsChangePass(!isChangePass)}}>Đổi mật khẩu ?</div>

              {
                isChangePass &&
                  <>
                    <div className="input-group">
                      <label className="input__label">Mật khẩu hiện tại:</label>
                      <input className="input__text"  type="password"/>
                    </div>

                    <div className="input-group">
                      <label className="input__label">Mật khẩu mới:</label>
                      <input className="input__text"  type="password"/>
                    </div>

                    <div className="input-group">
                      <label className="input__label">Xác nhận mật khẩu mới:</label>
                      <input className="input__text"  type="password"/>
                    </div>
                  </>
              }

              <button className="user-form-btn btn">Cập nhật</button>

            </form>
          </div>

          <div className="user-avatar">
            <div className="user-avatar__img">
              <img className="avatar" src="https://pm1.narvii.com/5974/22e162da7460781dba1a28976b21532929969275_00.jpg"></img>
              <div className="overlay">
                <span>Click để thay đổi</span>
              </div>
            </div>

            <Link to="#">Đổi ảnh đại diện</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
