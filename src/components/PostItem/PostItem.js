import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './PostItem.scss'

function PostItem(props) {
  const post = props.post;
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteOnClick = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <Link to="" className="post-item">
      <div className="post-item__img" style={{backgroundImage: `url(${post.avatarUrl})`}}></div>
      <h4 className="post-item__title">{post.title}</h4>
      <div className="post-item__area">{post.area} m2 - {post.room_number}PN</div>
      <div className="post-item__price">{post.price}</div>
      <div className="post-item__address">
        <i className="material-icons">room</i>
        <span>{post.address}</span>
      </div>
      <div className="post-item__action" onClick={favoriteOnClick}>
        <i className="material-icons">{isFavorite ? 'favorite' : 'favorite_border'}</i>
      </div>
    </Link>
  );
}

export default PostItem;