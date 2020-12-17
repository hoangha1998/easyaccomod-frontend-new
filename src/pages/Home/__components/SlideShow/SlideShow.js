import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss';
import './SlideShow.scss'

SwiperCore.use([Pagination, Autoplay]);

function SlideShow(props) {

  const images = [
    {url: 'https://images.wallpaperscraft.com/image/house_cottage_summer_114508_1280x720.jpg'},
    {url: 'https://images.wallpaperscraft.com/image/home_theater_furniture_style_80216_1280x720.jpg'},
    {url: 'https://images.wallpaperscraft.com/image/home_art_winter_131726_1280x720.jpg'},
    {url: 'https://images.wallpaperscraft.com/image/building_home_facade_175296_1280x720.jpg'},

  ];
  const slides = images.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="slide-item" style={{backgroundImage: `url(${item.url})`}}></div>
      </SwiperSlide>
    )
  });

  return (
    <div className="home-slide-show">
      <div className="grid wide">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={12}
          autoplay={{
            delay: 5000,
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;