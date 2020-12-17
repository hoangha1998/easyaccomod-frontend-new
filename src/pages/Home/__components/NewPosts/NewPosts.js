import React from 'react';
import PostItem from "../../../../components/PostItem/PostItem";
import './NewPost.scss'
import Pagination from "../../../../components/Pagination/Pagination";
import {Link} from "react-router-dom";

function NewPosts(props) {
  const postList = [
    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "20 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "Cho Thuê Phòng Giá Tốt_Mới Xây_Ưu đãi lớn cuối năm",
      avatarUrl: 'https://cdn.chotot.com/g4etl6v7S3NR4zxwxK_skw72fj0xhRpOmU-pDboHsSQ/preset:listing/plain/e20865d57265e44014bb9abfa7283486-2693304220333429004.jpg',
      area: '30',
      room_number: '1',
      price: "4 triệu/tháng",
      address: "TP.HCM",
    },

    {
      title: "🌈Phòng cao cấp mới xây, giờ tự do gần Chợ An Nhơn",
      avatarUrl: 'https://cdn.chotot.com/nlP7aic-t8aNf_52TKptfkcwofFpaao1ob0rXL8kmpI/preset:listing/plain/a0d54c35af99ddf0298953027c21c7c0-2696047849407867932.jpg',
      area: '25',
      room_number: '1',
      price: "2,6 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/cUW3W6wA_KFn5lK2nWkNLxyhH2n8KTarjI8VRoPTAPE/preset:listing/plain/5f538cff08b5a3586814261a9fec1a72-2698099987119264825.jpg',
      area: '40',
      room_number: '2',
      price: "5 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "Chung cư De Capella 56m² 1PN tầng cao nhà đẹp mới",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://st.chotot.com/imaginary/785cf0fb77deb77507318a847aa1952d836cbf3a/property_project/1454_overview_1/thumbnail?width=600&type=jpeg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/LGkFaLs5NNfLWF3cw-JPirVLkJVYxkh6V9I1OONqMsQ/preset:listing/plain/1681592755.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/Vywo1r2UbAy7WhsIXgtHdc5J2aOpNrUJ-SkRv3Zcqy8/preset:listing/plain/f7a1c42f1633b0827d6de66e35037c0e-2698105202517694257.jpg',
      area: '180',
      room_number: '2',
      price: "7 triệu/tháng",
      address: "Hà Nội",
    },

    {
      title: "🔥ĐẸP,THOÁNG,FULL ĐỒ. GIÁ RẺ SẬP SÀN ĐÓN TẾT 2021!",
      avatarUrl: 'https://cdn.chotot.com/KQxuEwZo425tyT3b8Gb1z3_pAdZPLwbswZVXFQ2wrUo/preset:listing/plain/000e3131164f47ca0442f86211fcdd6a-2677048826636910372.jpg',
      area: '180',
      room_number: '2',
      price: "10 triệu/tháng",
      address: "Hà Nội",
    },

  ];

  return (
    <div className="home-new-posts bg-gray">
      <div className="grid wide">
        <div className="home-new-posts__wrap">
          <h3 className="home-new-posts__title">Tin mới đăng</h3>

          <div className="home-new-posts__list">
            <div className="row">

              {
                postList.map((post, index) => (
                  <div className="col c-6 m-4 l-2-4" key={index}>
                  <PostItem post={post}/>
                  </div>
                ))
              }

            </div>
          </div>

          <div className="home-new-posts__more">
            <Link className="btn btn-link-more" to="">
              <span>Xem thêm</span>
              <i className="material-icons">
                double_arrow
              </i>
            </Link>
          </div>


        </div>

        <div className="home-new-post__pagination hide-mobile">
          <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default NewPosts;