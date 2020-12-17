import React, {Fragment, useState} from 'react';
import './HeaderNavMobile.scss'
import {Link} from "react-router-dom";

function HeaderNavMobile(props) {
  const [isActive, setIsActive] = useState(false);
  const handleOnClick = () => {
    setIsActive(!isActive);
  }

  const isLogged = true;
  return (
    <div className="header__navbar-mobile hide-for-desktop" onClick={handleOnClick}>
      <div className={`menu-icon ` + `${isActive ? 'open-menu' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <div className="menu_overlay"></div>
      </div>

      <ul className="menu-mobile">
        {
          !isLogged &&
            <Fragment>
              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons">login</i>
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons">person_add</i>
                  <span>Đăng ký</span>
                </Link>
              </li>
            </Fragment>
        }

        {
          isLogged &&
            <Fragment>
              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons green-color">person</i>
                  <span>Tài khoản</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons blue-color">notifications</i>
                  <span>Thông báo</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons pink-color">favorite</i>
                  <span>Yêu thích</span>
                </Link>
              </li>

              <li className="menu-item">
                <Link to="/">
                  <i className="material-icons black-color">login</i>
                  <span>Đăng xuất</span>
                </Link>
              </li>
            </Fragment>
        }

      </ul>
    </div>
  );
}

export default HeaderNavMobile;