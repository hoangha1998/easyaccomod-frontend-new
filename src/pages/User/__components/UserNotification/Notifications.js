import React from 'react';
import './Notifications.scss';
import Pagination from "../../../../components/Pagination/Pagination";

function Notifications() {
  const notifications = [
    {
      img: 'https://assets.ifttt.com/images/channels/651849913/icons/large.png',
      content: '✅ Báo cáo của bạn đã được quản trị viên xử lí.',
      created: '20-12-2020'
    },

    {
      img: 'https://assets.ifttt.com/images/channels/651849913/icons/large.png',
      content: '⏰ Đã tiếp nhận báo cáo bài viết của bạn. Quản trị viên sẽ xác minh và xử lí trong thời gian sớm nhất.',
      created: '20-12-2020'
    },

    {
      img: 'https://assets.ifttt.com/images/channels/651849913/icons/large.png',
      content: '✅ Báo cáo của bạn đã được quản trị viên xử lí.',
      created: '20-12-2020'
    },

    {
      img: 'https://assets.ifttt.com/images/channels/651849913/icons/large.png',
      content: '✅ Báo cáo của bạn đã được quản trị viên xử lí.',
      created: '20-12-2020'
    },

    {
      img: 'https://assets.ifttt.com/images/channels/651849913/icons/large.png',
      content: '✅ Báo cáo của bạn đã được quản trị viên xử lí.',
      created: '20-12-2020'
    },

  ];

  return (
    <div className="user-notification">
      <h2 className="user-page-main__heading">Thông báo</h2>
      <div className="user-main-page__body">
        <ul className="notifications">

          {
            notifications.map((item, index) => (
              <li className="notification">
                <div className="notification__img">
                  <img src={item.img} alt="icon"/>
                </div>
                <div className="notification__info">
                  <div className="content">{item.content}</div>
                  <span className="created">{item.created}</span>
                </div>
              </li>
            ))
          }
        </ul>

        <Pagination/>
      </div>
    </div>
  )
}

export default Notifications;
