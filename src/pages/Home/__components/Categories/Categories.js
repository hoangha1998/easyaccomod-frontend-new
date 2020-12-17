import React from 'react';
import {Link} from "react-router-dom";
import imgNhatro from '../../../../assets/images/categories/nha-tro.jpg';
import imgNhaNguyenCan from '../../../../assets/images/categories/nha-nguyen-can.jpg';
import imgChungCuMini from '../../../../assets/images/categories/chung-cu-mini.jpg';
import imgChungCu from '../../../../assets/images/categories/chung-cu.png';
import './Categories.scss';

function Categories(props) {
  const categories = [
    {
      title: 'Nhà trọ',
      avatarUrl: {
        backgroundImage: `url(${imgNhatro})`
      }
    },

    {
      title: 'Nhà nguyên căn',
      avatarUrl: {
        backgroundImage: `url(${imgNhaNguyenCan})`
      }
    },

    {
      title: 'Chung cư mini',
      avatarUrl: {
        backgroundImage: `url(${imgChungCuMini})`
      }
    },

    {
      title: 'Chung cư',
      avatarUrl: {
        backgroundImage: `url(${imgChungCu})`
      }
    },

  ];

  return (
    <div className="home-categories">
        <div className="grid wide">
          <div className="home-categories__wrap">
            <h3 className="home-categories__title">Khám phá danh mục</h3>
            <div className="home-categories__list row">
              {
                categories.map((item,index) => (
                  <div className="col c-6 m-6 l-3" key={index}>
                    <Link className="home-categories-item" to="/">
                      <div className="home-categories-item__img" style={item.avatarUrl}></div>
                      <h3 className="home-categories-item__title">{item.title}</h3>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default Categories;