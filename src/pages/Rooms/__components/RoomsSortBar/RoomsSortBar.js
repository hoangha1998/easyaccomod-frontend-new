import React from 'react';
import {Link} from "react-router-dom";
import './RoomSortBart.scss'

function RoomsSortBar(props) {
  return (
    <div className="rooms-sort-bar">
      <span className="rooms-sort-bar__label">Sắp xếp theo:</span>
      <div className="rooms-sort-bar-options">
        <div className="rooms-sort-bar-options__option rooms-sort-bar-options__option--selected">Mới nhất</div>
        <div className="rooms-sort-bar-options__option">Xem nhiều</div>
        <div className="rooms-sort-bar-options__option">Yêu thích</div>
        <div className="rooms-sort-bar-options__option rooms-sort-bar-options__option--dropdown">
          <div className="select-input">
            <label>Giá</label>
            <i className="material-icons">expand_more</i>
          </div>

          <ul className="select-input__list">
            <li className="select-input__item">
              <Link to="#" className="select-input__link selected">
                <span>Giá thấp đến cao</span>
                <i className="material-icons">check</i>
              </Link>
            </li>

            <li className="select-input__item">
              <Link to="#" className="select-input__link">
                <span>Giá cao đến thấp</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomsSortBar;