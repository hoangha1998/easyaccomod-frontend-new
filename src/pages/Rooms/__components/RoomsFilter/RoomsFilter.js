import React from 'react';
import './RoomFilter.scss'

function RoomsFilter(props) {
  return (
    <div  className="rooms-filter">
        <h3 className="rooms-filter__heading">
          <i className="material-icons">filter_alt</i>
          <span>Bộ lọc tìm kiếm</span>
        </h3>
    </div>
  );
}

export default RoomsFilter;