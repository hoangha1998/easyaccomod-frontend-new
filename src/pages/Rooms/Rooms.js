import React from 'react';
import './Rooms.scss'
import {Link} from "react-router-dom";
import bannerImg from "../../assets/images/banner-sidebar.png";
import RoomsSortBar from "./__components/RoomsSortBar/RoomsSortBar";
import PostItem from "../../components/PostItem/PostItem";
import Pagination from "../../components/Pagination/Pagination";
import RoomsFilter from "./__components/RoomsFilter/RoomsFilter";

function Rooms(props) {

  const postList = [
    {
      id: 1,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "20 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 2,
      title: "Cho Thuê Phòng Giá Tốt_Mới Xây_Ưu đãi lớn cuối năm",
      avatarUrl: 'https://cdn.chotot.com/g4etl6v7S3NR4zxwxK_skw72fj0xhRpOmU-pDboHsSQ/preset:listing/plain/e20865d57265e44014bb9abfa7283486-2693304220333429004.jpg',
      area: '30',
      room_number: '1',
      price: "4 triệu/tháng",
      address: "TP.HCM",
    },

    {
      id: 3,
      title: "🌈Phòng cao cấp mới xây, giờ tự do gần Chợ An Nhơn",
      avatarUrl: 'https://cdn.chotot.com/nlP7aic-t8aNf_52TKptfkcwofFpaao1ob0rXL8kmpI/preset:listing/plain/a0d54c35af99ddf0298953027c21c7c0-2696047849407867932.jpg',
      area: '25',
      room_number: '1',
      price: "2,6 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 4,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/cUW3W6wA_KFn5lK2nWkNLxyhH2n8KTarjI8VRoPTAPE/preset:listing/plain/5f538cff08b5a3586814261a9fec1a72-2698099987119264825.jpg',
      area: '40',
      room_number: '2',
      price: "5 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 5,
      title: "Chung cư De Capella 56m² 1PN tầng cao nhà đẹp mới",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 6,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://st.chotot.com/imaginary/785cf0fb77deb77507318a847aa1952d836cbf3a/property_project/1454_overview_1/thumbnail?width=600&type=jpeg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 7,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/LGkFaLs5NNfLWF3cw-JPirVLkJVYxkh6V9I1OONqMsQ/preset:listing/plain/1681592755.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 8,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 9,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/Vywo1r2UbAy7WhsIXgtHdc5J2aOpNrUJ-SkRv3Zcqy8/preset:listing/plain/f7a1c42f1633b0827d6de66e35037c0e-2698105202517694257.jpg',
      area: '180',
      room_number: '2',
      price: "7 triệu/tháng",
      address: "Hà Nội",
    },

    {
      id: 10,
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

  ];

  return (
    <div className="rooms-page page-paper">
      <div className="grid wide">
        <h2 className="rooms-page__heading">Chung cư</h2>
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

                  <div className="banner-sidebar">
                    <img  src={bannerImg} alt="banner"/>
                  </div>

                  <RoomsFilter/>

                </div>
              </div>
            </div>
            <div className="col c-12  l-9">
              <div className="rooms-page-main">
                <RoomsSortBar/>

                <div className="rooms-page-room-list">
                  <div className="row">
                    {
                      postList.map((room,index) => (
                        <div className="col c-6 m-4 l-3">
                          <PostItem post={room}/>
                        </div>
                      ))
                    }

                  </div>

                  <Pagination/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Rooms;