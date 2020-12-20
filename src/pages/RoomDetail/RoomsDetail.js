import React, {useState} from 'react';
import {Breadcrumb} from "../../components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../../components/Breadcrumb/BreadcrumbItem";
import './RoomsDetail.scss';
import RoomSlider from "./__components/RoomSlider/RoomSlider";
import {Link} from "react-router-dom";
import RoomOwner from "./__components/RoomOwner/RoomOwner";
import RoomRelate from "./__components/RoomRelate/RoomRelate";
import bannerImg from "../../assets/images/banner-sidebar.png"
import RoomRating from "./__components/RoomRating/RoomRating";
import UserRating from "../../components/UserRating/UserRating";



function RoomsDetail(props) {

  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteOnClick = () => {
    setIsFavorite(!isFavorite);
  }

  const images = [
    {
      url: 'https://images.wallpaperscraft.com/image/christmas_decorations_new_year_christmas_121631_800x600.jpg'
    },

    {
      url: 'https://images.wallpaperscraft.com/image/christmas_ball_christmas_decorations_jewelery_113334_800x600.jpg'
    },

    {
      url: 'https://images.wallpaperscraft.com/image/christmas_decorations_pine_needles_snowflakes_christmas_new_year_celebration_41115_800x600.jpg'
    },

    {
      url: 'https://images.wallpaperscraft.com/image/christmas_decorations_new_year_christmas_118533_800x600.jpg'
    },

    {
      url: 'https://images.wallpaperscraft.com/image/christmas_decorations_new_year_balloons_attributes_showcase_37543_800x600.jpg'
    }
  ];

  return (
    <div className="room-detail-page page-paper">
      <Breadcrumb>
        <BreadcrumbItem text="Nhà trọ" path={`/rooms`} />
        <BreadcrumbItem text="🌈Phòng cao cấp mới xây, giờ tự do gần Chợ An Nhơn" path="" isActive={true}/>
      </Breadcrumb>

      <div className="grid wide">
        <div className="room-detail-page__wrap">
          <div className="row">
            <div className="col c-12 m-12 l-8">
              <div className="room">
                <div className="room__img">
                  <RoomSlider images={images}/>
                </div>
                <div className="room__text">
                  <h2 className="room__title">BÁN ĐẤT VIEW BIỂN MẶT TIỀN QL51B Sổ Sẵn, XDTD </h2>
                  <div className="room__overview">
                    <div>
                      <span className="price">900 triệu</span>
                      <span className="area"> - 120  m2 - 4PN</span>
                    </div>

                    <div className="favorite" onClick={favoriteOnClick}>
                      <span>{isFavorite ? 'Đã lưu' : 'Lưu tin'}</span>
                      <i className="material-icons">{isFavorite ? 'favorite' : 'favorite_border'}</i>
                    </div>

                  </div>
                  <div className="room__address">
                    <i className="material-icons">place</i>
                    <span>Đường Quốc lộ 51B, Phường 11, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu</span>
                  </div>

                  <div className="room__service">
                    <label className="title">Cơ sở vật chất:</label>
                    <div className="room__service-list">
                      <div className="row">
                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Phòng tắm:</label>
                            <span> Khép kín - Có nóng lạnh</span>
                          </div>
                        </div>

                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Phòng bếp:</label>
                            <span> Khu bếp riêng</span>
                          </div>
                        </div>

                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Điều hòa:</label>
                            <span> Có</span>
                          </div>
                        </div>

                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Ban công:</label>
                            <span> Không</span>
                          </div>
                        </div>

                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Điện nước:</label>
                            <span> 3000vnđ/kWh - 30.000đ/m3</span>
                          </div>
                        </div>

                        <div className="col c-6 m-6 l-6">
                          <div className="room__service-item">
                            <label>Phòng tắm:</label>
                            <span> Khép kín - Có nóng lạnh</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="room__description">
                    Chính chủ cho thuê phòng trọ khu VIP Đảo Kim Cương, nằm trong khu trung tâm hành chính quận 2, đầy đủ nội thất (như hình), an ninh tuyệt đối, sát sông Sài Gòn, thoáng mát, yên tĩnh, giờ giấc tự do.
                    Phòng có bếp + toilet riêng trong phòng, đc nấu ăn thoải mái, có thang máy mới, hiện đại, nội thất mới đẹp, nhà mới nên rất sạch sẽ, thích hợp cho dân văn phòng hoặc vợ chồng mới cưới, sinh viên...
                    Giao thông thuận tiện đi lại các quận 1,3,4,9,Bình Thạnh, Thủ Đức ... ko kẹt xe, ngập nước
                    Điện 3500k/số
                    Nước 100k/người
                    Gửi xe + internet free
                    Liên hệ ms. Hằng để xem phòng thực tế.
                  </div>

                  <div className="room__contact">
                    Liện hệ chủ nhà: <Link className="phone" to="">0909380403</Link>
                  </div>

                </div>

                <RoomRating/>

                <UserRating/>
              </div>

            </div>
            <div className="col c-12 m-12 l-4">
              <div className="right-bar">
                <RoomOwner/>

                <div className="banner-sidebar">
                  <img  src={bannerImg} alt="banner"/>
                </div>


                <RoomRelate/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsDetail;