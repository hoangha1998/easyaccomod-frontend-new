import React from 'react';
import avatarDefault from '../../../../assets/images/no-avatar.png'
import './RoomOwner.scss'
import {Link} from "react-router-dom";

function RoomOwner(props) {
  return (
    <div className="room-owner">
      <div className="wrap">
        <img src={avatarDefault} alt="avatar" className="avatar"/>
        <div className="info">
          <h3 className="name">Hoàng Hà</h3>
          <span className="role">Chủ nhà trọ</span>
        </div>
      </div>

      <Link className="link-to-profile">Xem trang</Link>

      <Link className="contact" to="">
        <i className="material-icons">call</i>
        <span>0836861282</span>
      </Link>
    </div>
  );
}

export default RoomOwner;