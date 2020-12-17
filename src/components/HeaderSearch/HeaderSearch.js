import React, {useState} from 'react';
import './HeaderSearch.scss'

function HeaderSearch(props) {

  return (
    <div className="header__search">
      <form className="header__search-form">
        <div className="header__search-input-group">
          <input type="text" className="header__search-input" placeholder="Tìm kiếm trên Easy Accomod"/>
          <button className="header__search-button" type="submit"><i className="material-icons">search</i></button>

          <div className="header__search-history">
            <div className="header__search-history-heading">
              <i className="material-icons">query_builder</i>
              <h3>Tìm kiếm trên Easy Accomod</h3>
              <span className="header__search-history-action">Xóa</span>
            </div>

            <ul className="header__search-history-list">
              <li className="header__search-history-item">
                Hồ Tùng Mậu
              </li>
              <li className="header__search-history-item">
                Đại học Thương mại
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HeaderSearch;