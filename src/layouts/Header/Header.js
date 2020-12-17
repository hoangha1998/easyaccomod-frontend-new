import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import appStoreIcon from '../../assets/images/icons/app-store.svg';
import chPlayIcon from  '../../assets/images/icons/chplay.svg';
import {Link} from "react-router-dom";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import HeaderFavorite from "../../components/HeaderFavorite/HeaderFavorite";
import HeaderNotification from "../../components/HeaderNotification/HeaderNotification";
import HeaderNavMobile from "../../components/HeaderNavMobile/HeaderNavMobile";

function Header(props) {
  return (
    <header className="header">
      <div className="header__top hide-for-mobile">
        <div className="grid wide wrap">
          <div className="header__top-collection">
            <span>Tải ứng dụng</span>
            <Link className="header__top-link-icon" to="/" >
              <img src={appStoreIcon} alt="app-store"/>
            </Link>
            <Link className="header__top-link-icon" to="/" >
              <img src={chPlayIcon} alt="ch-play"/>
            </Link>
          </div>

          <ul className="header__top-navbar">
            <li className="header__top-navbar-item header__top-notify">
              <Link className="header__top-link " to="/">
                <i className="material-icons">notifications_none</i>
                <span>Thông báo</span>
              </Link>
              <HeaderNotification/>
            </li>
            <li className="header__top-navbar-item">
              <Link className="header__top-link" to="/">
                <i className="material-icons">help_outline</i>
                <span>Trợ giúp</span>
              </Link>
            </li>
            <li className="header__top-navbar-item header__top-navbar-item--separate">
              <Link className="header__top-link" to="/">
                Đăng ký
              </Link>
            </li>

            <li className="header__top-navbar-item">
              <Link className="header__top-link" to="/">
                Đăng nhập
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="grid wide">

        <div className="header-with-search">
          <div className="header__logo">
            <Link className="header__logo-link" to="/" >
              <img className="header__logo-img" src={logo} alt="Logo"/>
            </Link>
          </div>

          <HeaderSearch/>

          <div className='d-flex'>
            <HeaderFavorite/>

            <div className="header__account hide-for-desktop hide-mobile">
              <Link to="/">
                <i className="material-icons">account_circle</i>
              </Link>

              <ul className="header__account-menu dropdown">
                <li className="header__account-menu-item">
                  <Link to="/">
                    Đăng nhập
                  </Link>
                </li>

                <li className="header__account-menu-item">
                  <Link to="/">
                    Đăng ký
                  </Link>
                </li>
              </ul>
            </div>

            <HeaderNavMobile/>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;