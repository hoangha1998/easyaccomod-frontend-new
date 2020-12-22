import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Sidebar.scss'

function Sidebar(props) {
  return (
    <div className="user-page-sidebar">
      <div className="user-page-sidebar__heading">
        <img className="avatar" src="https://pm1.narvii.com/5974/22e162da7460781dba1a28976b21532929969275_00.jpg"></img>
        <div className="info">
          <span>Xin chào!</span>
          <h3 className="info-name">Hoàng Hà</h3>
        </div>
      </div>

      <div className="user-page-sidebar__body">
        <ul className="user-nav">
          <li className="user-nav-item">
            <NavLink className="user-nav-item__link" to="/user/profile" activeClassName="active">
              <i className="material-icons green-color">person</i>
              <span className="user-nav-item__link-label">Thông tin tài khoản</span>
            </NavLink>
          </li>

          <li className="user-nav-item">
            <NavLink className="user-nav-item__link" to="/user/notifications">
              <i className="material-icons blue-color">notifications</i>
              <span className="user-nav-item__link-label">Thông báo của tôi</span>
            </NavLink>
          </li>

          <li className="user-nav-item">
            <NavLink className="user-nav-item__link" to="/user/favorites">
              <i className="material-icons pink-color">favorite</i>
              <span className="user-nav-item__link-label">Yêu thích</span>
            </NavLink>
          </li>

          <li className="user-nav-item">
            <h3 className="user-nav-item__label">Quản lí bài viết</h3>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;