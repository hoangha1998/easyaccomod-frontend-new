import React from 'react';
import './RoomRating.scss';
import {Link} from "react-router-dom";
import RattingStars from "../../../../components/RattingStarts/RattingStars";
import Pagination from "../../../../components/Pagination/Pagination";

function RoomRating(props) {
  const commentList = [
    {
      user: "HoangHa",
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EtqQ3Nb7C1hX3EJnpT8ggARy1L5Xp7mGfw&usqp=CAU',
      content: 'Nhà đẹp, thoáng mát,...',
      rating: '5',
      created: '2020-12-12 - 15: 14'
    },

    {
      user: "Lisa",
      avatarUrl: 'https://i.pinimg.com/originals/47/48/ce/4748ce0117763cfe2f48f3221583a420.jpg',
      content: 'Ờ mây zing, gút chóp',
      rating: '5',
      created: '2020-12-12 - 15: 14'
    },

    {
      user: "Rose",
      avatarUrl: 'https://i.pinimg.com/originals/18/1c/d4/181cd43f12485924175a6f397ed26a5d.jpg',
      content: 'Nhà đẹp, thoáng mát,...',
      rating: '5',
      created: '2020-12-12 - 15: 14'
    },
  ];

  return (
    <div className="room-rating">
      <h3 className="room-rating__title">
        Đánh giá phòng
      </h3>
      <div className="room-rating__wrapper">
        <div className="room-rating-overview__briefing">
          <div className="room-rating-overview__score-wrapper">
            <span className="room-rating-overview__rating-score">3.5</span>
            <span className="room-rating-overview__rating-score-out-of">trên 5</span>
          </div>
          <div className="room-rating-overview__stars">
           <RattingStars score={4} />
          </div>
        </div>

        <div className="room-rating-overview__filters">
          <div className="room-rating-overview__filter room-rating-overview__filter--active">Tất cả</div>

          <div className="room-rating-overview__filter">5 sao (42)</div>

          <div className="room-rating-overview__filter">4 sao (1)</div>

          <div className="room-rating-overview__filter">3 sao (0)</div>

          <div className="room-rating-overview__filter">2 sao (0)</div>

          <div className="room-rating-overview__filter">1 sao (0)</div>
        </div>
      </div>

      <div className="room-rating__list">
        <div className="room-rating-comment-list">
          {
            commentList.map((item, index) =>(
              <div className="room-rating-comment-item" key={index}>
                <div className="room-rating-comment-item__avatar" style={{backgroundImage: `url(${item.avatarUrl})`}}></div>
                <div className="room-rating-comment-item__main">
                  <Link className="room-rating-comment-item__author-name" to="">{item.user}</Link>
                  <div className="room-rating-comment-item__rating">
                    <RattingStars score={item.rating}/>
                  </div>
                  <div className="room-rating-comment-item__content">{item.content}</div>
                  <div className="room-rating-comment-item__created">{item.created}</div>
                </div>

              </div>
            ))
          }
        </div>

        <div className="room-rating-comment-pagination">
          <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default RoomRating;
