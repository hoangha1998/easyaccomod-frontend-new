import React from 'react';
import './UserRating.scss'
import RattingStars from "../RattingStarts/RattingStars";


function UserRating(props) {
  return (
    <div className="user-rating">
      <h3 className="user-rating__title">
       Đánh giá của bạn
      </h3>
      <div className="user-rating__wrapper">
        <div className="user-rating-star">
          <RattingStars score={0}/>
        </div>
        <form className="user-rating-form">
          <div className="input-group">
            <textarea rows="5" type="text" className="" placeholder="Nhập bình luận của bạn..."/>
            <button>Gửi</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRating;