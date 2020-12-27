import React from 'react';
import './Rooms.scss';
import {Link} from "react-router-dom";
import RoomsSortBar from "./__components/RoomsSortBar/RoomsSortBar";
import PostItem from "../../components/PostItem/PostItem";
import RoomsFilter from "./__components/RoomsFilter/RoomsFilter";
import {getAvailableRoomsAPI} from '../../api';
import {toast} from 'react-toastify';
import {getApiErrorMessage, getQueryParams} from '../../common/helpers';
import {ROOM_TYPE_NAME} from '../../common/constants';

class Rooms extends React.PureComponent {
  state = {
    isLoaded: false,
    rooms: [],
    type: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const {match: {params: {type}}, location: {search}} = this.props;
    const searchParams = getQueryParams(search);
    const params = {};
    if (type) {
      params.type = type;
    }
    if (searchParams.q) {
      params.q = searchParams.q;
    }
    getAvailableRoomsAPI(params).then(res => {
      this.setState({
        isLoaded: true,
        rooms: res.data?.data?.pageData || [],
        type: type,
      });
    }).catch(error => {
      toast.error(getApiErrorMessage(error));
    });
  };

  render() {
    const {isLoaded, rooms, type} = this.state;
    if (!isLoaded) {
      return (
        <div className="rooms-page page-paper">
          <div className="grid wide">
            Đang tải...
          </div>
        </div>
      );
    }
    return (
      <div className="rooms-page page-paper">
        <div className="grid wide">
          <h2 className="rooms-page__heading">{type ? ROOM_TYPE_NAME[type] : 'Kết quả tìm kiếm'}</h2>
          <div className="rooms-page__wrapper">
            <div className="row">
              <div className="col c-0 l-3">
                <div className="rooms-page-sidebar">
                  <h3 className="rooms-page-sidebar__heading">
                    <i className="material-icons">horizontal_split</i>
                    <span>Tất cả danh mục</span>
                  </h3>

                  <div className="rooms-page-sidebar__wrapper">
                    <ul className="sidebar-list">
                      <li className="sidebar-item sidebar-item--active">
                        <Link to={`/`}>Chung cư</Link>
                      </li>

                      <li className="sidebar-item">
                        <Link to={`/`}>Chung cư mini</Link>
                      </li>

                      <li className="sidebar-item">
                        <Link to={`/`}>Nhà nguyên căn</Link>
                      </li>

                      <li className="sidebar-item">
                        <Link to={`/`}>Nhà trọ</Link>
                      </li>
                    </ul>

                    {/*<div className="banner-sidebar">*/}
                    {/*  <img  src={bannerImg} alt="banner"/>*/}
                    {/*</div>*/}

                    <RoomsFilter/>

                  </div>
                </div>
              </div>
              <div className="col c-12  l-9">
                <div className="rooms-page-main">
                  <RoomsSortBar/>
                  {
                    !!rooms.length &&
                    <div className="rooms-page-room-list">
                      <div className="row">
                        {
                          rooms.map((room) => (
                            <div className="col c-6 m-4 l-3" key={room.id}>
                              <PostItem post={room}/>
                            </div>
                          ))
                        }
                      </div>
                      {/*<Pagination/>*/}
                    </div>
                  }
                  {
                    !rooms.length &&
                    <div className="no-data">
                      Không có dữ liệu
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Rooms;
