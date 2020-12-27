import React from 'react';
import {Link} from "react-router-dom";
import './PostItem.scss';
import {getApiErrorMessage, imageUrl} from '../../common/helpers';
import {favoriteAPI, getIsFavoriteAPI, removeFavoriteAPI} from '../../api';
import {toast} from 'react-toastify';

class PostItem extends React.PureComponent {
  state = {
    isFavorite: undefined,
  };

  componentDidMount() {
    this.getIsFavorite();
  }

  getIsFavorite = () => {
    const {post} = this.props;
    getIsFavoriteAPI(post.id).then(res => {
      this.setState({
        isFavorite: res?.data?.data,
      });
    }).catch(error => {
      console.error(error);
    });
  };

  toggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {post} = this.props;
    const {isFavorite} = this.state;
    const api = isFavorite ? removeFavoriteAPI : favoriteAPI;
    api(post.id).then(() => {
      this.setState({
        isFavorite: !isFavorite,
      });
    }).catch(error => {
      toast.error(getApiErrorMessage(error));
    });
  };

  render() {
    const {post} = this.props;
    const {isFavorite} = this.state;

    const avatar = post.images?.[0];

    return (
      <Link to={`/rooms/${post.id}`} className="post-item">
        <div className="post-item__img" style={{backgroundImage: `url(${imageUrl(avatar?.url)})`}}/>
        <h4 className="post-item__title">{post.title}</h4>
        {/*<div className="post-item__area">{post.area} m2 - {post.room_number}PN</div>*/}
        <div className="post-item__price">{post.price}</div>
        <div className="post-item__address">
          <i className="material-icons">room</i>
          <span>{post.province?.name}</span>
        </div>
        {
          isFavorite !== undefined &&
          <div className="post-item__action" onClick={this.toggleFavorite}>
            <i className="material-icons">{isFavorite ? 'favorite' : 'favorite_border'}</i>
          </div>
        }
      </Link>
    );
  }
}

export default PostItem;
