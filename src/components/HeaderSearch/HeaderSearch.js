import React from 'react';
import './HeaderSearch.scss';
import {useLocation} from 'react-router-dom';
import {getQueryParams} from '../../common/helpers';

function HeaderSearch() {
  const location = useLocation();
  const params = getQueryParams(location.search);
  return (
    <div className="header__search">
      <form className="header__search-form" action={'/rooms/search'} method="GET">
        <div className="header__search-input-group">
          <input type="text" name="q" defaultValue={params.q || ''} className="header__search-input" placeholder="Tìm kiếm trên Easy Accomod"/>
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
