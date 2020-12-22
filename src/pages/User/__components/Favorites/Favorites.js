import React from 'react';
import {Link} from "react-router-dom";
import './Favorites.scss';

function Favorites(props) {

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

  ];

  return (
    <div className="user-favorite">
      <h2 className="user-page-main__heading">Danh sách yêu thích</h2>
      <div className="user-page-main__body">
        <div className="favorites">
          {
            postList.map((item, index) => (
              <div className="favorite" key={index}>
                <Link className="favorite__link" to="#">
                  <div className="favorite__img" style={{backgroundImage: `url(${item.avatarUrl})`}}></div>
                  <div className="favorite__info">
                    <div className="wrap">
                      <h3 className="title">{item.title}</h3>
                      <div className="area">{item.area} m2</div>
                      <div className="price">{item.price}</div>
                    </div>
                    <div className="address">{item.address}</div>
                  </div>
                  <div className="favorite__action" title="Xóa">
                    <i className="material-icons">delete_outline</i>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Favorites;